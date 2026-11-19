# seams-supabase

The seam for Supabase: a typed SDK boundary between applications and Supabase, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createSupabaseSeam()` returns a seam whose `status()` reports it is not ready, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-supabase`: the Supabase seam (SDK).

## Licence

MIT
