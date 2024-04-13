<script>
	import solar from '$img/solar.webp';
	import conference from '$img/conference.webp';
	import climate from '$img/climate.webp';
	import consulting from '$img/consulting.webp';

	import Section from '$lib/Section.svelte';
	import Card from '$lib/Card.svelte';
</script>

<Section>
	<div class="grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="flex-1">
			<Card
				image={solar}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={conference}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={climate}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={consulting}
				title="Oikos Consulting"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>

		<div class="flex-1">
			<Card
				image={solar}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={conference}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={climate}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={consulting}
				title="Oikos Consulting"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>

		<div class="flex-1">
			<Card
				image={solar}
				title="Oikos Solar"
				subtitle="'Aims at promoting and building solar panels in Switzerland'"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={conference}
				title="Oikos Conference"
				subtitle="Yearly conference about current topics regarding sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={climate}
				title="One week dedicated to a certain topic in sustainability"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
		<div class="flex-1">
			<Card
				image={consulting}
				title="Oikos Consulting"
				subtitle="One week dedicated to a certain topic in sustainability"
			/>
		</div>
	</div>
</Section>
