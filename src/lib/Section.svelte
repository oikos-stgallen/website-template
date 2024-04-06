<script>
	let className;
	export { className as class };
</script>

<div class={`flex flex-col justify-center w-full my-10 py-20 ${className}`}>
	<slot />
</div>
