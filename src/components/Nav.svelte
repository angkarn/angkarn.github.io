<script>
	export let segment;
	export let hide;
</script>

<nav class={hide ? "hide" : ""}>
	<header><a href=".">Angkarn P.</a></header>
	<ul>
		<li>
			<a
				aria-current={segment === undefined ? "page" : undefined}
				href=".">home</a
			>
		</li>
		<li>
			<a
				aria-current={segment === "link" ? "page" : undefined}
				href="link">link</a
			>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li>
			<a
				rel="prefetch"
				aria-current={segment === "blog" ? "page" : undefined}
				href="blog">blog</a
			>
		</li> -->
	</ul>
</nav>

<style>
	nav {
		user-select: none;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		font: menu;
		font-variant: small-caps;
		color: darkgrey;
		cursor: pointer;
		padding: 10px;
		border: none;
		outline: none;
		font-size: 1.2em;
		position: absolute;
		margin: 0 auto;
		width: auto;
		top: 0;
		z-index: 1;
		opacity: 1;
		/* transition: 0.1s; */
		transition: opacity 0.3s;
		font-feature-settings: normal;
		text-align: center;
		/* transition: top 0.3s; Transition effect when sliding down (and up) */
	}

	/* nav.hide {
		opacity: 0;
		pointer-events: none;
	} */

	header {
		padding-bottom: 10px;
	}

	header a {
		color: #6d6d6d;
		font-size: 1.3em;
		text-decoration: none;
	}

	header,
	ul {
		display: inline;
	}

	header a:active {
		color: #ff9999;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		display: inline;
		background: rgb(255 255 255 / 62%);
		border-radius: 4px;
		padding: 1px 10px;
	}

	a {
		color: #a5a5a5;
		text-decoration: none;
	}

	[aria-current] {
		color: rgb(88, 88, 88);
	}

	a:active {
		color: cadetblue;
	}

	@media screen and (min-width: 600px) {
		nav {
			position: static;
			float: left;
			text-align: left;
			padding: 50px 0 0 5%;
		}

		header {
			display: block;
		}

		li {
			display: block;
		}
	}

	@media screen and (max-width: 600px) {
		nav.hide {
			opacity: 0;
			pointer-events: none;
		}
	}

	@media (hover: hover) {
		a:hover {
			color: cadetblue;
		}

		header a:hover {
			color: #ff9999;
		}
	}
</style>
