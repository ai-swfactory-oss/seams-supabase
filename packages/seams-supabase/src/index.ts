export interface SupabaseSeamStatus {
  readonly ready: boolean
}

export interface SupabaseSeam {
  readonly status: () => SupabaseSeamStatus
}

export const createSupabaseSeam = (): SupabaseSeam => ({
  status: () => ({ ready: false }),
})
