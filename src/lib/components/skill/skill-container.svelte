<script lang="ts">
	import { Polygon } from '$lib/types';
	import { cn, next, prev } from '$lib/utils';
	import { onMount, setContext } from 'svelte';
	import type { MainContext } from '.';

	let className = '';
	export { className as class };
	export let debug = false;

	let timeIndex = 0;
	let polygonHistory: { polygon: Polygon; stopIndex: number }[] = [{ polygon: new Polygon([]), stopIndex: -1 }];
	let squares: { square: Polygon; text: string }[] = [];
	let polygon = new Polygon([]);
	let stopIndex = 0;
	const context: MainContext = {
		addSqaure: (square, text) => squares.push({ square, text }),
		addPolygon: (polygon, stopIndex) => polygonHistory.push({ polygon: polygon.Clone(), stopIndex }),
		setStopIndex: (n) => (stopIndex = n),
		getStopIndex: () => stopIndex,
		getLatestPolygon: () => polygon
	};

	setContext('context', context);

	const pointRadius = 5;
	const strokeWidth = 3;
	let refresh = false;
	onMount(() => {
		refresh = true;
	});
</script>

<div
	class={cn('relative', className, debug ? '[&_*]:text-transparent' : '')}
	on:contextmenu|preventDefault={(e) => {
		if (debug) {
			timeIndex = prev(timeIndex, polygonHistory.length);
		}
	}}
	on:click={(e) => {
		if (debug) {
			timeIndex = next(timeIndex, polygonHistory.length);
		}
	}}
>
	<slot />

	{#if refresh && debug}
		{@const { polygon, stopIndex } = polygonHistory[timeIndex]}
		<svg class="w-screen h-screen absolute top-0 left-0">
			{#each polygon.points as start, i}
				{@const end = polygon.points[next(i, polygon.points.length)]}

				<path d={`M ${start.x},${start.y} L ${end.x},${end.y}`} stroke="red" stroke-width={strokeWidth} />
				<circle
					cx={start.x}
					cy={start.y}
					r={pointRadius}
					stroke={i === stopIndex ? 'lightblue' : 'yellow'}
					fill={i === stopIndex ? 'blue' : 'orange'}
				/>
				<text x={start.x} y={start.y} dominant-baseline="middle" text-anchor="middle" font-size={20} font-weight="semibold">
					{i}
				</text>
			{/each}
			{#each Array(timeIndex) as _, i}
				{@const { square, text } = squares[i]}
				{@const position = square.points[0]}
				{@const size = position.Clone().Sub(square.points[1]).Length()}
				<text x={position.x - size / 2} y={position.y - size / 2} dominant-baseline="middle" text-anchor="middle" font-size={20} font-weight="bold">
					{i}-{text}
				</text>
			{/each}
		</svg>
	{/if}
</div>
