function openMenu($var) {
    const menu = document.getElementById($var);
    const btn = document.getElementById('btn-menu');

    if(menu.classList.contains("show-side-menu")) {
        menu.classList.remove("show-side-menu");
        menu.classList.add("close-side-menu");

    } else if(menu.classList.contains("close-side-menu")) {
        menu.classList.remove("close-side-menu");
        menu.classList.add("show-side-menu");
    }

    if(btn.classList.contains("btn-close")) {
        btn.classList.remove("btn-close");

    } else {
        btn.classList.add("btn-close");
    }

    menu.addEventListener("click", (e) => {
        if(e.target.id == $var || e.target.id == 'home-menu' || e.target.id == 'about-menu' || e.target.id == 'btn-menu') {
            
            btn.classList.remove("btn-close");
            menu.classList.remove('show-side-menu')
            menu.classList.add('close-side-menu')
        }
    })
}

