function togglemode() {
    const html = document.documentElement
    html.classList.toggle("light")


    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {
        img.setAttribute("src", "ft_perfil_claro.jpg")}
        else {
        img.setAttribute("src", "ft_incial.jpg")
        }





        

    }

