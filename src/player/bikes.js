import { supabase } from "../supabase.js";

export async function getPlayerBikes() {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User is not logged in.");

  const { data, error } = await supabase
    .from("player_bikes")
    .select("*")
    .eq("user_id", user.id);

  if (error) throw error;

  return data;
}
