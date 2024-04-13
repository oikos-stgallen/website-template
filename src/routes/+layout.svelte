<script>
	import 'tailwindcss/tailwind.css';
	import Layout from '$lib/Layout.svelte';
	import Footer from '$lib/Footer.svelte';

	const sections = {
		About: '/',
		Team: '/team',
		'Join Us': '/',
		Projects: '/projects',
		Events: '/',
		Contact: '/'
	};
</script>

<svelte:head>
	<title>Oikos</title>
	<meta name="description" content="Oikos San Gallen website template" />
</svelte:head>

<Layout {sections}>
	<slot />
</Layout>
<Footer {sections} />
