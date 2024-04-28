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

	<div class="flex flex-col items-center lg:flex-row gap-20">
		<div class="flex-1">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<Member />
				<Member />
				<Member />
				<Member />
				<Member />
				<Member />
			</div>
		</div>
		<div class="flex-1">
			<Contact />
		</div>
	</div>
</Section>

<Section>
	<h1 class="text-center text-lg lg:text-3xl font-bold mb-4">Visit us</h1>
</Section>
