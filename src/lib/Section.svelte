<script>
	let className;
	export { className as class };

	export let type = 'center';
	export let img;
</script>

{#if type === 'center'}
	<div class={`justify-center w-full py-20 ${className}`}>
		<div class="flex flex-col max-w-screen-lg m-auto">
			<slot />
		</div>
	</div>
{:else if type === 'right'}
	<div class="hero w-full">
		<div class="hero-content flex-col lg:flex-row">
			<img src={img} class="max-w-sm rounded-lg shadow-2xl hidden lg:block mr-10" alt={img} />
			<div>
				<slot />
			</div>
		</div>
	</div>
{:else if type === 'left'}
	<div class="hero w-full">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img src={img} class="max-w-sm rounded-lg shadow-2xl hidden lg:block ml-10" alt={img} />
			<div>
				<slot />
			</div>
		</div>
	</div>
{/if}
