<script>
	import Hero from '$lib/Hero.svelte';
	import Faq from '../lib/Faq.svelte';
	import group from '$img/group.webp';

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
<Faq title="QUESTIONS & ANSWERS" {questions} />
