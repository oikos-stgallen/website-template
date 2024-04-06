<script>
	let className;
	export { className as class };
</script>

<div class={`justify-center w-full my-10 py-20 ${className}`}>
	<div class="flex flex-col max-w-screen-lg m-auto">
		<slot />
	</div>
</div>
