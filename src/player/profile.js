import { supabase } from "../supabase.js";

export async function getProfile() {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User is not logged in.");

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) throw error;

  return data;
}
