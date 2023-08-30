import "./assets/css/style.css"
import logo from "./components/logo/logo"
import test from "./components/test/test"
import search from "./components/searchbar/searchbar"

const main = document.getElementById("main")
const headerSection = document.createElement("section")
headerSection.id = "header"
const searchSection = document.getElementById("searchbar")
const results = document.getElementById("results")

headerSection.appendChild(logo())
searchSection.appendChild(search())
results.appendChild(test())


<section id="header"></section>
		<section id="searchbar"></section>
		<div class="search-buttons"></div>
		<section id="results"></section>