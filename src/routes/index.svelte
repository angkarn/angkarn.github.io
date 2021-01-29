<script>
	import posts from "./blog/_posts";
</script>

<svelte:head>
	<title>Angkarn P.</title>
</svelte:head>

<div class="posts_list">
	{#each posts as post}
		<a class="post_title" href={post.slug}>{post.title}</a>
		<div class="post_html">
			{@html post.html}
		</div>
	{/each}
</div>

<style>
	.posts_list {
		text-align: center;
		color: rgb(92, 92, 92);
	}

	.post_title {
		font-size: 1.4em;
	}

	a {
		text-decoration: none;
	}

	.post_html {
		margin: 0.5em auto;
	}
</style>
