<script>
	import 'tailwindcss/tailwind.css';
	import Layout from '$lib/Layout.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Oikos</title>
	<meta name="description" content="Oikos San Gallen website template" />
</svelte:head>
<Layout>
	<slot />
</Layout>
<Footer />
