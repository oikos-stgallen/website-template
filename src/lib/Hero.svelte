<script>
	export let image = '';
	export let title = '';
	export let subtitle = '';
</script>

<div class="hero h-96 mb-12" style={`background-image: url(${image});`}>
	<div class="hero-overlay bg-opacity-10"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="flex flex-col justify-center">
			<h1
				class="text-3xl lg:text-4xl font-bold text-white drop-shadow-xl"
				style="text-shadow: black 1px 0 10px"
			>
				{title}
			</h1>
			<p class="text-2lg lg:text-2xl text-white" style="text-shadow: black 1px 0 10px">
				{subtitle}
			</p>
		</div>
	</div>
</div>
