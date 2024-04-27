<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Faq from '$lib/Faq.svelte';
	import Timeline from '$lib/Timeline.svelte';

	import group from '$img/group.webp';
	import partner from '$img/partner.webp';

	const elements = [
		{
			date: '1970',
			title: "Founding of 'Studenten Committee für Umweltökonomik'",
			description: "The 'Studenten Committee für Umweltökonomik' was founded."
		},
		{ date: '1971', title: 'First Conference', description: 'Our first conference was held.' },
		{
			date: '1987',
			title: 'Creation of oikos Advisory Board',
			description: 'The oikos Advisory Board was created.'
		},
		{
			date: '1987',
			title: 'First Team Picture',
			description: "The first team picture under the new name 'oikos'."
		},
		{
			date: '1989',
			title: 'Founding of öbu',
			description: 'The öbu was founded to help Swiss companies achieve the SDGs.'
		},
		{
			date: '1989',
			title: 'Creation of oikos Foundation',
			description: 'The oikos Foundation was created.'
		},
		{
			date: '1992',
			title: 'Founding of IWÖ',
			description:
				'The IWÖ, the Institute for the Economy and Environment at the HSG, was founded. It was the first of its kind in Europe.'
		},
		{
			date: '1994',
			title: 'Founding of oikos Alumni Network',
			description:
				'The oikos Alumni Network was established. Many alumni are in positions of power such as in parliament and industry.'
		},
		{
			date: '1997',
			title: 'Establishment of Model WTO St. Gallen',
			description: 'Model WTO St. Gallen was established.'
		},
		{
			date: '2011',
			title: 'Creation of the oikos Fund',
			description: 'The oikos Fund was created.'
		},
		{
			date: '2007-2015',
			title: 'Creation of Student Impact and CO2 Taskforce',
			description:
				'The climate strategy of the HSG was established, including the creation of the CO2 Taskforce.'
		},
		{
			date: '2016-2020',
			title: 'Spin-off of Model WTO International and oikos International',
			description: 'Model WTO International and oikos International were spun off.'
		},
		{ date: '', title: 'Story Continues', description: 'And the story continues...' }
	];

	export let data;
</script>

<Hero
	image={group}
	title="Be informed. Get involved. Make a difference."
	subtitle="Oikos St. Gallen aims for change in business and economics, purposed for a sustainable world."
/>
<Section>
	<h1 class="text-center text-3xl lg:text-5xl font-bold mb-4">ABOUT OIKOS ST.GALLEN</h1>
	<p class="text-center mx-10 lg:mx-20">
		Oikos St.Gallen operates 13 projects & platforms within various spheres taking into account the
		environmental, social and economic dimensions of sustainability. With our values of
		transparency, responsibility and respect close at heart, our legally independent and taxexpemted
		NPO has achieved many successes since our creation in 1970. oikos St.Gallen always strives for
		innovation in achieving our goals: sharing knowledge and direct impact. ​
	</p>
	<div class="flex flex-col justify-center m-8 lg:inline-flex lg:flex-row gap-2">
		<button class="btn btn-xs btn-primary">Theory of Change</button>
		<button class="btn btn-xs btn-primary">Alumni</button>
		<button class="btn btn-xs btn-primary">Advisory Board</button>
		<button class="btn btn-xs btn-primary">Team</button>
	</div>
</Section>

<Section class="bg-secondary">
	<h1 class="text-center text-3xl lg:text-5xl font-bold mb-10">OIKOS IN NUMBERS</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-20">
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center text-accent">13</h2>
			<p class="text-center text-accent">Different Projects</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center text-accent">50</h2>
			<p class="text-center text-accent">Community Members</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center text-accent">100</h2>
			<p class="text-center text-accent">Events on Sustainable Topics</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center text-accent">50</h2>
			<p class="text-center text-accent">Global Networks</p>
		</div>
	</div>
</Section>

<Section>
	<h1 class="text-center text-3xl lg:text-5xl font-bold mb-10">NETWORK AND COLLABORATIONS</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-20">
		<div class="flex justify-center">
			<img src={partner} class="max-w-sm rounded-lg shadow-2xl" alt="Example" />
		</div>
		<div class="flex justify-center">
			<img src={partner} class="max-w-sm rounded-lg shadow-2xl" alt="Example" />
		</div>
		<div class="flex justify-center">
			<img src={partner} class="max-w-sm rounded-lg shadow-2xl" alt="Example" />
		</div>
		<div class="flex justify-center">
			<img src={partner} class="max-w-sm rounded-lg shadow-2xl" alt="Example" />
		</div>
	</div>
</Section>

<Timeline {elements} />

<Faq title="QUESTIONS & ANSWERS" questions={data} />
