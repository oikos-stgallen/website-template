<script>
	import { base } from '$app/paths';
	import logo from '$img/logo.webp';
	export let sections = {};
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-300 flex justify-center items-center">
			<div class="max-w-5xl w-full flex justify-between items-center h-14 lg:h-28">
				<div class="flex lg:flex-1">
					<a class="text-lg w-12 h-12 lg:w-24 lg:h-24" href={base}>
						<img alt="Logo" src={logo} />
					</a>
				</div>
				<div class="flex-3 justify-end text-center hidden lg:flex">
					<ul class="menu menu-horizontal justify-center">
						{#each Object.keys(sections) as section}
							<li>
								<a class="font-bold uppercase" href="{base}{sections[section]}">{section}</a>
							</li>
						{/each}
					</ul>
				</div>

				<div class="flex-1 flex justify-end lg:hidden">
					<label for="my-drawer-3" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-16 6h16"
							></path>
						</svg>
					</label>
				</div>
			</div>
		</div>

		<!-- Page content here -->
		<div class="flex justify-center items-center">
			<div class="w-full">
				<slot />
			</div>
		</div>
	</div>

	<div class="drawer-side z-50">
		<label for="my-drawer-3" class="drawer-overlay"></label>
		<ul class="menu p-4 w-60 min-h-full bg-base-200">
			<!-- Sidebar content here -->
			<div class="flex justify-between p-2">
				<!-- Logo -->
				<a class="btn btn-ghost text-lg" href={base}>
					<img alt="Logo" src={logo} class="w-8" />
				</a>
			</div>

			<div class="flex flex-col pt-4">
				{#each Object.keys(sections) as section}
					<li>
						<a href="{base}{sections[section]}">{section}</a>
					</li>
				{/each}
			</div>
		</ul>
	</div>
</div>
