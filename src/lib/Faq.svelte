<script>
	export let title = 'Title';
	export let questions = {
		'Question 1': 'Answer 1',
		'Question 2': 'Answer 2',
		'Question 3': 'Answer 3'
	};
</script>

<div class="flex flex-col items-center gap-10 p-6">
	<h1 class="text-3xl font-bold">
		<i class="fa-solid fa-circle-question text-primary"></i>
		{title}
	</h1>

	<!-- Questions -->
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		{#each Object.keys(questions) as question}
			<div class="flex flex-col gap-2">
				<h2 class="font-medium text-lg italic text-accent">{question}</h2>

				<span>{questions[question]}</span>
			</div>
		{/each}
	</div>
</div>
