<script>
	import Section from './Section.svelte';
	export let elements = {
		date: '1984',
		title: 'First Macintosh computer',
		description:
			'The Macintosh is a family of personal computers designed, manufactured, and sold by Apple Inc. since January 1984.'
	};
</script>

<Section>
	<slot />
	<ul
		class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical justify-center mx-10"
	>
		{#each elements as element, i (i)}
			{#if i % 2 === 0}
				<li>
					{#if i !== 0}
						<hr class="bg-accent" />
					{/if}
					<div class="timeline-start md:text-end mb-10">
						<time class="font-mono italic">{element.date}</time>
						<div class="text-lg font-black">{element.title}</div>
						{element.description}
					</div>

					<div class="timeline-middle text-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 h-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					{#if i !== elements.length - 1}
						<hr class="bg-accent" />
					{/if}
				</li>
			{:else}
				<li>
					<hr class="bg-accent" />
					<div class="timeline-middle text-accent">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 h-5"
							><path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd"
							/></svg
						>
					</div>
					<div class="timeline-end mb-10">
						<time class="font-mono italic">{element.date}</time>
						<div class="text-lg font-black">{element.title}</div>
						{element.description}
					</div>

					{#if i !== elements.length - 1}
						<hr class="bg-accent" />
					{/if}
				</li>
			{/if}
		{/each}
	</ul>
</Section>
