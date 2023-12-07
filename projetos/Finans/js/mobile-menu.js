function abrirModal($var) {
    const modal = document.getElementById($var)
    modal.classList.toggle('abrir')

    modal.addEventListener("click", (e) => {
        if(e.target.id == 'fechar' || e.target.id == $var || e.target.id == 'btn-cancel') {
            modal.classList.remove('abrir')
        }
    })
}