<script>
	import Hero from '$lib/Hero.svelte';
	import Member from '$lib/Member.svelte';
	import Section from '$lib/Section.svelte';
	import Contact from '$lib/Contact.svelte';

	import group from '$img/group.webp';
</script>

<Hero
	image={group}
	title="Be informed. Get involved. Make a difference."
	subtitle="Oikos St. Gallen aims for change in business and economics, purposed for a sustainable world."
/>

<Section>
	<h1 class="text-center text-lg lg:text-3xl font-bold mb-4">You can contact us through</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
		<Member />
		<Member />
		<Member />
		<Member />
		<Member />
		<Member />
	</div>
</Section>

<Section>
	<h1 class="text-center text-lg lg:text-3xl font-bold mb-4">Contact us</h1>
	<div class="flex justify-center">
		<Contact />
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.3171239731623!2d8.49489317606448!3d47.42525940048286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b19e300a61b%3A0xd9eed61bccd427f7!2sC%C3%A4sar-Ritz-Strasse%2C%208046%20Z%C3%BCrich!5e0!3m2!1sit!2sch!4v1714334567850!5m2!1sit!2sch"
			width="600"
			height="450"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</Section>
