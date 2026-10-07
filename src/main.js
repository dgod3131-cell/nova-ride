import { supabase } from "./supabase.js";
import { NOVA_RIDE_CONFIG } from "./config.js";

export const NovaRide = {
  supabase,
  config: NOVA_RIDE_CONFIG
};

console.log("NOVA RIDE initialized.");
console.log("Starting balance:", NOVA_RIDE_CONFIG.startingBalance);
console.log("Starting level:", NOVA_RIDE_CONFIG.startingLevel);
