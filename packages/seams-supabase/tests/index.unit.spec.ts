import { describe, expect, it } from 'vitest'

import { createSupabaseSeam } from '../src/index'
import { createFakeSupabaseSeam } from '../src/testing/index'

describe('createSupabaseSeam', () => {
  it('reports not ready while the seam is a skeleton', () => {
    expect(createSupabaseSeam().status()).toEqual({ ready: false })
  })
})

describe('createFakeSupabaseSeam', () => {
  it('reports ready by default', () => {
    expect(createFakeSupabaseSeam().status()).toEqual({ ready: true })
  })

  it('returns the status it was given', () => {
    const status = { ready: false }
    expect(createFakeSupabaseSeam(status).status()).toBe(status)
  })
})
