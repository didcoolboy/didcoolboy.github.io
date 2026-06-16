const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactModal = document.getElementById("contactModal");
const openContactBtn = document.querySelector("[data-open-contact]");
const closeContactButtons = document.querySelectorAll("[data-close-contact]");
const workDetailRoot = document.querySelector("[data-work-detail]");

const schoolWorks = {
  "charte-nommage": {
    title: "Prise en compte de charte de nommage pour les fichiers et les dossiers",
    shortDescription: "Vérification des règles de nommage utilisées par un utilisateur.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet charte de nommage",
    request: "Expression de la demande : prise en compte du nommage pour les fichiers et les dossiers (définir les conventions attendues, structure et format des noms).",
    response: "Travail réalisé : contrôle des fichiers et dossiers, identification des écarts par rapport à la charte, renommage et normalisation des éléments non conformes, et rédaction d'un court rapport de conformité.",
    requestPdfCandidates: ["../assets/chartenommagedemande.pdf"],
    responsePdfCandidates: ["../assets/chartenommagetravailréalisé.pdf"],
    tools: ["Google Docs", "Methode de nommage"],
  },
  "charte-informatique": {
    title: "Prise en compte de la charte informatique",
    shortDescription: "Vérification des règles de la charte informatique utilisées par des employés.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet charte informatique",
    request: "Analyser la charte informatique et verifier son application dans des cas concrets d'usage.",
    response: "J'ai relu les regles principales et verifie la conformite des pratiques observees en m'appuyant sur la charte.",
    tools: ["Google Docs", "Charte informatique"],
  },
  "programme-csharp": {
    title: "Évolution d'un programme C# de réservation de salle",
    shortDescription: "Réalisation et évolution d'un programme C# pour la gestion de réservation d'une salle.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet Csharp de reservation",
    request: "Faire évoluer une application C# afin de mieux gérer les réservations de salle.",
    response: "J'ai adapté le code existant, amélioré la logique de réservation et testé le fonctionnement dans Visual Studio.",
    tools: ["C#", "Visual Studio"],
  },
  "site-wordpress-bobocal": {
    title: "Réalisation du site WordPress bobocal",
    shortDescription: "Création d'un site nommé bobocal avec WordPress.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du site WordPress bobocal",
    request: "Concevoir un site web avec WordPress pour présenter le projet bobocal.",
    response: "J'ai mis en place la structure du site, configuré les pages et ajusté la présentation avec les outils WordPress.",
    tools: ["WordPress", "Gestion de contenu"],
  },
  "correction-linkretz": {
    title: "Correction du site Web statique Linkretz",
    shortDescription: "Correction des erreurs présentes sur le site Linkretz.",
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
    response: "J'ai configuré l'environnement Ubuntu et réalisé les exercices de commandes pour administrer le système.",
    tools: ["Ubuntu", "Linux"],
  },
  "patrimoine-informatique": {
    title: "Le patrimoine informatique",
    shortDescription: "Mise en place d'une installation complete autour de GLPI.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet patrimoine informatique",
    request: "Mettre en place l'inventaire et la gestion du patrimoine informatique avec GLPI.",
    response: "J'ai installé l'environnement puis configuré les éléments nécessaires pour suivre les équipements informatiques.",
    tools: ["GLPI", "VirtualBox"],
  },
  "windows-server": {
    title: "Windows Server",
    shortDescription: "Installation et configuration d'un serveur Windows.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet Windows Server",
    request: "Installer un serveur Windows et valider son bon fonctionnement.",
    response: "J'ai déployé Windows Server en environnement virtualisé puis configuré les services de base attendus.",
    tools: ["Windows Server", "VirtualBox"],
  },
  sauvegardes: {
    title: "Les sauvegardes",
    shortDescription: "Recherche complète sur les différents types de sauvegarde.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet sauvegardes",
    request: "Produire une recherche sur les strategies et types de sauvegarde en informatique.",
    response: "J'ai comparé les principales méthodes de sauvegarde et synthétisé les bonnes pratiques dans un support clair.",
    tools: ["VirtualBox", "Documentation"],
  },
  "veille-informatique": {
    title: "Veille informatique",
    shortDescription: "Suivi de l'actualité technologique et synthèse des évolutions importantes.",
    image: "../assets/projet-ecole-placeholder.svg",
    imageAlt: "Apercu du projet veille informatique",
    request: "Mettre en place une veille reguliere sur des sujets informatiques pour identifier les tendances utiles.",
    response: "J'ai réalisé une veille structurée avec collecte de sources, tri des informations et rédaction d'une synthèse exploitable.",
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

  const requestPdfElement = document.querySelector("[data-work-request-pdf]");
  if (requestPdfElement) {
    const pdfSources = work.requestPdfCandidates || (work.requestPdf ? [work.requestPdf] : []);

    if (pdfSources.length === 0) {
      requestPdfElement.innerHTML = "";
    } else {
      const source = pdfSources[0].replace(/ /g, '%20');
      requestPdfElement.innerHTML = `<iframe src="${source}" width="100%" height="480" style="border:1px solid #e0e0e0; border-radius:8px;" title="PDF viewer" onerror="this.parentElement.innerHTML='<p style=\"color:#d32f2f;\">PDF non disponible</p>'"></iframe><p style="margin-top:10px;"><a href="${source}" target="_blank" rel="noopener">↓ Ouvrir le PDF en plein écran</a></p>`;
    }
  }

  const responsePdfElement = document.querySelector("[data-work-response-pdf]");
  if (responsePdfElement) {
    const pdfSources = work.responsePdfCandidates || (work.responsePdf ? [work.responsePdf] : []);

    if (pdfSources.length === 0) {
      responsePdfElement.innerHTML = "";
    } else {
      const source = pdfSources[0].replace(/ /g, '%20');
      responsePdfElement.innerHTML = `<iframe src="${source}" width="100%" height="480" style="border:1px solid #e0e0e0; border-radius:8px;" title="PDF viewer" onerror="this.parentElement.innerHTML='<p style=\"color:#d32f2f;\">PDF non disponible</p>'"></iframe><p style="margin-top:10px;"><a href="${source}" target="_blank" rel="noopener">↓ Ouvrir le PDF en plein écran</a></p>`;
    }
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
