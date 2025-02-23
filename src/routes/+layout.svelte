<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />

<style>
	:global(.speaker-card) {
		transition: transform 0.2s ease-in-out;
	}

	:global(.speaker-card:hover) {
		transform: translateY(-5px);
	}
	:global(.badge) {
		font-size: 0.8rem;
		padding: 0.5em 1em;
	}
	
	
</style>
