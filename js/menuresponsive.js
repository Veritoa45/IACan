const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
	nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
	nav.classList.remove("visible");
})

/*const menu = document.querySelector (".menu")
let nav = document.querySelector ("nav")
let img = document.querySelector (".hamburguesa")

function function_toggle(){
	if ( img.src === "http://127.0.0.1:5501/img/menu.png" ) {
		img.src = "../img/cerrar.png"
		img.style.width = "40px"
		img.style.height = "40px"
		nav.style.display = "flex"
	}
	else{
		img.src = "../img/menu.png"
		img.style.width = "50px"
		img.style.height = "50px"
		nav.style.display = "none"
	}
}

menu.addEventListener("click", function_toggle);*/






















menu.addEventListener("click", function_toggle)