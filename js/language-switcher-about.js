var dataReload = document.querySelectorAll("a[data-reload]");
var title_index = document.getElementById("title_index");
var loading = document.getElementById("loading");
var home_menu = document.getElementById("home_menu");
var about_menu = document.getElementById("about-menu");
var blog_menu = document.getElementById("blog_menu");
var hello_menu = document.getElementById("hello_menu");
var language_menu = document.getElementById("language_menu");
var about_text_1 = document.getElementById("about_text_1");
var about_text_2 = document.getElementById("about_text_2");
var qualities_title = document.getElementById("qualities_title");
var text_ux = document.getElementById("text_ux");
var qualities_title_item = document.getElementById("qualities_title_item");
var text_writer = document.getElementById("text_writer");
var text_code = document.getElementById("text_code");
var qualities_title_item_2 = document.getElementById("qualities_title_item_2");
var text_developer = document.getElementById("text_developer");
var qualities_title_item_3 = document.getElementById("qualities_title_item_3");
var text_transparency = document.getElementById("text_transparency");
var qualities_title_item_4 = document.getElementById("qualities_title_item_4");
var text_guarantee = document.getElementById("text_guarantee");
var qualities_title_item_5 = document.getElementById("qualities_title_item_5");
var contact_title = document.getElementById("contact_title");
var contact_text = document.getElementById("contact_text");
var form_name = document.getElementById("form_name");
var form_email = document.getElementById("form_email");
var form_message = document.getElementById("message");
var form_submit = document.getElementById("form_submit");

var language = {
  eng: {
    title_index: "amaniDev - Fullstack Web Developer",
    loading: "About",
    home_menu: "Home",
    about_menu: "About me",
    blog_menu: "My blog",
    hello_menu: "Say hello",
    language_menu: "Change language",
    about_text_1: "My name is Amani, I'm a Full Stack Web Developer and Web Designer with a passion for creating beautiful, elegant and simple websites. I bring this philosophy to every project, with the aim that my work reaches and inspires as many people as possible!",
    about_text_2: "I have a blog where I try to write frequently in order to help professionals who are just entering the field, focusing on the common difficulties that are encountered at the start of a career.",
    qualities_title: "Bringing your imagination to life with precision and passion.",
    text_ux: "I graduated in Web Design and am extremely committed to delivering the best visual experience for my clients.",
    qualities_title_item: "Writer",
    text_writer: "I believe that sharing knowledge and learning can change lives.",
    text_code: "I always follow the best development practices, focusing on writing clean and uncomplicated code.",
    qualities_title_item_2: "Web Developer",
    text_developer: "With 3 years' experience developing web applications, I can guarantee the quality your project needs.",
    qualities_title_item_3: "Transparency",
    text_transparency: "My development process aims to be transparent for the client, where they are with me from start to finish.",
    qualities_title_item_4: "Guarantee",
    text_guarantee: "All my deliveries come with a 90-day guarantee against any technical problems, ensuring greater security for the customer.",
    qualities_title_item_5: "Clean Code",
    contact_title: "Send me a message!",
    contact_text: "Got a question or proposal, or just want to say hello? Go ahead.",
    form_name: "Your name",
    form_email: "Your email",
    form_message: "Your message",
    form_submit: "Submit"
  },

  br: {
    title_index: "amaniDev - Desenvolvedora Web Fullstack",
    loading: "Sobre",
    home_menu: "Início",
    about_menu: "Sobre",
    blog_menu: "Meu blog",
    hello_menu: "Diga olá",
    language_menu: "Altere o idioma",
    about_text_1: "Me chamo Amani, sou Desenvolvedora Web Full Stack e Web Designer apaixonada por criar sites bonitos, elegantes e simples. Trago essa filosofia em cada projeto, com o objetivo que meus trabalhos alcancem e sirvam de inspiração para o máximo de pessoas!",
    about_text_2: "Possuo um blog onde tento escrever com frequência com o intuito de ajudar profissionais que estão entrando agora na área, focando nas dificuldades comuns que são encontradas no início da carreira.",
    qualities_title: "Dando vida a sua imaginação com precisão e paixão.",
    text_ux: "Formada em Web Design e sou extremamente comprometida em entregar a melhor experiência visual para meus clientes.",
    qualities_title_item: "Blogueira",
    text_writer: "Acredito que compartilhar conhecimento e aprendizado pode mudar vidas.",
    text_code: "Sempre sigo as melhores práticas de desenvolvimento, focando em escrever códigos limpos e descomplicados.",
    qualities_title_item_2: "Desenvolvedora Web",
    text_developer: "Com 3 anos de experiência desenvolvendo aplicações web, posso garantir a qualidade que seu projeto precisa.",
    qualities_title_item_3: "Transparência",
    text_transparency: "Meu processo de desenvolvimento visa a transparência para o cliente, onde o mesmo acompanha do início ao fim.",
    qualities_title_item_4: "Garantia",
    text_guarantee: "Todas as minhas entregas possuem garantia de 90 dias contra eventuais problemas técnicos. garantindo mais segurança para o cliente.",
    qualities_title_item_5: "Código Limpo",
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
    about_text_1.textContent = language.br.about_text_1;
    about_text_2.textContent = language.br.about_text_2;
    qualities_title.textContent = language.br.qualities_title;
    text_ux.textContent = language.br.text_ux;
    qualities_title_item.textContent = language.br.qualities_title_item;
    text_writer.textContent = language.br.text_writer;
    text_code.textContent = language.br.text_code;
    qualities_title_item_2.textContent = language.br.qualities_title_item_2;
    text_developer.textContent = language.br.text_developer;
    qualities_title_item_3.textContent = language.br.qualities_title_item_3;
    text_transparency.textContent = language.br.text_transparency;
    qualities_title_item_4.textContent = language.br.qualities_title_item_4;
    text_guarantee.textContent = language.br.text_guarantee;
    qualities_title_item_5.textContent = language.br.qualities_title_item_5;
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
    about_text_1.textContent = language.eng.about_text_1;
    about_text_2.textContent = language.eng.about_text_2;
    qualities_title.textContent = language.eng.qualities_title;
    text_ux.textContent = language.eng.text_ux;
    qualities_title_item.textContent = language.eng.qualities_title_item;
    text_writer.textContent = language.eng.text_writer;
    text_code.textContent = language.eng.text_code;
    qualities_title_item_2.textContent = language.eng.qualities_title_item_2;
    text_developer.textContent = language.eng.text_developer;
    qualities_title_item_3.textContent = language.eng.qualities_title_item_3;
    text_transparency.textContent = language.eng.text_transparency;
    qualities_title_item_4.textContent = language.eng.qualities_title_item_4;
    text_guarantee.textContent = language.eng.text_guarantee;
    qualities_title_item_5.textContent = language.eng.qualities_title_item_5;
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