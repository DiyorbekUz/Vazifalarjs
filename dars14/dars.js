async function urlLoader () {
	let response = await fetch('https://picsum.photos/400')
	return response.url
}


async function imgCreator (n) {
	if(n > 4) return

	let img = document.createElement('img')
	img.src = await urlLoader()
	
	img.onload = () => {
		div.append(img)
		return imgCreator(++n)
	}
}
imgCreator(0)
