<script>
	import { onMount } from "svelte";
	onMount(async () => {
		const aElm = document.getElementsByTagName("a");
		console.log(aElm.length);
		Array.from(aElm).forEach((e) => {
			if (e.getAttribute("href").startsWith("#")) {
				e.href = document.location.pathname + e.getAttribute("href");
			}
		});
	});
</script>

<svelte:head>
	<title>Marker Map</title>
	<link rel="stylesheet" href="https://stackedit.io/style.css" as="style"/>
	<link rel="icon" href="marker-map/favicon.ico" />
</svelte:head>
<div>
	<div class="stackedit__html">
		<div class="link">
			<a href="https://github.com/angkarn/marker-map">
				<img
					width="40"
					height="42.5"
					src="img/github.svg"
					alt="github"
				/>
			</a>
		</div>
		<h1 id="marker-map">Marker Map</h1>
		<p>
			Marker Map is simple dynamic place marker by position to image and
			support responsive.
		</p>
		<p>
			<img
				width="400"
				height="400"
				class="screenshot"
				src="https://github.com/angkarn/marker-map/raw/main/example/assets/screenshot.jpg"
				alt="marker map screenshot"
			/>
		</p>
		<h2 id="features">Features!</h2>
		<ul>
			<li>Custom marker image and background.</li>
			<li>Set active or inactive of marker (will be opacity reduce).</li>
			<li>You can build game or event like treasure hunt.</li>
			<li>And it’s responsive.</li>
		</ul>
		<h3 id="demo-example">
			<a href="marker-map/example">Demo Example!</a>
		</h3>

		<h2 id="usage">Usage</h2>
		<p>NPM:</p>
		<pre
			class=" language-bash"><code class="prism  language-bash"><span class="token function">npm</span> <span class="token function">install</span> marker-map
</code></pre>
		<pre
			class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">import</span> MarkerMap <span class="token keyword">from</span> marker<span class="token operator">-</span>map
</code></pre>
		<p>CDN:</p>
		<pre
			class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/marker-map<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>
		<h2 id="quick-start">Quick start</h2>
		<p>Put html for render.</p>
		<pre
			class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
		<p>Prepare data and config.</p>
		<pre
			class=" language-javascript"><code class="prism  language-javascript"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span> 
    id<span class="token punctuation">:</span> <span class="token string">"myMarker1"</span><span class="token punctuation">,</span>
    width<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    top<span class="token punctuation">:</span> <span class="token number">34</span><span class="token punctuation">,</span> 
    left<span class="token punctuation">:</span> <span class="token number">54</span><span class="token punctuation">,</span> 
    img<span class="token punctuation">:</span> <span class="token string">"./assets/place.svg"</span> <span class="token punctuation">,</span>
    meta<span class="token punctuation">:</span> <span class="token punctuation">&#123;</span>
	  you<span class="token punctuation">:</span> <span class="token string">"customs data"</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#123;</span> 
    width<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> 
    top<span class="token punctuation">:</span> <span class="token number">53</span><span class="token punctuation">,</span> 
    left<span class="token punctuation">:</span> <span class="token number">38</span><span class="token punctuation">,</span> 
    img<span class="token punctuation">:</span> <span class="token string">"./assets/home.svg"</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> markerMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MarkerMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
