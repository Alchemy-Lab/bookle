import "./style.css"

function button(cl, txt) {
	const button = document.createElement("button")
	button.setAttribute("type", "submit")
	button.setAttribute("class", cl)
	button.innerHTML = txt
	return button
}

export default button
