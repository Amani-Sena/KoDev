var dataReload = document.querySelectorAll("a[data-reload]");
var hire = document.getElementById("hire");
var aboutTitle = document.getElementById("hi");
var aboutDesc1 = document.getElementById("aboutDesc1");
var aboutDesc2 = document.getElementById("aboutDesc2");
var aboutDesc3 = document.getElementById("aboutDesc3");
var skillsTitle = document.getElementById("skillsTitle");
var portTitle1 = document.getElementById("portTitle1");
var portDesc1 = document.getElementById("portDesc1");
var portTitle2 = document.getElementById("portTitle2");
var portDesc2 = document.getElementById("portDesc2");
var footerTitle = document.getElementById("footerTitle");
var footerContact = document.getElementById("footerContact");
var loading = document.getElementById("loading");
var language = {
  eng: {
    hire: "Hire me!",
    aboutT:"Hi,",
    aboutD1: "my name is Amani, FullStack Web Developer and technology enthusiast, as well as a proud cat lover! 😸",
    aboutD2: "I'm a student of Systems Analysis and Development and I'm always striving to improve my skills in order to offer high-quality digital solutions.",
    aboutD3: "If you're looking for a developer who is committed, creative and passionate about what she does, I'm ready to turn your ideas into reality. I know we'll create something perfect together!",
    skillsTitle: "My skills and power ups. 🐈",
    portTitle1: "Done, finished and counting!",
    portDesc1: "Click to see.",
    portTitle2: "Portfolio",
    portDesc2: "Take a closer look at the finished projects!",
    footerTitle: "Bringing your imagination to life with precision and passion.",
    footerContact: "Contact",
    loading: "Loading..."
  },

  br: {
    hire: "Contrate-me!",
    aboutT: "Olá,",
    aboutD1: "me chamo Amani, Desenvolvedora Web FullStack e entusiasta de tecnologia, além de uma orgulhosa amante de gatos! 😸",
    aboutD2: "Sou estudante de Análise e Desenvolvimento de Sistemas e estou sempre me dedicando a aprimorar minhas habilidades para oferecer soluções digitais de alta qualidade.",
    aboutD3: "Se você procura uma desenvolvedora comprometida, criativa e apaixonada pelo que faz, estou pronta para transformar suas ideias em realidade. Sei que vamos criar algo perfeito juntos!",
    skillsTitle: "Minhas skills e power up's. 🐈",
    portTitle1: "Feitos, acabados e contando!",
    portDesc1: "Clique e veja.",
    portTitle2: "Portfólio",
    portDesc2: "Dê uma olhada mais de perto nos projetos finalizados!",
    footerTitle: "Dando vida a sua imaginação com precisão e paixão.",
    footerContact: "Contato",
    loading: "Carregando..."
  }

};

var setLanguage = () => {

  if (window.location.hash === "#br") {
    hire.textContent = language.br.hire;
    aboutTitle.textContent = language.br.aboutT;
    aboutDesc1.textContent = language.br.aboutD1;
    aboutDesc2.textContent = language.br.aboutD2;
    aboutDesc3.textContent = language.br.aboutD3;
    skillsTitle.textContent = language.br.skillsTitle;
    portTitle1.textContent = language.br.portTitle1;
    portDesc1.textContent = language.br.portDesc1;
    portTitle2.textContent = language.br.portTitle2;
    portDesc2.textContent = language.br.portDesc2;
    footerTitle.textContent = language.br.footerTitle;
    footerContact.textContent = language.br.footerContact;
    loading.textContent = language.br.loading;
  } else {
    hire.textContent = language.eng.hire;
    aboutTitle.textContent = language.eng.aboutT;
    aboutDesc1.textContent = language.eng.aboutD1;
    aboutDesc2.textContent = language.eng.aboutD2;
    aboutDesc3.textContent = language.eng.aboutD3;
    skillsTitle.textContent = language.eng.skillsTitle;
    portTitle1.textContent = language.eng.portTitle1;
    portDesc1.textContent = language.eng.portDesc1;
    portTitle2.textContent = language.eng.portTitle2;
    portDesc2.textContent = language.eng.portDesc2;
    footerTitle.textContent = language.eng.footerTitle;
    footerContact.textContent = language.eng.footerContact;
    loading.textContent = language.eng.loading;
  }

}

for (i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function(e) {
    window.location.hash = this.getAttribute("href");
    setLanguage();
  }
}

setLanguage();