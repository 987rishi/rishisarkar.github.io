function toggle_theme(){
    if(document.getElementById("theme").checked==false)
        document.getElementById("html").setAttribute("data-bs-theme","light")
    else
        document.getElementById("html").setAttribute("data-bs-theme","dark")

}
