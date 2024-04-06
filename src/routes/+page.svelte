<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';
	import Faq from '$lib/Faq.svelte';
	import group from '$img/group.webp';
	import partner from '$img/partner.webp';

	const questions = {
		'Is it possible to apply as an assessment or master student?':
			'Of course! All students at the University of St. Gallen can join oikos.',
		'What are the requirements to apply?':
			'Interest in sustainability and driving change, motivation, reliability, transparency and willingness to learn many things!',
		'Can I join oikos for only one semester, or go on an exchange during the year?':
			'You can for sure join for only one semester as a team member if the Project Head or Board member agrees to that (they usually do, you are still of great help only for one semester!). However, if you want to apply for a Project Head or Board position, you need to stay committed for an entire year, and it would be best if you are on campus both semesters.',
		'How can oikos benefit my future career?':
			'Oikos is the chance to gain hands-on experience in any position you take. If you join as a team member, you can choose a position according to your interest (finance, sponsoring, marketing, operations, program, event, brands relations, R&D, relations, …) and directly apply concepts you have learned with a lot of freedom. If you join as a Project Head, you will learn about leadership and team management, organization of the work within a team, and all the practical aspects that you need to lead a project. If you join as a Board member, you will gain experience in team leadership and management, but you will also have the chance to think strategically about where you want the association to develop in the future. Moreover, with oikos being the club with the most active members, you have a big responsibility as a board member, and a lot of freedom to shape your department as you please. Depending on the department that interests you most, you can also learn more about finance, marketing, HR, event management or operations.',
		'What is the average workload for oikos members?':
			'The workload depends on the position that you are applying for. As a team member at one of oikos´ projects the workload is expected to be between 3-4 hours per week. As a project head it is 6-8 hours and as a board member it is 10-12 hours.',
		'Will I earn campus credits?':
			'Due to the varying workload, it is project heads (4 ECTS) and board members (6 or 8 ECTS) who receive campus credits.'
	};
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
			<h2 class="text-5xl font-bold text-center">13</h2>
			<p class="text-center">Different Projects</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center">50</h2>
			<p class="text-center">Community Members</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center">100</h2>
			<p class="text-center">Events on Sustainable Topics</p>
		</div>
		<div class="flex-1">
			<h2 class="text-5xl font-bold text-center">50</h2>
			<p class="text-center">Global Networks</p>
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

<Faq title="QUESTIONS & ANSWERS" {questions} />
