//BTN EVENTS

const menuMovile = document.getElementById("navMenu")
const navMenu = document.getElementById("Links")

menuMovile.addEventListener( "click", () => {
	navMenu.classList.toggle("menu-links_Visible")
});

const menuMovile_back = document.getElementById("Back")
const navMenu_back = document.getElementById("Links")

menuMovile_back.addEventListener( "click", () => {
	navMenu.classList.remove("menu-links_Visible")
});

const menuEnter = document.getElementById("Enterbtn")
const Change = document.getElementById('first-print')

menuEnter.addEventListener( "click", () => {
	Change.classList.add("first-print_hidden")
});