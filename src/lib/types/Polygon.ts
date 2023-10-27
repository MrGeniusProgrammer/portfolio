import { getSegmentIntersection, next } from "$lib/utils";
import type { Vector2D } from "./Vector2D";

export class Polygon {
  points: Vector2D[];

  constructor (points: Vector2D[]) {
    this.points = points;
  }

  Clone() {
    const points: Vector2D[] = [];
    for (let i = 0; i < this.points.length; i++) {
      points.push(this.points[i].Clone());
    }

    return new Polygon(points);
  }

  Reset() {
    this.points = [];
  }

  AddPoint(...points: Vector2D[]) {
    this.points.push(...points);
  };

  AddPolygon(p: Polygon) {
    this.AddPoint(...p.points)
  }

  IsIntersectPolygon(polygon: Polygon) {
    for (let i = 0; i < this.points.length; i++) {
      const s0 = this.points[i];
      const e0 = this.points[next(i, this.points.length)];
      const d0 = e0.Clone().Sub(s0);

      for (let j = 0; j < polygon.points.length; j++) {
        const s1 = polygon.points[j];
        const e1 = polygon.points[next(j, polygon.points.length)];
        const d1 = e1.Clone().Sub(s1);

        let intersection = getSegmentIntersection(s0, d0, s1, d1);

        if (intersection) {
          return intersection
        };
      }
    }

    return null;
  }
}