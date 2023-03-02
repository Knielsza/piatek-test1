window.addEventListener('DOMContentLoaded', () => {
	const electronVersion = process.versions['electron']
	const chromeVersion = process.versions['chrome']
	const nodeVersion = process.versions['node']

	const mySpan = document.querySelector('#electron-v')
	mySpan.innerText = `Electron Version: ${electronVersion}`
	console.log(mySpan, electronVersion)

	const mySpan1 = document.querySelector('#chrome-v')
	mySpan1.innerText = `Chrome Version: ${chromeVersion}`
	console.log(mySpan1, chromeVersion)

	const mySpan2 = document.querySelector('#node-v')
	mySpan2.innerText = `Node Version: ${nodeVersion}`
	console.log(mySpan2, nodeVersion)


})
