import logoImg from "./logo.png"
import "./style.css"

function logo() {
	const logoDomImg = new Image()
	logoDomImg.src = logoImg
	logoDomImg.className = "bookle-logo"
	return logoDomImg
}

export default logo
