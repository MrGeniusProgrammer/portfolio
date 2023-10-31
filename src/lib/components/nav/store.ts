import { writable } from "svelte/store";

export const navToggle = writable(false);

export const toggle = () => {
  navToggle.update(value => !value);
}

export const unToggle = () => {
  navToggle.set(false);
}