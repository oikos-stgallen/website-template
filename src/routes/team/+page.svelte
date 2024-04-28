<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';

	import group from '$img/group.webp';

	export let data;
	const members = data.members;
	const board = members.filter((member) => member.role === 'board');
	const heads = members.filter((member) => member.role === 'head');
	const advisory = members.filter((member) => member.role === 'advisory');
	const past = members.filter((member) => member.role === 'past');
</script>

<Hero image={group} title="Meet the team" subtitle="The people behind the scenes." />

<Section>
	<h1 class="text-center text-3xl font-bold mb-10">Board</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each board as member}
			<div class="flex-1">
				<Card image={member.image} title={member.name} subtitle={member.role} />
			</div>
		{/each}
	</div>

	<h1 class="text-center text-3xl font-bold my-10">Project Heads</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each heads as member}
			<div class="flex-1">
				<Card image={member.image} title={member.name} subtitle={member.role} />
			</div>
		{/each}
	</div>

	<h1 class="text-center text-3xl font-bold my-10">Advisory Board</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each advisory as member}
			<div class="flex-1">
				<Card image={member.image} title={member.name} subtitle={member.role} />
			</div>
		{/each}
	</div>

	<h1 class="text-center text-3xl font-bold my-10">Past Board Members</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each past as member}
			<div class="flex-1">
				<Card image={member.image} title={member.name} subtitle={member.role} />
			</div>
		{/each}
	</div>
</Section>