markerMap<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"#show"</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
    background<span class="token punctuation">:</span> <span class="token string">"./assets/treasure-map.jpg"</span><span class="token punctuation">,</span>
    markers<span class="token punctuation">:</span> data
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
</code></pre>
		<h2 id="methods">Methods</h2>
		<div class="wrap_table">
			<table>
				<thead>
					<tr>
						<th class="method">Method</th>
						<th class="des">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							>.render(<code>string</code>
							<strong>query selector</strong>, <code>object</code>
							<strong>render options</strong>)</td
						>
						<td
							>render with <a href="#render"
								><em>render options</em></a
							></td
						>
					</tr>
					<tr>
						<td
							>.add(<code>object</code>
							<em><strong>marker options</strong></em>)</td
						>
						<td
							>add marker <a href="#marker"
								><em>marker options</em></a
							></td
						>
					</tr>
					<tr>
						<td
							>.remove(<code>string</code>
							<em><strong>marker id</strong></em>)</td
						>
						<td>remove marker</td>
					</tr>
					<tr>
						<td>.removeAll()</td>
						<td>remove marker</td>
					</tr>
					<tr>
						<td
							>.active(<code>string</code>
							<em><strong>marker id</strong></em>)</td
						>
						<td>set marker active</td>
					</tr>
					<tr>
						<td
							>.inactive(<code>string</code>
							<em><strong>marker id</strong></em>)</td
						>
						<td>set marker inactive</td>
					</tr>
					<tr>
						<td>.activeAll()</td>
						<td>set active all marker</td>
					</tr>
					<tr>
						<td>.inactiveAll()</td>
						<td>set inactive all marker</td>
					</tr>
					<tr>
						<td
							>.getAll(<code>string</code>
							<strong>filter</strong>,
							<code>string</code>
							<strong>output type</strong>)</td
						>
						<td
							>get list markers by <strong>filter</strong>
							<code>all</code>
							(default), <code>active</code>,
							<code>inactive</code>
							will return by <strong>output type</strong>
							<code>json</code>
							<a href="#marker"><em>marker object</em></a>
							(default), <code>dom</code></td
						>
					</tr>
					<tr>
						<td
							>.on(<code>string</code>
							<strong>type event</strong>,
							<code>function</code>
							<strong>callback function</strong>)</td
						>
						<td
							>create event on markers <em>(ex. click, hover)</em
							>, will return callback
							<strong>event object</strong></td
						>
					</tr>
					<tr>
						<td>.destroy()</td>
						<td>destroy render</td>
					</tr>
				</tbody>
			</table>
		</div>
		<h2 id="options">Options</h2>
		<h3 id="render">Render:</h3>
		<div class="wrap_table">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th class="des">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>background</td>
						<td><code>string</code></td>
						<td>required</td>
						<td>background image path.</td>
					</tr>
					<tr>
						<td>markers</td>
						<td><code>array</code></td>
						<td>[]</td>
						<td
							><a href="#marker"><em>marker options</em></a> array
							to include on render.</td
						>
					</tr>
					<tr>
						<td>inactiveOpacity</td>
						<td><code>number</code></td>
						<td>0.6</td>
						<td>opacity markers when inactive (0 - 1).</td>
					</tr>
				</tbody>
			</table>
		</div>
		<h3 id="marker">Marker:</h3>
		<div class="wrap_table">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th class="des">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>id</td>
						<td><code>string</code></td>
						<td>auto</td>
						<td>will auto generate when empty.</td>
					</tr>
					<tr>
						<td>width</td>
						<td><code>number</code></td>
						<td>required</td>
						<td>set with import image by percent.</td>
					</tr>
					<tr>
						<td>top</td>
						<td><code>number</code></td>
						<td>required</td>
						<td>set potion from top by percent (0 - 100).</td>
					</tr>
					<tr>
						<td>left</td>
						<td><code>number</code></td>
						<td>required</td>
						<td>set position from left by percent (0 - 100).</td>
					</tr>
					<tr>
						<td>img</td>
						<td><code>string</code></td>
						<td>required</td>
						<td>marker image path.</td>
					</tr>
					<tr>
						<td>meta</td>
						<td><code>object</code></td>
						<td>&#123;&#125;</td>
						<td>add custom your meta data to marker.</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h2 id="license">License</h2>
		<p>MIT</p>
	</div>
</div>

<style>
	.stackedit__html {
		margin: 0 auto !important;
		padding: 15px !important;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-display: swap;
	}

	.screenshot {
		width: 100%;
		height: auto;
		max-width: 400px;
		aspect-ratio: 1/1;
		background: #24735a;
	}

	.link {
		text-align: right;
		/* padding: 0.6em 1.5em; */
		position: fixed;
		right: 1.2em;
	}

	#marker-map {
		margin: 0.5em 0;
	}

	.stackedit__html {
	}

	.wrap_table {
		overflow-x: auto;
	}

	/* .stackedit__html {
		margin: 0;
		padding: 0;
	} */

	th.des,
	th.method {
		min-width: 300px;
	}
</style>
