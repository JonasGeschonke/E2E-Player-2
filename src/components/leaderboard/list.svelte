<script lang="ts">
  import { createClient } from "@supabase/supabase-js";

  interface Record {
    name: string;
    email: string;
    num_laps: number;
    time: string;
  }
  
  console.assert(import.meta.env.PUBLIC_SUPABASE_URL ?? process.env.PUBLIC_SUPABASE_URL);
  console.assert( import.meta.env.PUBLIC_SUPABASE_SERVICE_KEY ?? process.env.PUBLIC_SUPABASE_SERVICE_KEY);

  let supabase_url = import.meta.env.PUBLIC_SUPABASE_URL ?? process.env.PUBLIC_SUPABASE_URL;
  let supabase_key = import.meta.env.PUBLIC_SUPABASE_SERVICE_KEY ?? process.env.PUBLIC_SUPABASE_SERVICE_KEY;

  let supabase = createClient(supabase_url,supabase_key);

  async function fetchData(): Promise<{ data: any; error: any }> {
    return await supabase
      .from("record")
      .select("*")
      .order("time", { ascending: true });
  }

  let name: string;
  let email: string;
  let num_laps: number;
  let time: string;
  let result: Record;
  let showError: boolean;
  let showSuccess: boolean;

  $: result = {
    name,
    email,
    num_laps,
    time,
  };

  $: showError = false;
  $: showSuccess = false;

  function convertSecondsToString(time: number): string {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 1000);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    const formattedMilliseconds = String(milliseconds).padStart(3, "0");

    return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  }

  function convertTime(time: string): number {
    return parseFloat(time);
  }

  async function submit(): Promise<void> {
    let record = {
      name: result.name,
      email: result.email,
      num_laps: result.num_laps,
      time: convertTime(result.time),
    };
    console.log(record);
    const { error } = await supabase.from("record").insert(result);
    if (error) {
      showSuccess = false;
      showError = true;
    } else {
      showError = false;
      showSuccess = true;
    }
  }
</script>

