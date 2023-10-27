import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Vector2D } from "./types";

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

export function getRaysIntersection(p0: Vector2D, d0: Vector2D, p1: Vector2D, d1: Vector2D) {
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  const det = d1.x * d0.y - d1.y * d0.x;
  if (det === 0) return false;

  const u = (dy * d1.x - dx * d1.y) / det;
  const v = (dy * d0.x - dx * d0.y) / det;
  if (u < 0 || v < 0) return false;

  return true;
};

export function getSegmentIntersection(s0: Vector2D, e0: Vector2D, s1: Vector2D, e1: Vector2D) {
  var det, gamma, lambda;
  det = (e0.x - s0.x) * (e1.y - s1.y) - (e1.x - s1.x) * (e0.y - s0.y);
  if (det === 0) {
    return false;
  } else {
    lambda = ((e1.y - s1.y) * (e1.x - s0.x) + (s1.x - e1.x) * (e1.y - s0.y)) / det;
    gamma = ((s0.y - e0.y) * (e1.x - s0.x) + (e0.x - s0.x) * (e1.y - s0.y)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};