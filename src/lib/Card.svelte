<script>
	import { slide } from 'svelte/transition';

	let show_details = false;

	export let url;
	export let image;
	export let title;
	export let subtitle;
</script>

<a
	class="flex flex-col bg-base-200 max-w-sm relative w-full m-auto"
	on:click={() => (show_details = true)}
	on:mouseenter={() => (show_details = true)}
	on:mouseleave={() => (show_details = false)}
	on:keydown={(event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			show_details = true;
		}
	}}
	href={url}
	target="_blank"
>
	<div class="bg-center w-full h-72 bg-cover" style="background-image: url({image});"></div>

	{#if show_details}
		<div
			class="bg-secondary flex flex-col items-center gap-2 p-4 absolute inset-x-0 bottom-0"
			transition:slide={{ duration: 1000 }}
		>
			<h2 class="font-bold text-xl">{title}</h2>
			<span class="text-sm">{subtitle}</span>
			<button class="btn btn-sm btn-primary">Lean More</button>
		</div>
	{/if}
</a>
