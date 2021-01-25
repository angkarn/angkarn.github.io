// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.


const posts = [
	{
		title: 'Marker Map',
		slug: 'marker-map',
		html: `
		<img width="160" src="https://github.com/angkarn/marker-map/raw/main/example/assets/screenshot.jpg" alt="marker map screenshot" />
		<p>Marker Map is simple dynamic place marker by position to image and support responsive.</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
