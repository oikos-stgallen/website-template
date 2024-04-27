<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';
	import group from '$img/group.webp';

	export let data;

	let projects = data.projects;
</script>

<Hero image={group} title="Our projects" subtitle="Pieces of our work that we are proud of." />

<Section>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each projects as project}
			<Card
				image={project.image}
				title={project.name}
				subtitle={project.description}
				url={project.url}
			/>
		{/each}
	</div>
</Section>
