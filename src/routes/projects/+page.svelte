<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';

	import group from '$img/group.webp';
	import solar from '$img/solar.webp';
	import conference from '$img/conference.webp';
	import climate from '$img/climate.webp';
	import consulting from '$img/consulting.webp';
</script>

<Hero image={group} title="Our projects" subtitle="Pieces of our work that we are proud of." />

<Section>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<Card
			image={solar}
			title="Oikos Solar"
			subtitle="'Aims at promoting and building solar panels in Switzerland'"
		/>
		<Card
			image={conference}
			title="Oikos Conference"
			subtitle="Yearly conference about current topics regarding sustainability"
		/>
		<Card
			image={climate}
			title="One week dedicated to a certain topic in sustainability"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
		<Card
			image={consulting}
			title="Oikos Consulting"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
		<Card
			image={solar}
			title="Oikos Solar"
			subtitle="'Aims at promoting and building solar panels in Switzerland'"
		/>
		<Card
			image={conference}
			title="Oikos Conference"
			subtitle="Yearly conference about current topics regarding sustainability"
		/>
		<Card
			image={climate}
			title="One week dedicated to a certain topic in sustainability"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
		<Card
			image={consulting}
			title="Oikos Consulting"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
		<Card
			image={solar}
			title="Oikos Solar"
			subtitle="'Aims at promoting and building solar panels in Switzerland'"
		/>
		<Card
			image={conference}
			title="Oikos Conference"
			subtitle="Yearly conference about current topics regarding sustainability"
		/>
		<Card
			image={climate}
			title="One week dedicated to a certain topic in sustainability"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
		<Card
			image={consulting}
			title="Oikos Consulting"
			subtitle="One week dedicated to a certain topic in sustainability"
		/>
	</div>
</Section>
