const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactModal = document.getElementById("contactModal");
const openContactBtn = document.querySelector("[data-open-contact]");
const closeContactButtons = document.querySelectorAll("[data-close-contact]");
const workDetailRoot = document.querySelector("[data-work-detail]");

const schoolWorks = {
  "charte-nommage": {
    title: "Prise en compte de charte de nommage pour les fichiers et les dossiers",
    shortDescription: "Verification des regles de nommage utilisees par un utilisateur.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet charte de nommage",
    request: "Verifier que les fichiers et dossiers respectent les conventions de nommage demandees dans le TP.",
    response: "J'ai controle les noms existants, identifie les ecarts et applique les regles attendues pour normaliser l'organisation.",
    tools: ["Google Docs", "Methode de nommage"],
  },
  "charte-informatique": {
    title: "Prise en compte de la charte informatique",
    shortDescription: "Verification des regles de la charte informatique utilisees par des employes.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet charte informatique",
    request: "Analyser la charte informatique et verifier son application dans des cas concrets d'usage.",
    response: "J'ai relu les regles principales et verifie la conformite des pratiques observees en m'appuyant sur la charte.",
    tools: ["Google Docs", "Charte informatique"],
  },
  "programme-csharp": {
    title: "Evolution d'un programme C# de reservation de salle",
    shortDescription: "Realisation et evolution d'un programme C# pour la gestion de reservation d'une salle.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet Csharp de reservation",
    request: "Faire evoluer une application C# afin de mieux gerer les reservations de salle.",
    response: "J'ai adapte le code existant, ameliore la logique de reservation et teste le fonctionnement dans Visual Studio.",
    tools: ["C#", "Visual Studio"],
  },
  "site-wordpress-bobocal": {
    title: "Realisation du site WordPress bobocal",
    shortDescription: "Creation d'un site nomme bobocal avec WordPress.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du site WordPress bobocal",
    request: "Concevoir un site web avec WordPress pour presenter le projet bobocal.",
    response: "J'ai mis en place la structure du site, configure les pages et ajuste la presentation avec les outils WordPress.",
    tools: ["WordPress", "Gestion de contenu"],
  },
  "correction-linkretz": {
    title: "Correction du site Web statique Linkretz",
    shortDescription: "Correction des erreurs presentes sur le site Linkretz.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu de la correction du site Linkretz",
    request: "Corriger les anomalies d'un site statique existant dans le cadre d'un TP.",
    response: "J'ai identifie les erreurs HTML/CSS puis applique les corrections necessaires pour stabiliser le site.",
    tools: ["Visual Studio", "HTML", "CSS"],
  },
  "ubuntu-linux": {
    title: "Projet Ubuntu et commandes Linux",
    shortDescription: "Installation et configuration d'Ubuntu avec un TP sur les commandes Linux.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet Ubuntu Linux",
    request: "Installer Ubuntu et maitriser les commandes Linux de base demandees dans le TP.",
    response: "J'ai configure l'environnement Ubuntu et realise les exercices de commandes pour administrer le systeme.",
    tools: ["Ubuntu", "Linux"],
  },
  "patrimoine-informatique": {
    title: "Le patrimoine informatique",
    shortDescription: "Mise en place d'une installation complete autour de GLPI.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet patrimoine informatique",
    request: "Mettre en place l'inventaire et la gestion du patrimoine informatique avec GLPI.",
    response: "J'ai installe l'environnement puis configure les elements necessaires pour suivre les equipements informatiques.",
    tools: ["GLPI", "VirtualBox"],
  },
  "windows-server": {
    title: "Windows Server",
    shortDescription: "Installation et configuration d'un serveur Windows.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet Windows Server",
    request: "Installer un serveur Windows et valider son bon fonctionnement.",
    response: "J'ai deploie Windows Server en environnement virtualise puis configure les services de base attendus.",
    tools: ["Windows Server", "VirtualBox"],
  },
  sauvegardes: {
    title: "Les sauvegardes",
    shortDescription: "Recherche complete sur les differents types de sauvegarde.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet sauvegardes",
    request: "Produire une recherche sur les strategies et types de sauvegarde en informatique.",
    response: "J'ai compare les principales methodes de sauvegarde et synthestise les bonnes pratiques dans un support clair.",
    tools: ["VirtualBox", "Documentation"],
  },
  "veille-informatique": {
    title: "Veille informatique",
    shortDescription: "Suivi de l'actualite technologique et synthese des evolutions importantes.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet veille informatique",
    request: "Mettre en place une veille reguliere sur des sujets informatiques pour identifier les tendances utiles.",
    response: "J'ai realise une veille structuree avec collecte de sources, tri des informations et redaction d'une synthese exploitable.",
    tools: ["Veille", "Analyse", "Synthese"],
  },
};

const renderWorkDetail = () => {
  if (!workDetailRoot) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const workId = params.get("work") || "charte-nommage";
  const work = schoolWorks[workId] || schoolWorks["charte-nommage"];

  document.title = `${work.title} - Portfolio BTS`;

  const titleElement = document.querySelector("[data-work-title]");
  const introElement = document.querySelector("[data-work-intro]");
  const imageElement = document.querySelector("[data-work-image]");
  const requestElement = document.querySelector("[data-work-request]");
  const responseElement = document.querySelector("[data-work-response]");
  const toolsElement = document.querySelector("[data-work-tools]");

  if (titleElement) {
    titleElement.textContent = work.title;
  }

  if (introElement) {
    introElement.textContent = work.shortDescription;
  }

  if (imageElement) {
    imageElement.src = work.image;
    imageElement.alt = work.imageAlt;
  }

  if (requestElement) {
    requestElement.textContent = work.request;
  }

  if (responseElement) {
    responseElement.textContent = work.response;
  }

  if (toolsElement) {
    toolsElement.innerHTML = work.tools.map((tool) => `<li>${tool}</li>`).join("");
  }
};

renderWorkDetail();

window.addEventListener("scroll", () => {
  const shouldShow = window.scrollY > 220;
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle("show", shouldShow);
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (contactModal && openContactBtn) {
  openContactBtn.addEventListener("click", () => {
    contactModal.classList.add("open");
    contactModal.setAttribute("aria-hidden", "false");
  });
}

closeContactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (contactModal) {
      contactModal.classList.remove("open");
      contactModal.setAttribute("aria-hidden", "true");
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal) {
    contactModal.classList.remove("open");
    contactModal.setAttribute("aria-hidden", "true");
  }
});
