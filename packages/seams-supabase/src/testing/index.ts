import type { SupabaseSeam, SupabaseSeamStatus } from '../index'

export const createFakeSupabaseSeam = (status: SupabaseSeamStatus = { ready: true }): SupabaseSeam => ({
  status: () => status,
})
