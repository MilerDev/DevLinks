function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")



    //pegr a tag img

    const img = document.querySelector("#profile img")

    //subtituir a imagem 
    if (html.classList.contains('light')) {
        // se tiver light mode , adicioner a imagem light
        img.setAttribute("src", "./assets/assets/avatar-light.png")
    }
    else {
        // set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/assets/avatar.png")
    }
}