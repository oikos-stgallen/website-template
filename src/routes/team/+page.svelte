<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';

	import group from '$img/group.webp';
	import alissa from '$img/alissa.webp';
	import ermanno from '$img/ermanno.webp';
	import jason from '$img/jason.webp';
</script>

<Hero image={group} title="Meet the team" subtitle="The people behind the scenes." />

<Section>
	<h1 class="text-center text-3xl font-bold mb-10">Board</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="flex-1">
			<Card
				image={alissa}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={ermanno}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={jason}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={alissa}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={ermanno}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={jason}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
	</div>

	<h1 class="text-center text-3xl font-bold my-10">Project Heads</h1>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="flex-1">
			<Card
				image={alissa}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={ermanno}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={jason}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={alissa}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={ermanno}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={jason}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
	</div>
</Section>
