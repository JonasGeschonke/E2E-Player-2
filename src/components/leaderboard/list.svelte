<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount } from "svelte";

  export let supabase_url: string;
  export let anon_key: string;

  let supabase = createClient(supabase_url, anon_key);

  async function fetchData(): Promise<{data: any, error: any}> {
    return await supabase.from('record').select('*').order('time', { ascending: true });
  }

  onMount(async() => {
    console.log("on mount");
  });
</script>

<div>
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
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div
            class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
          ></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div
            class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
          ></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div
            class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
          ></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div>
          <div
            class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
          ></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  {:then data}
    <div class="hidden md:grid grid-cols-3 gap-1 justify-end items-end">
      <div class="flex flex-col items-center">
        <div class="flex items-center flex-col gap-3 font-semibold text-lg">
          <a href="/player/6166de04-b0b8-42ec-bacc-5cffb6caec01"
            ><div
              class="bg-cover bg-center cursor-pointer rounded-full"
              style="background-image: url(&quot;https://unfwmfxptujqlrehfuag.supabase.co/storage/v1/object/public/avatars/6166de04-b0b8-42ec-bacc-5cffb6caec01-0.01848595308458223.jpg&quot;); height: 80px; width: 80px;"
            ></div></a
          ><a
            class="hover:underline"
            href="/player/6166de04-b0b8-42ec-bacc-5cffb6caec01"
            >{data['data'][1].name}</a
          >
          <div class="flex items-center gap-2"></div>
        </div>
        <div
          class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm"
        >
          <div>{data['data'][1].time}</div>
        </div>
        <div
          class="w-full h-28 bg-gradient-to-b rounded-tl-xl border-slate-700 from-gray-400 flex items-center justify-center text-3xl"
        >
          #2
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center flex-col gap-3 font-semibold text-lg">
          <a href="/player/b244d7c9-558a-4f21-8a4f-8bd540ca443d"
            ><div
              class="bg-cover bg-center cursor-pointer rounded-full"
              style="background-image: url(&quot;https://unfwmfxptujqlrehfuag.supabase.co/storage/v1/object/public/avatars/b244d7c9-558a-4f21-8a4f-8bd540ca443d-0.5230745852385903.webp&quot;); height: 80px; width: 80px;"
            ></div></a
          ><a
            class="hover:underline"
            href="/player/b244d7c9-558a-4f21-8a4f-8bd540ca443d"
            >{data['data'][0].name}</a
          >
        </div>
        <div
          class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm"
        >
          <div>{data['data'][0].time}</div>
        </div>
        <div
          class="w-full h-40 bg-gradient-to-b rounded-t-xl border-slate-700 from-yellow-500/60 flex items-center justify-center text-3xl"
        >
          #1
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center flex-col gap-3 font-semibold text-lg">
          <a href="/player/c3dffe0b-09aa-4566-b6eb-f5b320c623bf"
            ><div
              class="bg-cover bg-center cursor-pointer rounded-full"
              style="background-image: url(&quot;https://unfwmfxptujqlrehfuag.supabase.co/storage/v1/object/public/avatars/c3dffe0b-09aa-4566-b6eb-f5b320c623bf-0.1389997748164764.JPG&quot;); height: 80px; width: 80px;"
            ></div></a
          ><a
            class="hover:underline"
            href="/player/c3dffe0b-09aa-4566-b6eb-f5b320c623bf"
            >{data['data'][2].name}</a
          >
          <div class="flex items-center gap-2"></div>
        </div>
        <div
          class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm"
        >
          <div>{data['data'][2].time}</div>
        </div>
        <div
          class="w-full h-20 bg-gradient-to-b rounded-tr-xl border-slate-700 from-orange-400/40 flex items-center justify-center text-3xl"
        >
          #3
        </div>
      </div>
    </div>
    <div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {#each data['data'].slice(3) as val}
          <li class="mb-10 ms-4">
            <div
              class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time
              class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >{val.time}</time
            >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {val.name}
            </h3>
          </li>
        {/each}
      </ol>
    </div>
  {/await}
</div>
