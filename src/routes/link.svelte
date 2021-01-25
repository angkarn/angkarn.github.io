

<svelte:head>
	<title>Link</title>
</svelte:head>

<ul>
	<li>
		<img width="20" src="marker-map/favicon.ico" alt="" />
		<a href="marker-map">Marker Map</a>
	</li>
</ul>

<style>
	img {
		margin-bottom: -4px;
		margin-right: 4px;
	}
	a {
		font-variant: small-caps;
		text-decoration: none;
		color: rgb(46, 46, 46);
	}

	ul {
		list-style: none;
	}

	@media (hover: hover) {
		a:hover {
			color: cadetblue;
		}
	}
</style>
