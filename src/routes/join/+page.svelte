<script>
	import Hero from '$lib/Hero.svelte';
	import Section from '$lib/Section.svelte';

	import group from '$img/group.webp';
	import interview from '$img/interview.webp';
	import curriculum from '$img/curriculum.webp';
	import logo from '$img/logo.webp';
</script>

<Hero image={group} title="Join Us" subtitle="Choose the project for you!" />

<Section type="right" img={group}>
	<h1 class="text-5xl font-bold text-left">Oikos Solar</h1>
	<p class="py-6 text-justify">
		Oikos Solar is dedicated to promoting solar energy across Switzerland, working closely with a
		vast network across politics and industry to raise funds and establish photovoltaic
		installations. The project is structured into six key departments: Finance, Customer
		Acquisition, Solar Panel Management, Marketing, Legal, and IT. To see what our project does,
		please check oikos Solar website
	</p>
</Section>

<Section type="left" img={group}>
	<h1 class="text-5xl font-bold text-left">Board Intern</h1>
	<p class="py-6 text-justify">
		For the Board Intern position, Oikos is seeking motivated individuals eager to commit to our
		association. As a Board teamie, you will have the chance to choose from various roles in
		Marketing, Finance, Legal, Operations, and Community. The Oikos Board oversees all 12 projects,
		so by joining our team, you'll gain insight into the entire organization and contribute your
		ideas to its development. Furthermore, if you aspire to a leadership role, being part of the
		team will provide you with valuable experience working closely with the board and preparing for
		such positions.
	</p>
</Section>

<Section type="right" img={group}>
	<h1 class="text-5xl font-bold">Change Hub</h1>
	<p class="py-6 text-justify">
		The ChangeHub is the first physical space at the University of St. Gallen solely dedicated to
		sustainability. Whose goal is to promote brainstorming among the students regarding the
		sustainability of our campus. Furthermore, the By&For Projects Team develops and implements
		projects on campus that directly increase the sustainability of the University. Currently, the
		reusable kooky cups have been implemented, and we strive to make more on campus sustainable
		changes, such as a waste management system
	</p>
</Section>

<Section type="left" img={group}>
	<h1 class="text-5xl font-bold">Oikos Action days</h1>
	<p class="py-6 text-justify">
		The oikos Action Days are a multi-day event dedicated to promoting hands-on sustainability in
		Switzerland. Our project unites students and employees from leading companies to collaborate on
		activities that improve the local environment and promote sustainability. From engaging in
		clean-ups to building insect hotels, participants work towards a better world whilst expanding
		their personal networks. The Action Days culminate in a celebratory dinner and afterparty,
		honoring our collective achievements.
	</p>
</Section>

<Section type="right" img={group}>
	<h1 class="text-5xl font-bold">OISMAK</h1>
	<p class="py-6 text-justify">
		OISMAK, a unique student-led project, stands out for promoting vegetarian to vegan recipes
		tailor-made for students, underlining the importance of the planet's well-being. With its
		emphasis on resource-conscious diets, OISMAK highlights the bountifulness of plant-based diets.
		Our prime goals for this year comprise the expansion of our recipe repertoire, outreach through
		various platforms, and fostering a sense of eco-responsible eating habits. All recipes center
		around Swiss regional delicacies, seasonal in nature, budget-friendly, and primarily cater to
		servings for 2 or 4. Our recipes do not only include nutritional values but also carbon
		emissions as a starting point to measure sustainable nutrition.
	</p>
</Section>

<Section type="left" img={group}>
	<h1 class="text-5xl font-bold">Framework</h1>
	<p class="py-6 text-justify">
		The Framework is a guide meant to help student clubs host events at the university, while
		minimizing their carbon footprint. Our main goal is to maintain and update the Framework with
		the most up-to-date tips, and to promote its usage among a diverse set of clubs. Here, we
		currently focus on expanding our digital presence and breaking down the guide in
		easy-to-understand steps to simplify its application. In the end, we can have a real impact by
		demonstrating the viability of the net zero path.
	</p>
</Section>

<Section type="right" img={group}>
	<h1 class="text-5xl font-bold">Assessie Program</h1>
	<p class="py-6 text-justify">
		The "Assessie Program" is a new initiative introduced by Oikos to assist students currently in
		the assessment year who are interested and curious about Oikos and its various projects and
		activities. The goal is to remove entry barriers that prevent many from joining the Oikos
		journey. During this semester-long program, assessies will have bi-weekly meetings with the
		president where updates on the association's activities over the past two weeks will be
		presented, and they will have the opportunity to ask questions. Additionally, assessies will
		have the chance to gain hands-on experience in various projects and teams based on where there
		is a need and their availability. By the end of this program, assessies will have a
		comprehensive understanding of Oikos and will have priority access to open positions for the
		following semester.
	</p>
</Section>

<Section class="bg-secondary">
	<h1 class="text-center text-3xl lg:text-5xl font-bold mb-10">APPLICATION PROCESS</h1>

	<div class="join join-vertical lg:join-horizontal w-full justify-evenly">
		<div class="join-item">
			<img src={interview} alt="logo" class="w-20 h-20 mx-auto mb-4" />
			<p class="text-center font-bold">FILL THE FORM</p>
		</div>
		<div class="join-item">
			<img src={curriculum} alt="logo" class="w-20 h-20 mx-auto mb-4" />
			<p class="text-center font-bold">INTERVIEW</p>
		</div>

		<div class="join-item">
			<img src={logo} alt="logo" class="w-20 h-20 mx-auto mb-4" />
			<p class="text-center font-bold">GET ONBOARDED</p>
		</div>
	</div>
</Section>

<Section>
	<h1 class="text-center text-3xl lg:text-5xl font-bold mb-10">OPEN POSITIONS</h1>
</Section>
