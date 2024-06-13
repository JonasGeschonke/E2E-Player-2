import { createClient } from "@supabase/supabase-js";
import env from "@astrojs/deno"

// use deno deploy env variables instead of import.meta.env

// export const supabase = createClient(
//   env.get("SUPABASE_URL"),
//   Deno.env.get("SUPABASE_ANON_KEY"),
// );

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
);