var dataReload = document.querySelectorAll("a[data-reload]");
var title_index = document.getElementById("title_index");
var loading = document.getElementById("loading");
var home_menu = document.getElementById("home_menu");
var about_menu = document.getElementById("about-menu");
var blog_menu = document.getElementById("blog_menu");
var hello_menu = document.getElementById("hello_menu");
var language_menu = document.getElementById("language_menu");
var hire = document.getElementById("hire");
var aboutUpper = document.getElementById("hi");
var aboutText = document.getElementById("aboutText");
var blog_btn = document.getElementById("blog_btn");
var aboutWrite = document.getElementById("about_write");
var about_sometimes = document.getElementById("about_sometimes");
var work_title = document.getElementById("work_title");
var website_link = document.getElementsByClassName("nav-link");
var progress_p = document.getElementsByClassName("progress-p");
var progress_f = document.getElementsByClassName("progress-f");
var help_title = document.getElementById('help_title');
var help_development = document.getElementById('help_development');
var help_full = document.getElementById('help_full');
var help_text_design = document.getElementById('help_text_design');
var help_text_development = document.getElementById('help_text_development');
var help_text_full = document.getElementById('help_text_full');
var contact_title = document.getElementById("contact_title");
var contact_text = document.getElementById("contact_text");
var form_name = document.getElementById("form_name");
var form_email = document.getElementById("form_email");
var form_message = document.getElementById("message");
var form_submit = document.getElementById("form_submit");

var language = {
  eng: {
    title_index: "amaniDev - Fullstack Web Developer",
    loading: "Home",
    home_menu: "Home",
    about_menu: "About me",
    blog_menu: "My blog",
    hello_menu: "Say hello",
    language_menu: "Change language",
    hire: "Get in touch!",
    aboutUpper:"Hi,",
    aboutText: "My name is Amani, FullStack Web Developer and Designer with a passion for creating elegant and simple websites. I bring this philosophy to every project, aiming to inspire through my work!",
    blog_btn: "My blog",
    aboutWrite: "I also write,",
    about_sometimes: "sometimes...",
    work_title: "Recent work",
    website_link: "Visit the website >",
    progress_p: "In progress...",
    progress_f: "Finished!",
    help_title: "I can help you with...",
    help_development: "Development",
    help_full: "Full Package",
    help_text_design: "With a solid background in website design, I deliver beautiful, uncomplicated and user-friendly interfaces.",
    help_text_development: "I develop scalable, responsive and fully customized websites, adapted to the needs of each client. My focus is on simplifying the development process, showing that what is functional and beautiful doesn't have to be complicated!",
    help_text_full: "A complete website, taking care of all the stages from draft to implementation, with a collaborative approach that ensures close client involvement.",
    contact_title: "Send me a message!",
    contact_text: "Got a question or proposal, or just want to say hello? Go ahead.",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Your message",
    form_submit: "Submit"
  },

  br: {
    title_index: "amaniDev - Desenvolvedora Web Fullstack",
    loading: "Início",
    home_menu: "Início",
    about_menu: "Sobre",
    blog_menu: "Meu blog",
    hello_menu: "Diga olá",
    language_menu: "Altere o idioma",
    hire: "Entre em contato!",
    aboutUpper:"Olá,",
    aboutText: "Meu nome é Amani, Desenvolvedora Web FullStack e Designer apaixonada por criar sites bonitos, elegantes e simples. Trago essa filosofia em cada projeto, com o objetivo que meu trabalho sirva de inspiração!",
    blog_btn: "Meu blog",
    aboutWrite: "Eu escrevo também,",
    about_sometimes: "as vezes...",
    work_title: "Trabalhos recentes",
    website_link: "Visite o site >",
    progress_p: "Em andamento...",
    progress_f: "Finalizado!",
    help_title: "Posso te ajudar com...",
    help_development: "Desenvolvimento",
    help_full: "Pacote Completo",
    help_text_design: "Com sólida experiência em design de sites, eu entrego interfaces bonitas, descomplicadas e amigáveis para o usuário.",
    help_text_development: "Desenvolvo sites escaláveis, responsivos e totalmente personalizados, adaptados às necessidades de cada cliente. Meu foco é simplificar o processo de desenvolvimento, mostrando que o que é funcional e bonito não precisa ser complicado!",
    help_text_full: "Um site completo, cuidando de todas as etapas, do rascunho à implementação, com uma abordagem colaborativa que garante o envolvimento próximo do cliente.",
    contact_title: "Envie uma mensagem!",
    contact_text: "Tem alguma pergunta ou proposta, ou apenas quer dizer olá? Vá em frente.",
    form_name: "Seu nome",
    form_email: "Seu email",
    form_message: "Sua mensagem",
    form_submit: "Enviar"
  }

};

