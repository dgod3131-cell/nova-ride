# NOVA RIDE Supabase

Supabase is used as the backend for NOVA RIDE.

## Authentication

Supabase Auth handles:

- Email/password login
- Account creation
- Persistent user sessions

## profiles

Stores:

- user ID
- username
- level
- balance
- created_at

Default new player:

- Level: 1
- Balance: RM 100,000

## player_settings

Stores:

- KPH/MPH preference
- Camera sensitivity
- Camera distance
- Camera Y inversion
- Graphics quality
- FPS limit
- Mobile button size

## player_bikes

Stores:

- Player ID
- Bike ID
- Ownership
- Purchase price
- Creation time

## player_upgrades

Stores:

- Player ID
- Bike ID
- Engine
- ECU
- Exhaust
- Transmission
- Clutch
- Tires
- Brakes
- Suspension
- Weight
- Aero

## Security

All player data must be protected with Supabase Row Level Security (RLS).

Players must only be able to access and modify their own data.

Never put a Supabase service-role key in the client-side code or GitHub repository.
