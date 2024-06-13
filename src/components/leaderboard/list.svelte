<script lang="ts">
  // import { supabase } from "../../lib/subabase";
  import { createClient } from "@supabase/supabase-js";
  const supabase = createClient(
    "https://tzxvonzxzpbbcvqqlfio.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eHZvbnp4enBiYmN2cXFsZmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NTA4MzAsImV4cCI6MjAxNzUyNjgzMH0.j5CgTim-mv04NXfjCiQHlrb-9XB81ZpvEJw-61NBEXw",
  );
  let records: any[] = [];
  let prom = loadRecords();

  async function loadRecords() {
    const { data, error } = await supabase
      .from("record")
      .select("*")
      .order("time", { ascending: false });

    if (error) {
      console.error("Error loading records:", error);
    } else {
      records = data || []; // Assign an empty array if data is undefined or null
    }
  }
</script>

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
        href="/player/6166de04-b0b8-42ec-bacc-5cffb6caec01">Bob McAleavey</a
      >
      <div class="flex items-center gap-2"></div>
    </div>
    <div class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
      <div>6999.37 points</div>
      <div>(70 challenges)</div>
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
        href="/player/b244d7c9-558a-4f21-8a4f-8bd540ca443d">Leon</a
      >
    </div>
    <div class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
      <div>7099.93 points</div>
      <div>(71 challenges)</div>
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
        href="/player/c3dffe0b-09aa-4566-b6eb-f5b320c623bf">Danuve</a
      >
      <div class="flex items-center gap-2"></div>
    </div>
    <div class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
      <div>6994.16 points</div>
      <div>(70 challenges)</div>
    </div>
    <div
      class="w-full h-20 bg-gradient-to-b rounded-tr-xl border-slate-700 from-orange-400/40 flex items-center justify-center text-3xl"
    >
      #3
    </div>
  </div>
</div>
<div>
  {#await prom}
    Doppel-Test
  {:then values}
    {#each records as val}
      <div class="flex flex-col">
        <span>{val.id}</span>
        <span>{val.time}</span>
        <span>{val.name}</span>
      </div>
    {/each}
  {/await}
</div>