var setLanguage = () => {

  if (window.location.hash === "#br") {
    title_index.textContent = language.br.title_index;
    loading.textContent = language.br.loading;
    home_menu.textContent = language.br.home_menu;
    about_menu.textContent = language.br.about_menu;
    blog_menu.textContent = language.br.blog_menu;
    hello_menu.textContent = language.br.hello_menu;
    language_menu.textContent = language.br.language_menu;
    hire.textContent = language.br.hire;
    aboutUpper.textContent = language.br.aboutUpper;
    aboutText.textContent = language.br.aboutText;
    blog_btn.textContent = language.br.blog_btn;
    aboutWrite.textContent = language.br.aboutWrite;
    about_sometimes.textContent = language.br.about_sometimes;
    work_title.textContent = language.br.work_title;

    for (var i = 0; i < website_link.length; i++) {
      website_link[i].textContent = language.br.website_link; 
    }

    for (var i = 0; i < progress_p.length; i++) {
      progress_p[i].textContent = language.br.progress_p; 
    }

    for (var i = 0; i < progress_f.length; i++) {
      progress_f[i].textContent = language.br.progress_f; 
    }

    help_title.textContent = language.br.help_title;
    help_development.textContent = language.br.help_development;
    help_full.textContent = language.br.help_full;
    help_text_design.textContent = language.br.help_text_design;
    help_text_development.textContent = language.br.help_text_development;
    help_text_full.textContent = language.br.help_text_full;
    contact_title.textContent = language.br.contact_title;
    contact_text.textContent = language.br.contact_text;
    form_name.textContent = language.br.form_name;
    form_email.textContent = language.br.form_email;
    form_message.placeholder = language.br.form_message;
    form_submit.textContent = language.br.form_submit;

  } else {
    title_index.textContent = language.eng.title_index;
    loading.textContent = language.eng.loading;
    home_menu.textContent = language.eng.home_menu;
    about_menu.textContent = language.eng.about_menu;
    blog_menu.textContent = language.eng.blog_menu;
    hello_menu.textContent = language.eng.hello_menu;
    language_menu.textContent = language.eng.language_menu;
    hire.textContent = language.eng.hire;
    aboutUpper.textContent = language.eng.aboutUpper;
    aboutText.textContent = language.eng.aboutText;
    blog_btn.textContent = language.eng.blog_btn;
    aboutWrite.textContent = language.eng.aboutWrite;
    about_sometimes.textContent = language.eng.about_sometimes;
    work_title.textContent = language.eng.work_title;

    for (var i = 0; i < website_link.length; i++) {
      website_link[i].textContent = language.eng.website_link;
    }

    for (var i = 0; i < progress_p.length; i++) {
      progress_p[i].textContent = language.eng.progress_p;
    }

    for (var i = 0; i < progress_f.length; i++) {
      progress_f[i].textContent = language.eng.progress_f;
    }

    help_title.textContent = language.eng.help_title;
    help_development.textContent = language.eng.help_development;
    help_full.textContent = language.eng.help_full;
    help_text_design.textContent = language.eng.help_text_design;
    help_text_development.textContent = language.eng.help_text_development;
    help_text_full.textContent = language.eng.help_text_full;
    contact_title.textContent = language.eng.contact_title;
    contact_text.textContent = language.eng.contact_text;
    form_name.textContent = language.eng.form_name;
    form_email.textContent = language.eng.form_email;
    form_message.placeholder = language.eng.form_message;
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


