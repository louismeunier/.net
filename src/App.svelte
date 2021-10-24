<script lang="ts">
	import { onMount } from "svelte";

	import About from "./components/About.svelte";
	import Contact from "./components/Contact.svelte";
	import Footer from "./components/Footer.svelte";
	import Name from "./components/Name.svelte";
	import Project from "./components/Shared/Project.svelte";
	import Animated from "./components/Shared/Animated.svelte";
	import Section from "./components/Shared/Section.svelte";
	
	import { projects } from "./constants/projects";
	let visible = false;
	onMount(() => visible = true);
</script>

<style>
	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	:global(:root) {
		--dark-purple: #7F5A83;
		--light-purple: #A188A6;
		--pale-yellow: #FFD387;
		--jet: #333333;
		--silver: #9DA2AB;
	}

	:global(html), :global(body) {
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: var(--jet);
		color: white;
	}

	main {
		display: grid;
		grid-template-rows: max-content 3rem repeat(3, max-content);
		grid-template-columns: 1fr;
		justify-items: center;
		justify-content: center;
		flex-grow: 1;
	}

	:global(main > *), :global(.content > *) {
		margin: 0;
		padding: 0;
	}

	.sections {
		height: max-content;
		display: grid;
		grid-auto-flow: row;
		width: 100%;
		padding-inline: 0rem;
		display: grid;
		gap: 1em;
	}

	.project-wrapper {
		display: grid;
		grid-auto-flow: row;
		width: 100%;
		gap: 2em;
	}

	.footer {
		grid-row: 2 / -2;
		padding-inline: 1rem;
	}

	hr {
		width: 15vw;
		box-shadow: 20px black;
	}
</style>

{#if visible}
<div class="wrapper">
	<main>
		<div>
			<Name/>
		</div>
		<Animated direction="left" delay={1800}>
			<Contact/>
		</Animated>
		<Animated direction="left" delay={2000}>
			<About/>
		</Animated>
		<Animated direction="left" delay={2000}>
			<hr/>
		</Animated>
		<Animated direction="left" delay={2200}>
			<div class="sections">
				<Section title="Projects">
					<div class="project-wrapper">
						{#each projects as project, i}
							<Animated direction="left" delay={200 + (i*100)}>
								<Project 
									name={project.name} 
									description={project.description}
									source={project.source}
									live={project.live ? project.live : null}
									technologies={project.technologies}
								/>
							</Animated>
						{/each}
					</div>
				</Section>
			</div>
		</Animated>
	</main>
	<div class="footer">
		<Animated direction="left" delay={2600}>
			<Footer/>
		</Animated>
	</div>
</div>
{/if}