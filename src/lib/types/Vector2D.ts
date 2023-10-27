export class Vector2D {
  x: number;
  y: number;

  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  Set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  Copy(v: Vector2D) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  Clone() {
    return new Vector2D(this.x, this.y);
  }

  Add(v: Vector2D) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  AddScalar(scalar: number) {
    this.x += scalar;
    this.y += scalar;
    return this;
  }

  Sub(v: Vector2D) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  Mult(v: Vector2D) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  MultScalar(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  Div(v: Vector2D) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  DivScalar(scalar: number) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  Length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  Cross() {
    return new Vector2D(this.y, -this.x);
  }

  Angle(angle: number) {
    // x' = xcosθ - ysinθ.
    // y' = xsinθ + ycosθ.
    const x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    return this.Set(x, y);
  }

  Normalize() {
    const length = this.Length();
    if (length == 0) {
      this.Set(0, 0);
    } else {
      this.DivScalar(length);
    }

    return this;
  }

  Dot(v: Vector2D) {
    return this.x * v.x + this.y * v.y;
  }

  Equals(v: Vector2D) {
    return this.x === v.x && this.y === v.y;
  }
}