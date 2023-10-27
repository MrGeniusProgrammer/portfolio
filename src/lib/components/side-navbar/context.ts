import { writable, type Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'

type CurrentInViewport = string
type Context = Writable<CurrentInViewport>

export function setCurrentInViewport() {
  let currentInViewport = writable<CurrentInViewport>()
  setContext('currentInViewport', currentInViewport)
}

export function getCurrentInViewport() {
  return getContext<Context>('currentInViewport')
}
