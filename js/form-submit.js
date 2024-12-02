const form = document.querySelector('#form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const alert = document.querySelector('#form_message');
    if(window.location.hash === "#br") {
        alert.innerHTML = 'Enviando...';
    } else {
        alert.innerHTML = 'Sending...';
    }
    
    const formData = new FormData(form);
    
    const data = await fetch('https://amanidev.com/enviar.php', {
        method: 'POST',
        mode: 'cors',
        body: formData
    })
    
    if(window.location.hash === "#br") {
        alert.innerHTML = 'Mensagem enviada! :)';
    } else {
        alert.innerHTML = 'Message sent! :)';
    }

    setTimeout( function() {
        alert.innerHTML = '';
    }, 3000);

    //const response = await data.json();
    //console.log(response);
});