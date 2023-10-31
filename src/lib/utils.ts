import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function wait(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export function next(i: number, length: number) {
  return (i + 1) % length;
}

export function prev(i: number, length: number) {
  return (i - 1 + length) % length;
}