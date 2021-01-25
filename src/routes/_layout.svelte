<script>
	import SiteLayout from "../layouts/SiteLayout.svelte";
	import DefaultLayout from "../layouts/DefaultLayout.svelte";
	export let segment;
	const siteRoute = [undefined, "link"];
</script>

{#if siteRoute.includes(segment)}
	<SiteLayout {segment}>
		<slot />
	</SiteLayout>
{:else}
	<DefaultLayout>
		<slot />
	</DefaultLayout>
{/if}
