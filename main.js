const { app, BrowserWindow, Menu, ipcMain, nativeTheme } = require('electron')
const path = require('path')
const fs = require('fs')



const menuTemplate = [
	{
		label: "File",
		submenu: [
			{
				label: "goodbye",
				role: "quit",
				accelerator: "shift+c"
			},
			{
				label: "Reload",
				role: "Reload"
			},
			{
				label: "Open Console",
				role: "toggledevtools"
			},
			{
				label: "Undo",
				role: "Undo",
				accelerator: "shift+f1"
			},
			{
				label: "Redo",
				role: "Redo",
				accelerator: 'shift+f2'
			},
		]
	}
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
	const window = new BrowserWindow({
		width: 400,
		height: 500,
		webPreferences: {
			preload: path.join(__dirname, './preload.js'),
		},
	})

	window.loadFile('index.html')

	window.addListener
})

// document.querySelector('#animals').addEventListener("change", function() {
// 	if (this.value == "dogs") {
// 	  console.log('dogs');
// 	}if (this.value == "cats") {
// 		console.log('cats');}
// 	if (this.value == "niggas") {
// 		console.log('cats');}

//   });