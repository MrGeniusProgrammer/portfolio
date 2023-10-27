<script lang="ts">
	import { Polygon, Vector2D } from '$lib/types';
	import { cn, getRaysIntersection, getSegmentIntersection, next } from '$lib/utils';
	import { getContext, onMount } from 'svelte';
	import type { MainContext } from '.';

	let className = '';
	export { className as class };
	export let size: number;

	let element: HTMLDivElement;

	const { addPolygon, addSqaure, getLatestPolygon, getStopIndex, setStopIndex } = getContext<MainContext>('context');
	const polygon = getLatestPolygon();

	const isTopDir = (v: Vector2D) => {
		return v.x === 0 && v.y === -1;
	};

	const isRightDir = (v: Vector2D) => {
		return v.x === 1 && v.y === 0;
	};

	const isBottomDir = (v: Vector2D) => {
		return v.x === 0 && v.y === 1;
	};

	const calculateEdgeNormal = (start: Vector2D, end: Vector2D) => {
		return new Vector2D(start.y - end.y, end.x - start.x).Normalize();
	};

	const isIntersectingPolgon = (square: Polygon) => {
		for (let i = 0; i < square.points.length; i++) {
			const s0 = square.points[i];
			const e0 = square.points[next(i, square.points.length)];

			for (let j = 0; j < polygon.points.length; j++) {
				const s1 = polygon.points[j];
				const e1 = polygon.points[next(j, polygon.points.length)];

				if (getSegmentIntersection(s0, e0, s1, e1)) {
					return true;
				}
			}
		}

		return false;
	};

	onMount(async () => {
		if (!element.parentElement) return;
		const square = new Polygon([]);
		let text = '';

		if (polygon.points.length === 0) {
			const topLeft = new Vector2D(element.parentElement.clientWidth / 2 - size / 2, element.parentElement.clientHeight / 2 - size / 2);
			element.style.top = `${(topLeft.y / element.parentElement.clientHeight) * 100}%`;
			element.style.left = `${(topLeft.x / element.parentElement.clientWidth) * 100}%`;
			// element.style.width = `${(size / element.parentElement.clientWidth) * 100}%`;
			// element.style.height = `${(size / element.parentElement.clientHeight) * 100}%`;
			element.style.width = `${size}px`;
			element.style.height = `${size}px`;

			const bottomRight = topLeft.Clone().AddScalar(size);
			const topRight = new Vector2D(bottomRight.x, topLeft.y);
			const bottomLeft = new Vector2D(topLeft.x, bottomRight.y);

			text = 'center';
			square.AddPoint(bottomRight, topRight, topLeft, bottomLeft);
			polygon.AddPolygon(square);
			setStopIndex(0);
			addSqaure(square, text);
			addPolygon(polygon, 0);
		} else {
			const position = new Vector2D();
			let point1Index: number;
			let counterColiisions: number = 0;

			const init = () => {
				// point1Index = getStopIndex();
				point1Index = getStopIndex();
				counterColiisions++;
				return point1Index;
			};

			point1Index = init();
			while (true) {
				var point2Index = next(point1Index, polygon.points.length);
				const point3Index = next(point2Index, polygon.points.length);

				if (counterColiisions === polygon.points.length) break;

				const point1 = polygon.points[point1Index];
				const point2 = polygon.points[point2Index];
				const point3 = polygon.points[point3Index];

				const edgeNormal_12 = calculateEdgeNormal(point1, point2);
				const edgeNormal_23 = calculateEdgeNormal(point2, point3);

				const isEdgeNormalIntersecting_12_23 = getRaysIntersection(point1, edgeNormal_12, point3, edgeNormal_23);

				const edgeLength_12 = point1.Clone().Sub(point2).Length();
				const orderPoints: Vector2D[] = [];

				const bottomRight = new Vector2D();
				const bottomLeft = new Vector2D();
				const topLeft = new Vector2D();
				const topRight = new Vector2D();

				if (isBottomDir(edgeNormal_12)) {
					if (element.parentElement.clientHeight - point1.y < size) {
						init();
						continue;
					}

					topLeft.Copy(point1);
					bottomRight.Set(topLeft.x + size, topLeft.y + size);
					topRight.Set(bottomRight.x, topLeft.y);
					bottomLeft.Set(topLeft.x, bottomRight.y);

					orderPoints.push(bottomLeft, bottomRight, topRight);

					text = 'bottom';
				} else if (isRightDir(edgeNormal_12)) {
					if (element.parentElement.clientWidth - point1.x < size) {
						init();
						continue;
					}

					bottomLeft.Copy(point1);
					topLeft.Set(bottomLeft.x, bottomLeft.y - size);
					bottomRight.Set(bottomLeft.x + size, bottomLeft.y);
					topRight.Set(bottomRight.x, topLeft.y);

					orderPoints.push(bottomRight, topRight, topLeft);

					text = 'right';
				} else if (isTopDir(edgeNormal_12)) {
					if (point1.y < size) {
						init();
						continue;
					}

					bottomRight.Copy(point1);
					topLeft.Set(bottomRight.x - size, bottomRight.y - size);
					topRight.Set(bottomRight.x, topLeft.y);
					bottomLeft.Set(topLeft.x, bottomRight.y);

					orderPoints.push(topRight, topLeft, bottomLeft);

					text = 'top';
				} else {
					if (point1.x < size) {
						init();
						continue;
					}

					topRight.Copy(point1);
					topLeft.Set(topRight.x - size, topRight.y);
					bottomRight.Set(topRight.x, topRight.y + size);
					bottomLeft.Set(topLeft.x, bottomRight.y);

					orderPoints.push(topLeft, bottomLeft, bottomRight);

					text = 'left';
				}

				// topLeft.x -= 10;
				// bottomLeft.x -= 10;
				position.Copy(topLeft);
				square.AddPoint(bottomRight, topRight, topLeft, bottomLeft);

				const isColliding = isIntersectingPolgon(square);
				if (isColliding) {
					point1Index = point2Index;
					counterColiisions++;
					square.Reset();
					continue;
				}

				if (edgeLength_12 === size) {
					if (isEdgeNormalIntersecting_12_23) {
						polygon.points.splice(point1Index, 3, orderPoints[0]);
					} else {
						polygon.points.splice(point1Index, 2, orderPoints[0], orderPoints[1]);
					}
				} else {
					polygon.points.splice(point1Index, 1, orderPoints[0], orderPoints[1], orderPoints[2]);
				}

				break;
			}

			// await wait(500);
			if (counterColiisions === polygon.points.length) {
				element.style.display = 'none';
			} else {
				setStopIndex(point2Index);
				addSqaure(square, text);
				addPolygon(polygon, point2Index);
			}

			element.style.top = `${(position.y / element.parentElement.clientHeight) * 100}%`;
			element.style.left = `${(position.x / element.parentElement.clientWidth) * 100}%`;
			// element.style.width = `${(size / element.parentElement.clientWidth) * 100}%`;
			// element.style.height = `${(size / element.parentElement.clientHeight) * 100}%`;
			element.style.width = `${size}px`;
			element.style.height = `${size}px`;
		}
	});
</script>

<div bind:this={element} class={cn('absolute', className)}>
	<slot />
</div>
