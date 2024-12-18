var dataReload = document.querySelectorAll("a[data-reload]");
var title_index = document.getElementById("title_index");
var error_404 = document.getElementById("error_404");
var text_error_404 = document.getElementById("text_error_404");
var form_submit = document.getElementById("form_submit");



var language = {
  eng: {
    title_index: "amaniDev - Fullstack Web Developer",
    error_404: "Error 404",
    text_error_404: "Oops, looks like something went wrong. :(",
    form_submit: "Back to home",
  },

  br: {
    title_index: "amaniDev - Desenvolvedora Web Fullstack",
    error_404: "Erro 404",
    text_error_404: "Ops, parece que algo deu errado. :(",
    form_submit: "Voltar ao início",
  }

};

var setLanguage = () => {

  if (window.location.hash === "#br") {
    title_index.textContent = language.br.title_index;
    error_404.textContent = language.br.error_404;
    text_error_404.textContent = language.br.text_error_404;
    form_submit.textContent = language.br.form_submit;
    

  } else {
    title_index.textContent = language.eng.title_index;
    error_404.textContent = language.eng.error_404;
    text_error_404.textContent = language.eng.text_error_404;
    form_submit.textContent = language.eng.form_submit;
    
  }

}
 

for (i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function(e) {
    window.location.hash = this.getAttribute("href");
    setLanguage();
  }
}

setLanguage();