import { supabase } from "../supabase.js";

export async function getSettings() {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User is not logged in.");

  const { data, error } = await supabase
    .from("player_settings")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) throw error;

  return data;
}

export async function saveSettings(settings) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User is not logged in.");

  const { data, error } = await supabase
    .from("player_settings")
    .upsert({
      user_id: user.id,
      ...settings,
      updated_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}
