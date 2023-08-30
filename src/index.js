import "./assets/css/style.css"
import logo from "./components/logo/logo"
import search from "./components/searchbar/searchbar"
import button from "./components/button/button"

const main = document.getElementById("main")

const headerSection = document.createElement("section")
headerSection.id = "header"

const searchSection = document.createElement("section")
searchSection.classList = "searchbar"

const searchButtons = document.createElement("div")
searchButtons.classList = "search-buttons"
searchButtons.appendChild(button("button-find", "Bookle Search"))
searchButtons.appendChild(button("button-lucky", "I'm feeling lucky"))

const results = document.createElement("section")
results.classList = "results"

headerSection.appendChild(logo())
searchSection.appendChild(search())
// results.appendChild(test())

main.appendChild(headerSection)
main.appendChild(searchSection)
main.appendChild(searchButtons)

{
	/* <section id="header"></section>
		<section id="searchbar"></section>
		<div class="search-buttons"></div>
		<section id="results"></section> */
}
