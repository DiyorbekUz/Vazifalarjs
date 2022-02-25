fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=true&location=us", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
		"x-rapidapi-key": "db7fc7b30bmsh789005d2b548a8bp1eae5fjsn05c98ee19db7"
	}
})
.then(response => {
	console.log(response.url);
})
.catch(err => {
	console.error(err);
});