<section class="relative z-40 mx-4">
  {#if showError}
    <div
      class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Error:</span> Something went wrong. Please contact
        you're local E2E-Player #2 Member.
      </div>
    </div>
  {:else if showSuccess}
    <div
      class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
        />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Successfully submitted lap time.</span>
      </div>
    </div>
  {/if}
</section>

<section class="relative z-40">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div
      class="p-6 bg-background-900/75 border border-background-900/65 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h2
        class="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Add new lap time
      </h2>
      <form
        on:submit|preventDefault={submit}
        id="entry-form"
        class="p-4 md:p-5"
      >
        <div class="grid gap-4 mb-4 grid-cols-2">
          <div class="col-span-2 sm:col-span-1">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-text-200 dark:text-white"
              >Name</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-text-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="John Doe"
              bind:value={name}
              required
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="time"
              class="block mb-2 text-sm font-medium text-text-200 dark:text-white"
              >Lap Time</label
            >
            <div class="flex">
              <input
                type="text"
                id="time"
                class="bg-gray-50 border leading-none border-gray-300 text-text-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                pattern="([0-9]{'{'}1,3{'}'}.[0-9]{'{'}1,3{'}'})"
                placeholder="Laptime in Seconds (97.738)"
                bind:value={time}
                required
              />
            </div>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="num_laps"
              class="block mb-2 text-sm font-medium text-text-200 dark:text-white"
              >Number of Laps</label
            >
            <input
              type="number"
              name="num_laps"
              id="num_laps"
              class="bg-gray-50 border border-gray-300 text-text-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="3"
              bind:value={num_laps}
              required
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-text-200 dark:text-white"
              >E-Mail (optional)</label
            >
            <input
              type="text"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-text-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="John.Doe@me.com"
              bind:value={email}
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-text-200 inline-flex items-center bg-accent-600 hover:bg-accent-800 focus:ring-4 focus:outline-none focus:ring-accent-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path></svg
          >
          Add new lap time record
        </button>
      </form>
    </div>
  </div>
</section>

<section class="relative z-40">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div
      class="p-6 bg-background-900/75 border border-background-900/65 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h2
        class="mb-10 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        Leaderboard
      </h2>
      {#await fetchData()}
        <div
          role="status"
          class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div class="flex items-center justify-between">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
            ></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
            ></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
            ></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
            ></div>
          </div>
          <div class="flex items-center justify-between pt-4">
            <div>
              <div
                class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
              ></div>
              <div
                class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"
              ></div>
            </div>
            <div
              class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"
            ></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      {:then data}
        <div class="hidden md:grid grid-cols-3 gap-1 justify-end items-end">
          <div class="flex flex-col items-center">
            <div class="flex items-center flex-col gap-3 font-semibold text-lg">
              <span class="text-gray-400 text-3xl font-bold"
                >{data["data"][1].name}</span
              >
              <div class="flex items-center gap-2"></div>
            </div>
            <div
              class="flex text-text-200 font-bold flex-col py-2 mb-1 items-center text-lg"
            >
              <div>{convertSecondsToString(data["data"][1].time)}</div>
            </div>
            <div
              class="w-full font-bold text-text-200 h-28 bg-gradient-to-b rounded-tl-xl border-slate-700 from-gray-400 flex items-center justify-center text-3xl"
            >
              #2
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center flex-col gap-3 font-semibold text-lg">
              <span class="text-yellow-500/60 text-3xl font-bold"
                >{data["data"][0].name}</span
              >
              <div class="flex items-center gap-2"></div>
            </div>
            <div
              class="flex text-text-200 font-bold flex-col py-2 mb-1 items-center text-lg"
            >
              <div>{convertSecondsToString(data["data"][0].time)}</div>
            </div>
            <div
              class="w-full font-bold text-text-200 h-40 bg-gradient-to-b rounded-t-xl border-slate-700 from-yellow-500/60 flex items-center justify-center text-3xl"
            >
              #1
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex items-center flex-col gap-3 font-semibold text-lg">
              <span class="text-orange-400/40 text-3xl font-bold"
                >{data["data"][2].name}</span
              >
              <div class="flex items-center gap-2"></div>
            </div>
            <div
              class="flex text-text-200 font-bold flex-col py-2 mb-1 items-center text-lg"
            >
              <div>{convertSecondsToString(data["data"][2].time)}</div>
            </div>
            <div
              class="w-full font-bold text-text-200 h-20 bg-gradient-to-b rounded-tr-xl border-slate-700 from-orange-400/40 flex items-center justify-center text-3xl"
            >
              #3
            </div>
          </div>
        </div>
        <hr
          class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-text-500 to-transparent opacity-25"
        />
        <div>
          {#each data["data"].slice(3) as val, index}
            <div
              class="w-full p-6 mb-1.5 bg-secondary-800/65 border border-secondary-900 rounded-lg shadow"
            >
              <div
                class="flex flex-row justify-start items-center content-center gap-3"
              >
                <div class="w-1/6 flex flex-row gap-3">
                  <h4
                    class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tr to-accent-400 via-accent-600 from-accent-500"
                  >
                    #{index + 4}
                  </h4>
                  <span class="border-r-2 rounded-md border border-primary-600"
                  ></span>
                </div>
                <div
                  class="w-2/6 flex flex-row gap-8 content-center items-center"
                >
                  <h5 class="text-2xl text-text-200 font-semibold">
                    {val.name}
                  </h5>
                </div>
                <div
                  class="w-3/6 flex flex-row justify-end justify-items-start"
                >
                  <div class="w-2/6 flex flex-col justify-start">
                    <p class="text-xl text-text-200 font-semibold text-left">
                      {convertSecondsToString(val.time)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/await}
    </div>
  </div>
</section>
