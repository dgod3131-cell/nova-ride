import { supabase } from "../supabase.js";

export async function getBikeUpgrades(bikeId) {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User is not logged in.");

  const { data, error } = await supabase
    .from("player_upgrades")
    .select("*")
    .eq("user_id", user.id)
    .eq("bike_id", bikeId)
    .single();

  if (error) throw error;

  return data;
    }
