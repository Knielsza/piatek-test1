const notification = (title, msg) => {
	new Notification(title, {
		body: msg,
	})
}

