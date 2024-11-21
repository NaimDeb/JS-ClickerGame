
const cookie = document.querySelector("#cookie")
const numbah = document.querySelector("#number")
const divCookie = document.querySelector(".divCookie")

divCookie.addEventListener("click", handleClickCookie)

let cookieNumber = 0
let incrementCookie = 1

function handleClickCookie() {
    
    cookieNumber += incrementCookie

    numbah.innerHTML = cookieNumber

    // Anim
    cookie.classList.remove("animation");
    setTimeout(() => {
        cookie.classList.add("animation");
    }, 10);
    


}