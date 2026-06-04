import React, { createContext, useState, useContext } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Translations object with all content
const translations = {
  fr: {
    // Navbar translations
    navbar: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      education: 'Éducation',
      projects: 'Projets',
      contact: 'Contact',
      hireMe: 'Embauchez-moi',
      subtitle: 'Développeur Junior'
    },

    // Hero section translations
    hero: {
      welcome: '<Bienvenue>',
      title: 'Je suis',
      name: 'Mulho MABIALA',
      role: '{Développeur Junior}',
      description: "Architecte d'expériences numériques luxueuses, spécialisé dans la création d'applications web d'exception avec une maîtrise technique absolue et un sens aigu du raffinement.",
      contactButton: 'Me Contacter',
      downloadCV: 'Télécharger CV',
      scrollDown: 'Découvrir',
      codeComment: '// Excellence  & Expertise de Mulho MABIALA',
      expertise: {
        frontend: 'frontend',
        backend: 'backend',
        level: 'niveau',
        levelValue: 'Junior Developer',
        experience: 'expérience',
        experienceValue: '3+ années',
        projects: 'projets',
        projectsValue: '12+ réalisations'
      },
      consoleLog: 'Créons l\'excellence',
      availableStatus: 'Disponible pour des opportunités'
    },

    // About section translations
    about: {
      tag: '<About>',
      title: 'Qui Je Suis',
      greeting: 'Bonjour ! Je suis',
      name: 'Mulho MABIALA',
      description: "Je suis un individu hautement motivé et polyvalent, toujours prêt à relever de nouveaux défis. Animé par une passion pour l'apprentissage, je m'engage à fournir des résultats exceptionnels. Avec une attitude positive et un esprit de croissance, je suis impatient de faire des contributions significatives et d'atteindre un succès remarquable.",
      keySkillsTitle: 'Compétences Clés',
      skills: {
        frontend: 'Front End Development',
        backend: 'Back End Development',
        problemSolving: 'Problem Solving',
        teamManagement: 'Team Management'
      },
      infoCards: {
        name: 'Nom',
        fullName: 'MABIALA - Mulho',
        otherNames: 'Ibrahim - Trésor',
        email: 'Email',
        emailValue: 'imulhomabiala@gmail.com',
        phone: 'Téléphone',
        phoneValue: '+221 78 730 87 06',
        whatsapp: 'WhatsApp: +242 05 553 08 52',
        location: 'Localisation',
        locationValue: 'Dakar, Sénégal',
        availability: 'Disponible pour le travail',
        birthday: 'Date de naissance',
        birthdayValue: '10 Octobre 2002'
      },
      interestsTitle: 'Centres d\'intérêt',
      interests: {
        music: 'Musique',
        travel: 'Voyage',
        cinema: 'Cinéma',
        sports: 'Sports'
      },
      badge: 'Fullstack Dev'
    },

    // Skills section translations
    skills: {
      tag: '<Skills>',
      title: 'Mes Compétences',
      subtitle: 'Un aperçu de mes compétences techniques et outils que je maîtrise',
      mainSkillsTitle: 'Compétences Principales',
      categories: {
        all: 'Tout',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        design: 'Design',
        tools: 'Outils & DevOps'
      },
      levels: {
        expert: 'Expert',
        advanced: 'Avancé',
        intermediate: 'Intermédiaire'
      }
    },

    // Projects section translations
    projects: {
      tag: '<Projets>',
      title: 'Mes travaux récents',
      subtitle: 'Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et mon expertise en développement web.',
      filters: {
        all: 'Tous les projets',
        fullstack: 'Fullstack',
        frontend: 'Frontend',
        backend: 'Backend'
      },
      featured: 'En vedette',
      liveDemo: 'Démo en direct',
      viewAll: 'Voir tous les projets',
      viewDetails: 'Voir les détails',
      allTags: 'Toutes les techs',
      challengesTitle: 'Défis techniques',
      techStack: 'Stack technique',
      projectsList: [
        {
          title: 'ECOHUB - Plateforme de Signalement Urbain',
          description: "Permettre aux citoyens de signaler facilement les problèmes de leur quartier et aider les autorités à prioriser et agir rapidement.",
          longDescription: "ECOHUB est une plateforme civic-tech fullstack permettant aux citoyens de signaler des problèmes urbains (voirie, éclairage, déchets…) géolocalisés. Les autorités disposent d'un tableau de bord pour prioriser les interventions. Le projet intègre une authentification sécurisée, des notifications en temps réel et une carte interactive.",
          challenges: ["Intégration d'une carte interactive avec géolocalisation en temps réel", "Architecture REST sécurisée avec JWT et gestion des rôles", "Optimisation des requêtes MongoDB pour les données géospatiales"]
        },
        {
          title: 'Plateforme de commerce électronique',
          description: "Une plateforme de commerce électronique complète avec gestion des produits, panier d'achat et traitement des paiements.",
          longDescription: "Une boutique e-commerce complète avec catalogue produits, système de panier, gestion des commandes et interface d'administration. Développée avec HTML, PHP, SQL et Tailwind CSS.",
          challenges: ["Conception d'un système de panier persistant en session PHP", "Sécurisation des paiements et validation des formulaires", "Design responsive adapté à tous les écrans"]
        },
        {
          title: 'Dashboard Analytics',
          description: "Tableau de bord d'analyse avec graphiques interactifs et visualisation de données en temps réel.",
          longDescription: "Un dashboard analytique interactif avec visualisations en temps réel. Utilise Chart.js pour les graphiques et Firebase pour les données en direct.",
          challenges: ["Synchronisation temps réel avec Firebase", "Performance avec de grands jeux de données", "Design responsive des graphiques"]
        },
        {
          title: 'API REST Authentification',
          description: 'API robuste avec authentification JWT, gestion des rôles et sécurité avancée.',
          longDescription: "Une API REST sécurisée construite avec Node.js et Express, intégrant l'authentification JWT, la gestion des rôles utilisateur et les bonnes pratiques de sécurité.",
          challenges: ["Implémentation du refresh token et révocation des sessions", "Protection contre les attaques CSRF et injection NoSQL", "Documentation complète de l'API avec Swagger"]
        },
        {
          title: 'Portfolio Personnel',
          description: 'Site portfolio moderne avec animations fluides et design responsive.',
          longDescription: "Ce portfolio — que vous consultez en ce moment ! — est construit avec React et Tailwind CSS. Il intègre un système de thèmes, un changement de langue FR/EN, des animations au scroll et bien plus.",
          challenges: ["Système de thème couleur dynamique via CSS variables", "Animations performantes sans bibliothèque externe", "Support bilingue complet FR/EN"]
        },
        {
          title: 'Application de Cinéma',
          description: 'Une application de cinéma où vous pouvez présenter vos films ou émissions de télévision préférés.',
          longDescription: "Application React permettant de naviguer dans un catalogue de films et séries. Utilise les hooks React pour la gestion d'état et Tailwind CSS pour l'interface.",
          challenges: ["Gestion efficace de l'état avec les hooks React", "Interface responsive et fluide", "Filtrage et recherche en temps réel"]
        },
        {
          title: 'Todo List',
          description: 'Une application de gestion de tâches moderne et intuitive avec une interface élégante créée avec React et Tailwind CSS.',
          longDescription: "Application de gestion de tâches complète avec création, édition, suppression et filtrage des tâches. Interface épurée et animations soignées.",
          challenges: ["Persistance des données avec localStorage", "Animations fluides pour les interactions", "Filtrage multi-critères des tâches"]
        },
        {
          title: 'NBarts - Galerie d\'Arts',
          description: 'Une galerie d\'arts en ligne élégante et immersive permettant de découvrir et d\'explorer des œuvres artistiques variées.',
          longDescription: "NBarts est une galerie d'art en ligne développée avec React et TypeScript. Elle offre une expérience immersive pour découvrir des œuvres artistiques variées avec des transitions élégantes.",
          challenges: ["Galerie photo responsive avec grid CSS avancé", "Transitions et animations immersives", "Optimisation du chargement des images"]
        },
        {
          title: 'Zolaa - Plateforme Dynamique',
          description: 'Une plateforme web complète et dynamique offrant une expérience utilisateur moderne et fluide.',
          longDescription: "Zolaa est une plateforme web dynamique et complète, accessible sur zolaa.tech. Elle offre une expérience utilisateur moderne avec une interface soignée et des fonctionnalités avancées.",
          challenges: ["Architecture fullstack scalable", "Performance et optimisation", "Interface utilisateur moderne et réactive"]
        },
        {
          title: "Mia Dreams - Plateforme E-commerce d'Habits",
          description: "Une plateforme e-commerce fullstack de vente d'habits avec paiement intégré, gestion des médias et authentification sécurisée.",
          longDescription: "Mia Dreams est une plateforme e-commerce complète dédiée à la vente d'habits. Elle intègre un système de paiement via CinePay, une gestion des médias avec Cloudinary, une authentification sécurisée par JWT et un backend robuste Node.js/Express avec MongoDB. L'interface est construite avec React et Vite pour des performances optimales.",
          challenges: ["Intégration du système de paiement CinePay pour les transactions sécurisées", "Gestion des médias avec Cloudinary pour l'upload et l'optimisation des images", "Déploiement avec Passenger sur serveur dédié"]
        },
        {
          title: 'FM Cakes - Pâtisserie en Ligne',
          description: "Site e-commerce d'une pâtisserie permettant de commander des gâteaux d'anniversaire personnalisés en ligne.",
          longDescription: "FM Cakes est le site officiel d'une pâtisserie spécialisée dans les gâteaux d'anniversaire. Les clients peuvent parcourir le catalogue, personnaliser et commander leurs gâteaux en ligne. Le projet intègre une gestion des médias via Cloudinary, une authentification JWT et un backend Node.js/Express avec MongoDB pour la gestion des commandes.",
          challenges: ["Gestion des commandes personnalisées avec options de personnalisation", "Upload et optimisation des visuels des gâteaux avec Cloudinary", "Déploiement avec Passenger sur serveur dédié"]
        },
        {
          title: 'BTP - Site Entreprise de Construction',
          description: "Site web fullstack d'une entreprise de BTP présentant ses services, réalisations et permettant la prise de contact.",
          longDescription: "Ce site est la vitrine officielle d'une entreprise de BTP (Bâtiment et Travaux Publics). Il présente les services, les projets réalisés et les équipes. Le backend Node.js/Express avec MongoDB gère le contenu dynamique et les médias sont hébergés sur Cloudinary. L'authentification JWT sécurise l'interface d'administration.",
          challenges: ["Gestion dynamique des projets et réalisations via le backend", "Upload et optimisation des photos de chantiers avec Cloudinary", "Interface d'administration sécurisée avec JWT"]
        },
        {
          title: 'Agence Multi-Service - Site Vitrine',
          description: "Site web fullstack d'une agence multi-service présentant ses différentes prestations et permettant la gestion du contenu.",
          longDescription: "Ce site est la vitrine officielle d'une agence proposant plusieurs types de services. Il présente les offres, les réalisations et les équipes avec un design moderne. Le backend Node.js/Express avec MongoDB gère le contenu dynamique, les médias sont hébergés sur Cloudinary et l'accès à l'administration est sécurisé via JWT.",
          challenges: ["Mise en page multi-services claire et intuitive", "Gestion dynamique du contenu via le backend", "Upload et optimisation des médias avec Cloudinary"]
        }
      ]
    },

    // Testimonials section translations
    testimonials: {
      tag: '<Témoignages>',
      title: 'Ce qu\'ils disent',
      subtitle: 'Les avis de ceux qui ont travaillé ou collaboré avec moi.',
      list: [
        {
          name: 'Instructeur GoMyCode',
          role: 'Formateur — GoMyCode Bootcamp',
          text: 'Mulho s\'est démarqué dès le début du bootcamp par sa rigueur et sa curiosité. Il assimile rapidement les concepts complexes et livre un code propre et bien structuré. Un développeur avec un vrai potentiel.',
          rating: 5
        },
        {
          name: 'Collaborateur ISI',
          role: 'Étudiant — Institut Supérieur d\'Informatique',
          text: 'Travailler avec Mulho sur nos projets universitaires a été une excellente expérience. Il est fiable, prend des initiatives et apporte toujours des solutions créatives aux problèmes techniques.',
          rating: 5
        },
        {
          name: 'Client Freelance',
          role: 'Entrepreneur — Dakar',
          text: 'Mulho a développé notre site vitrine avec un professionnalisme remarquable. Il a bien compris nos besoins, respecté les délais et le résultat final dépasse nos attentes. Je le recommande vivement.',
          rating: 5
        }
      ]
    },

    // Blog section translations
    blog: {
      tag: '<Blog>',
      title: 'Mes Articles',
      subtitle: 'Partage de connaissances, tutoriels et réflexions sur le développement web.',
      allTags: 'Tous',
      readMore: 'Lire l\'article',
      articles: [
        {
          title: 'Construire une API REST sécurisée avec Node.js et JWT',
          excerpt: 'Dans cet article, je vous guide pas à pas dans la création d\'une API REST robuste avec Node.js, Express et une authentification par tokens JWT.',
          tags: ['Node.js', 'JWT', 'Backend'],
          date: 'Mars 2025',
          readTime: '8 min',
          emoji: '🔐',
          sections: [
            { title: '1. Mise en place du projet', content: 'On commence par initialiser un projet Node.js avec Express. On installe les dépendances nécessaires : jsonwebtoken, bcryptjs, mongoose et dotenv pour les variables d\'environnement.', code: 'npm init -y\nnpm install express jsonwebtoken bcryptjs mongoose dotenv' },
            { title: '2. Création du middleware d\'authentification', content: 'Le middleware JWT vérifie le token dans le header Authorization à chaque requête protégée. Si le token est invalide ou expiré, on renvoie une erreur 401.', code: 'const jwt = require("jsonwebtoken");\nconst auth = (req, res, next) => {\n  const token = req.header("Authorization")?.replace("Bearer ", "");\n  if (!token) return res.status(401).json({ message: "Accès refusé" });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch { res.status(401).json({ message: "Token invalide" }); }\n};\nmodule.exports = auth;' },
            { title: '3. Gestion des rôles', content: 'Pour gérer les rôles (admin, user), on stocke le rôle dans le payload du token et on crée un middleware supplémentaire qui vérifie ce rôle avant d\'autoriser l\'accès à certaines routes.' }
          ]
        },
        {
          title: 'React Hooks : maîtriser useState, useEffect et les hooks personnalisés',
          excerpt: 'Les hooks React ont révolutionné la façon dont on écrit des composants. Je vous explique comment exploiter leur plein potentiel et créer vos propres hooks réutilisables.',
          tags: ['React.js', 'Frontend'],
          date: 'Fév 2025',
          readTime: '6 min',
          emoji: '⚛️',
          sections: [
            { title: 'useState : gérer l\'état local', content: 'useState permet de déclarer une variable d\'état dans un composant fonctionnel. Chaque mise à jour de l\'état déclenche un re-render du composant.', code: 'const [count, setCount] = useState(0);\n// Mise à jour fonctionnelle (recommandée)\nsetCount(prev => prev + 1);' },
            { title: 'useEffect : effets de bord', content: 'useEffect gère les opérations asynchrones, les abonnements et les nettoyages. Le tableau de dépendances contrôle quand l\'effet se déclenche.', code: 'useEffect(() => {\n  const controller = new AbortController();\n  fetch("/api/data", { signal: controller.signal })\n    .then(r => r.json())\n    .then(setData);\n  return () => controller.abort(); // Nettoyage\n}, []);' },
            { title: 'Hook personnalisé : useLocalStorage', content: 'Un hook personnalisé encapsule de la logique réutilisable. Exemple : un hook qui synchronise l\'état avec localStorage.', code: 'function useLocalStorage(key, initial) {\n  const [value, setValue] = useState(\n    () => JSON.parse(localStorage.getItem(key)) ?? initial\n  );\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  return [value, setValue];\n}' }
          ]
        },
        {
          title: 'MongoDB Aggregation Pipeline : requêtes avancées expliquées',
          excerpt: 'Le pipeline d\'agrégation MongoDB est un outil puissant souvent sous-estimé. Cet article vous montre comment l\'utiliser pour des requêtes complexes et des analyses de données.',
          tags: ['MongoDB', 'Backend'],
          date: 'Jan 2025',
          readTime: '10 min',
          emoji: '🍃',
          sections: [
            { title: 'Qu\'est-ce que le pipeline d\'agrégation ?', content: 'Le pipeline d\'agrégation transforme les documents en passant par plusieurs étapes ($match, $group, $sort, $project…). C\'est plus puissant que de simples requêtes find().' },
            { title: 'Exemple : statistiques par catégorie', content: 'Ici on groupe les commandes par statut et on calcule le total et la moyenne par groupe.', code: 'db.orders.aggregate([\n  { $match: { date: { $gte: new Date("2025-01-01") } } },\n  { $group: {\n    _id: "$status",\n    total: { $sum: "$amount" },\n    count: { $sum: 1 },\n    avgAmount: { $avg: "$amount" }\n  }},\n  { $sort: { total: -1 } }\n]);' },
            { title: '$lookup : jointures entre collections', content: 'L\'étape $lookup permet de faire des jointures entre collections, similaire à un JOIN SQL. Très utile pour enrichir des documents avec des données liées.' }
          ]
        },
        {
          title: 'Tailwind CSS : astuces avancées pour des interfaces pro',
          excerpt: 'Au-delà des classes utilitaires de base, Tailwind CSS offre des fonctionnalités puissantes pour créer des interfaces professionnelles et des composants réutilisables.',
          tags: ['Tailwind CSS', 'Frontend'],
          date: 'Déc 2024',
          readTime: '7 min',
          emoji: '🎨',
          sections: [
            { title: 'CSS Variables avec Tailwind', content: 'Tailwind se combine parfaitement avec les custom properties CSS pour créer des thèmes dynamiques modifiables à l\'exécution.', code: '/* tailwind.config.js */\ntheme: {\n  extend: {\n    colors: {\n      accent: "rgba(var(--accent-rgb), <alpha-value>)"\n    }\n  }\n}' },
            { title: 'Variants personnalisés', content: 'Créez vos propres variants pour des états spécifiques (ex: data-attributes, group-hover imbriqués, ariaBooleans) pour des interactions complexes sans CSS supplémentaire.' },
            { title: '@apply pour composants réutilisables', content: 'La directive @apply permet de combiner des utilitaires Tailwind dans une classe CSS personnalisée, idéal pour les composants qui reviennent souvent.', code: '.btn-primary {\n  @apply px-6 py-3 rounded-full font-bold\n         bg-amber-500 text-black\n         hover:bg-amber-400 transition-all;\n}' }
          ]
        },
        {
          title: 'Déployer une app MERN sur Vercel et Render gratuitement',
          excerpt: 'Un guide complet pour déployer votre stack MERN en production sans payer : frontend sur Vercel, backend sur Render, base de données sur MongoDB Atlas.',
          tags: ['Fullstack', 'Déploiement'],
          date: 'Nov 2024',
          readTime: '12 min',
          emoji: '🚀',
          sections: [
            { title: '1. MongoDB Atlas — base de données cloud', content: 'Créez un compte gratuit sur MongoDB Atlas, créez un cluster M0 (gratuit), ajoutez votre IP à la whitelist et récupérez la connection string.' },
            { title: '2. Backend sur Render', content: 'Connectez votre repo GitHub à Render. Choisissez "Web Service", définissez les variables d\'environnement (MONGODB_URI, JWT_SECRET) et deployez. Le plan gratuit convient parfaitement.', code: '# render.yaml\nservices:\n  - type: web\n    name: mon-api\n    env: node\n    buildCommand: npm install\n    startCommand: node server.js' },
            { title: '3. Frontend sur Vercel', content: 'Importez votre repo React sur Vercel. Définissez VITE_API_URL pointant vers votre backend Render. Vercel détecte automatiquement Vite et configure le build.' }
          ]
        },
        {
          title: 'Git & GitHub : workflow professionnel pour développeurs',
          excerpt: 'Branching, rebasing, pull requests, conventional commits… Je partage le workflow Git que j\'utilise sur tous mes projets pour maintenir un historique propre.',
          tags: ['Git', 'Outils'],
          date: 'Oct 2024',
          readTime: '9 min',
          emoji: '🌿',
          sections: [
            { title: 'Conventional Commits', content: 'Les conventional commits standardisent les messages de commit pour automatiser le changelog et faciliter la lecture de l\'historique.', code: '# Format\n<type>(<scope>): <description>\n\n# Exemples\nfeat(auth): add JWT refresh token\nfix(ui): correct mobile navbar overflow\ndocs: update README with deploy guide' },
            { title: 'Stratégie de branching', content: 'J\'utilise une stratégie simple : main (production stable), develop (intégration), feature/xxx (nouvelles fonctionnalités), fix/xxx (corrections). Chaque feature fait l\'objet d\'une Pull Request.' },
            { title: 'Git aliases utiles', content: 'Des alias Git pour accélérer le workflow quotidien.', code: 'git config --global alias.lg "log --oneline --graph --decorate"\ngit config --global alias.st "status -s"\ngit config --global alias.undo "reset HEAD~1 --soft"' }
          ]
        }
      ]
    },

    // Chatbot translations
    chatbot: {
      title: 'Assistant de Mulho',
      online: 'En ligne',
      placeholder: 'Posez votre question…',
    },

    // Blog extra keys
    blogExtra: {
      articleEnd: 'Merci d\'avoir lu cet article ! Pour en savoir plus ou discuter du sujet, n\'hésitez pas à me contacter directement.',
      close: 'Fermer',
    },

    // Education section translations
    education: {
      tag: '<Éducation>',
      title: 'Mon Parcours Scolaire',
      subtitle: 'Formation et diplômes',
      items: [
        {
          degree: 'Licence 3 - Génie Logiciel (GL)',
          institution: 'Institut Supérieur d\'Informatique (ISI)',
          year: '2025 - 2026',
          description: 'Formation avancée en génie logiciel avec focus sur développement d\'applications, architecture logicielle et gestion de projets. Année en cours. Dakar, Sénégal.'
        },
        {
          degree: 'Certification Full Stack Developer',
          institution: 'GoMyCode Bootcamp',
          year: 'Août 2025 - Janvier 2026',
          description: 'Certification intensive de 6 mois en développement web fullstack (MERN, React, Node.js, MongoDB).'
        },
        {
          degree: 'Licence 2 - Génie Logiciel (GL)',
          institution: 'Institut Supérieur d\'Informatique (ISI)',
          year: '2024 - 2025',
          description: 'Formation en génie logiciel avec approfondissement en programmation orientée objet, bases de données et développement web.'
        },
        {
          degree: 'Licence 1 - Génie Logiciel (GL)',
          institution: 'Institut Supérieur d\'Informatique (ISI)',
          year: '2023 - 2024',
          description: 'Première année de licence en génie logiciel. Fondamentaux de la programmation, algorithmique et introduction au développement.'
        },
        {
          degree: 'Baccalauréat Scientifique',
          institution: 'École Privée Louis Grégory',
          year: '2021 - 2022',
          description: 'Spécialité Mathématiques et Sciences Physiques. Pointe-Noire, République du Congo.'
        }
      ]
    },

    // Contact section translations
    contact: {
      tag: '<Contact>',
      title: 'Parlons-en',
      subtitle: 'si vous voulez en savoir plus sur',
      me: 'moi',
      info: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        locationValue: 'Dakar, Sénégal'
      },
      socialTitle: 'Suivez-moi ou contactez-moi',
      form: {
        nameLabel: 'Nom et prénom*',
        namePlaceholder: 'Mulho MABIALA',
        emailLabel: 'Adresse email*',
        emailPlaceholder: 'imulhomabiala@gmail.com',
        phoneLabel: 'Numéro de téléphone',
        phonePlaceholder: '+221 78 730 87 06',
        subjectLabel: 'Sujet',
        subjectPlaceholder: 'Enquête sur le projet',
        messageLabel: 'Écrivez votre message*',
        messagePlaceholder: 'Bonjour, j\'aimerais parler de...',
        sendButton: 'Envoyer le message',
        sending: 'Envoi en cours...',
        successMessage: 'Message envoyé avec succès!',
        errorMessage: 'Erreur lors de l\'envoi du message.'
      },
      followMe: 'Suivez-moi'
    },

    // Footer translations
    footer: {
      description: 'Développeur Fullstack passionné, créant des expériences web modernes et innovantes.',
      navigationTitle: 'Navigation',
      followTitle: 'Suivez-moi',
      copyright: 'Tous droits réservés.',
      createdBy: 'Créé par',
      navigation: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Éducation',
        projects: 'Projects',
        contact: 'Contact'
      }
    }
  },

  en: {
    // Navbar translations
    navbar: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
      hireMe: 'Hire me',
      subtitle: 'Junior Developer'
    },

    // Hero section translations
    hero: {
      welcome: '<Welcome>',
      title: 'I am',
      name: 'Mulho MABIALA',
      role: '{Junior Developer}',
      description: 'Architect of luxurious digital experiences, specializing in creating exceptional web applications with absolute technical mastery and a keen sense of refinement.',
      contactButton: 'Contact Me',
      downloadCV: 'Download CV',
      scrollDown: 'Discover',
      codeComment: '// Excellence & Expertise of Mulho MABIALA',
      expertise: {
        frontend: 'frontend',
        backend: 'backend',
        level: 'level',
        levelValue: 'Junior Developer',
        experience: 'experience',
        experienceValue: '3+ years',
        projects: 'projects',
        projectsValue: '12+ achievements'
      },
      consoleLog: 'Let\'s create excellence',
      availableStatus: 'Available for opportunities'
    },

    // About section translations
    about: {
      tag: '<About>',
      title: 'Who I Am',
      greeting: 'Hello! I am',
      name: 'Mulho MABIALA',
      description: 'I am a highly motivated and versatile individual, always ready to take on new challenges. Driven by a passion for learning, I am committed to delivering exceptional results. With a positive attitude and a growth mindset, I am eager to make meaningful contributions and achieve remarkable success.',
      keySkillsTitle: 'Key Skills',
      skills: {
        frontend: 'Front End Development',
        backend: 'Back End Development',
        problemSolving: 'Problem Solving',
        teamManagement: 'Team Management'
      },
      infoCards: {
        name: 'Name',
        fullName: 'MABIALA - Mulho',
        otherNames: 'Ibrahim - Trésor',
        email: 'Email',
        emailValue: 'imulhomabiala@gmail.com',
        phone: 'Phone',
        phoneValue: '+221 78 730 87 06',
        whatsapp: 'WhatsApp: +242 05 553 08 52',
        location: 'Location',
        locationValue: 'Dakar, Senegal',
        availability: 'Available for work',
        birthday: 'Date of birth',
        birthdayValue: 'October 10, 2002'
      },
      interestsTitle: 'Interests',
      interests: {
        music: 'Music',
        travel: 'Travel',
        cinema: 'Cinema',
        sports: 'Sports'
      },
      badge: 'Fullstack Dev'
    },

    // Skills section translations
    skills: {
      tag: '<Skills>',
      title: 'My Skills',
      subtitle: 'An overview of my technical skills and tools I master',
      mainSkillsTitle: 'Core Skills',
      categories: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        design: 'Design',
        tools: 'Tools & DevOps'
      },
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate'
      }
    },

    // Projects section translations
    projects: {
      tag: '<Projects>',
      title: 'My Recent Work',
      subtitle: 'Here are some of my recent projects that showcase my skills and expertise in web development.',
      filters: {
        all: 'All Projects',
        fullstack: 'Fullstack',
        frontend: 'Frontend',
        backend: 'Backend'
      },
      featured: 'Featured',
      liveDemo: 'Live Demo',
      viewAll: 'View All Projects',
      viewDetails: 'View Details',
      allTags: 'All techs',
      challengesTitle: 'Technical Challenges',
      techStack: 'Tech Stack',
      projectsList: [
        {
          title: 'ECOHUB - Urban Reporting Platform',
          description: 'Enable citizens to easily report neighborhood issues and help authorities prioritize and act quickly.',
          longDescription: 'ECOHUB is a fullstack civic-tech platform allowing citizens to report geolocated urban issues (roads, lighting, waste…). Authorities have a dashboard to prioritize interventions. The project includes secure authentication, real-time notifications and an interactive map.',
          challenges: ['Integration of an interactive map with real-time geolocation', 'Secure REST architecture with JWT and role management', 'MongoDB query optimization for geospatial data']
        },
        {
          title: 'E-commerce Platform',
          description: 'A complete e-commerce platform with product management, shopping cart, and payment processing.',
          longDescription: 'A complete e-commerce shop with product catalog, cart system, order management and admin interface. Built with HTML, PHP, SQL and Tailwind CSS.',
          challenges: ['Building a persistent cart system with PHP sessions', 'Payment security and form validation', 'Responsive design for all screen sizes']
        },
        {
          title: 'Analytics Dashboard',
          description: 'Analytics dashboard with interactive charts and real-time data visualization.',
          longDescription: 'An interactive analytics dashboard with real-time visualizations. Uses Chart.js for charts and Firebase for live data.',
          challenges: ['Real-time Firebase synchronization', 'Performance with large datasets', 'Responsive chart design']
        },
        {
          title: 'REST API Authentication',
          description: 'Robust API with JWT authentication, role management, and advanced security.',
          longDescription: 'A secure REST API built with Node.js and Express, integrating JWT authentication, user role management and security best practices.',
          challenges: ['Refresh token implementation and session revocation', 'CSRF and NoSQL injection protection', 'Complete API documentation with Swagger']
        },
        {
          title: 'Personal Portfolio',
          description: 'Modern portfolio website with smooth animations and responsive design.',
          longDescription: 'This portfolio — which you are viewing right now! — is built with React and Tailwind CSS. It features a color theme system, FR/EN language toggle, scroll animations and much more.',
          challenges: ['Dynamic color theme system via CSS variables', 'Performant animations without external library', 'Complete FR/EN bilingual support']
        },
        {
          title: 'Movie Cinema Application',
          description: 'A movie cinema application where you can showcase your favorite movies and TV shows.',
          longDescription: 'React application for browsing a movie and series catalog. Uses React hooks for state management and Tailwind CSS for the UI.',
          challenges: ['Efficient state management with React hooks', 'Responsive and fluid interface', 'Real-time filtering and search']
        },
        {
          title: 'Todo List',
          description: 'A modern and intuitive task management application with an elegant interface built with React and Tailwind CSS.',
          longDescription: 'Complete task management app with task creation, editing, deletion and filtering. Clean interface with polished animations.',
          challenges: ['Data persistence with localStorage', 'Smooth animations for interactions', 'Multi-criteria task filtering']
        },
        {
          title: 'NBarts - Art Gallery',
          description: 'An elegant and immersive online art gallery for discovering and exploring a variety of artistic works.',
          longDescription: 'NBarts is an online art gallery built with React and TypeScript. It offers an immersive experience for discovering diverse artworks with elegant transitions.',
          challenges: ['Responsive photo gallery with advanced CSS grid', 'Immersive transitions and animations', 'Image loading optimization']
        },
        {
          title: 'Zolaa - Dynamic Platform',
          description: 'A complete and dynamic web platform offering a modern and seamless user experience.',
          longDescription: 'Zolaa is a complete and dynamic web platform, accessible at zolaa.tech. It offers a modern user experience with a polished interface and advanced features.',
          challenges: ['Scalable fullstack architecture', 'Performance and optimization', 'Modern and reactive user interface']
        },
        {
          title: 'Mia Dreams - Clothing E-commerce Platform',
          description: 'A fullstack clothing e-commerce platform with integrated payment, media management and secure authentication.',
          longDescription: 'Mia Dreams is a complete e-commerce platform dedicated to selling clothes. It integrates a CinePay payment system, Cloudinary media management, JWT secure authentication and a robust Node.js/Express backend with MongoDB. The interface is built with React and Vite for optimal performance.',
          challenges: ['CinePay payment system integration for secure transactions', 'Cloudinary media management for image upload and optimization', 'Passenger deployment on dedicated server']
        },
        {
          title: 'FM Cakes - Online Bakery',
          description: 'E-commerce website for a bakery allowing customers to order custom birthday cakes online.',
          longDescription: 'FM Cakes is the official website of a bakery specialized in birthday cakes. Customers can browse the catalog, customize and order their cakes online. The project integrates Cloudinary media management, JWT authentication and a Node.js/Express backend with MongoDB for order management.',
          challenges: ['Custom order management with personalization options', 'Cake image upload and optimization with Cloudinary', 'Passenger deployment on dedicated server']
        },
        {
          title: 'BTP - Construction Company Website',
          description: 'Fullstack website for a construction company showcasing its services, projects and enabling contact.',
          longDescription: 'This site is the official showcase of a BTP (Building and Public Works) company. It presents services, completed projects and teams. The Node.js/Express backend with MongoDB manages dynamic content and media is hosted on Cloudinary. JWT authentication secures the admin interface.',
          challenges: ['Dynamic management of projects and achievements via the backend', 'Construction site photo upload and optimization with Cloudinary', 'Secure admin interface with JWT']
        },
        {
          title: 'Multi-Service Agency - Showcase Website',
          description: 'Fullstack website for a multi-service agency presenting its various offerings and enabling content management.',
          longDescription: 'This site is the official showcase of an agency offering multiple types of services. It presents offers, achievements and teams with a modern design. The Node.js/Express backend with MongoDB manages dynamic content, media is hosted on Cloudinary and admin access is secured via JWT.',
          challenges: ['Clear and intuitive multi-service layout', 'Dynamic content management via the backend', 'Media upload and optimization with Cloudinary']
        }
      ]
    },

    // Testimonials section translations
    testimonials: {
      tag: '<Testimonials>',
      title: 'What They Say',
      subtitle: 'Feedback from people who have worked or collaborated with me.',
      list: [
        {
          name: 'GoMyCode Instructor',
          role: 'Trainer — GoMyCode Bootcamp',
          text: 'Mulho stood out from the start of the bootcamp with his rigor and curiosity. He quickly absorbs complex concepts and delivers clean, well-structured code. A developer with real potential.',
          rating: 5
        },
        {
          name: 'ISI Collaborator',
          role: 'Student — Higher Institute of Information Technology',
          text: 'Working with Mulho on our university projects was an excellent experience. He is reliable, takes initiative and always brings creative solutions to technical problems.',
          rating: 5
        },
        {
          name: 'Freelance Client',
          role: 'Entrepreneur — Dakar',
          text: 'Mulho developed our showcase website with remarkable professionalism. He understood our needs, met deadlines and the final result exceeds our expectations. I highly recommend him.',
          rating: 5
        }
      ]
    },

    // Blog section translations
    blog: {
      tag: '<Blog>',
      title: 'My Articles',
      subtitle: 'Knowledge sharing, tutorials and thoughts on web development.',
      allTags: 'All',
      readMore: 'Read article',
      articles: [
        {
          title: 'Building a Secure REST API with Node.js and JWT',
          excerpt: 'In this article, I guide you step by step through creating a robust REST API with Node.js, Express and JWT token authentication. We cover role management, refresh tokens and security best practices.',
          tags: ['Node.js', 'JWT', 'Backend'],
          date: 'Mar 2025',
          readTime: '8 min',
          emoji: '🔐',
          sections: [
            { title: '1. Project Setup', content: 'Start by initializing a Node.js project with Express. Install required dependencies: jsonwebtoken, bcryptjs, mongoose and dotenv for environment variables.', code: 'npm init -y\nnpm install express jsonwebtoken bcryptjs mongoose dotenv' },
            { title: '2. JWT Auth Middleware', content: 'The JWT middleware verifies the token in the Authorization header on each protected request. If the token is invalid or expired, it returns a 401 error.', code: 'const jwt = require("jsonwebtoken");\nconst auth = (req, res, next) => {\n  const token = req.header("Authorization")?.replace("Bearer ", "");\n  if (!token) return res.status(401).json({ message: "Access denied" });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch { res.status(401).json({ message: "Invalid token" }); }\n};\nmodule.exports = auth;' },
            { title: '3. Role Management', content: 'To manage roles (admin, user), store the role in the token payload and create an additional middleware that checks this role before granting access to certain routes.' }
          ]
        },
        {
          title: 'React Hooks: Mastering useState, useEffect and Custom Hooks',
          excerpt: 'React hooks have revolutionized the way we write components. I explain how to leverage their full potential and create your own reusable hooks.',
          tags: ['React.js', 'Frontend'],
          date: 'Feb 2025',
          readTime: '6 min',
          emoji: '⚛️',
          sections: [
            { title: 'useState: local state management', content: 'useState lets you declare a state variable in a functional component. Each state update triggers a re-render of the component.', code: 'const [count, setCount] = useState(0);\n// Functional update (recommended)\nsetCount(prev => prev + 1);' },
            { title: 'useEffect: side effects', content: 'useEffect handles async operations, subscriptions and cleanups. The dependency array controls when the effect runs.', code: 'useEffect(() => {\n  const controller = new AbortController();\n  fetch("/api/data", { signal: controller.signal })\n    .then(r => r.json())\n    .then(setData);\n  return () => controller.abort(); // Cleanup\n}, []);' },
            { title: 'Custom hook: useLocalStorage', content: 'A custom hook encapsulates reusable logic. Example: a hook that syncs state with localStorage.', code: 'function useLocalStorage(key, initial) {\n  const [value, setValue] = useState(\n    () => JSON.parse(localStorage.getItem(key)) ?? initial\n  );\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  return [value, setValue];\n}' }
          ]
        },
        {
          title: 'MongoDB Aggregation Pipeline: Advanced Queries Explained',
          excerpt: 'The MongoDB aggregation pipeline is a powerful tool often underestimated. This article shows you how to use it for complex queries and data analysis.',
          tags: ['MongoDB', 'Backend'],
          date: 'Jan 2025',
          readTime: '10 min',
          emoji: '🍃',
          sections: [
            { title: 'What is the Aggregation Pipeline?', content: 'The aggregation pipeline transforms documents through multiple stages ($match, $group, $sort, $project…). It\'s more powerful than simple find() queries.' },
            { title: 'Example: stats by category', content: 'Here we group orders by status and calculate total and average per group.', code: 'db.orders.aggregate([\n  { $match: { date: { $gte: new Date("2025-01-01") } } },\n  { $group: {\n    _id: "$status",\n    total: { $sum: "$amount" },\n    count: { $sum: 1 },\n    avgAmount: { $avg: "$amount" }\n  }},\n  { $sort: { total: -1 } }\n]);' },
            { title: '$lookup: joining collections', content: 'The $lookup stage allows joining between collections, similar to a SQL JOIN. Very useful for enriching documents with related data.' }
          ]
        },
        {
          title: 'Tailwind CSS: Advanced Tips for Professional Interfaces',
          excerpt: 'Beyond the basic utility classes, Tailwind CSS offers powerful features to build professional interfaces and reusable components.',
          tags: ['Tailwind CSS', 'Frontend'],
          date: 'Dec 2024',
          readTime: '7 min',
          emoji: '🎨',
          sections: [
            { title: 'CSS Variables with Tailwind', content: 'Tailwind combines perfectly with CSS custom properties to create dynamic themes modifiable at runtime.', code: '// tailwind.config.js\ntheme: {\n  extend: {\n    colors: {\n      accent: "rgba(var(--accent-rgb), <alpha-value>)"\n    }\n  }\n}' },
            { title: 'Custom variants', content: 'Create your own variants for specific states (data-attributes, nested group-hover, ariaBooleans) for complex interactions without additional CSS.' },
            { title: '@apply for reusable components', content: 'The @apply directive combines Tailwind utilities into a custom CSS class, ideal for frequently used components.', code: '.btn-primary {\n  @apply px-6 py-3 rounded-full font-bold\n         bg-amber-500 text-black\n         hover:bg-amber-400 transition-all;\n}' }
          ]
        },
        {
          title: 'Deploy a MERN App on Vercel and Render for Free',
          excerpt: 'A complete guide to deploying your MERN stack to production for free: frontend on Vercel, backend on Render, database on MongoDB Atlas.',
          tags: ['Fullstack', 'Deploy'],
          date: 'Nov 2024',
          readTime: '12 min',
          emoji: '🚀',
          sections: [
            { title: '1. MongoDB Atlas — cloud database', content: 'Create a free account on MongoDB Atlas, create an M0 cluster (free tier), add your IP to the whitelist and get the connection string.' },
            { title: '2. Backend on Render', content: 'Connect your GitHub repo to Render. Choose "Web Service", set environment variables (MONGODB_URI, JWT_SECRET) and deploy. The free plan works perfectly.', code: '# render.yaml\nservices:\n  - type: web\n    name: my-api\n    env: node\n    buildCommand: npm install\n    startCommand: node server.js' },
            { title: '3. Frontend on Vercel', content: 'Import your React repo on Vercel. Set VITE_API_URL pointing to your Render backend. Vercel automatically detects Vite and configures the build.' }
          ]
        },
        {
          title: 'Git & GitHub: Professional Workflow for Developers',
          excerpt: 'Branching, rebasing, pull requests, conventional commits… I share the Git workflow I use on all my projects to maintain a clean history.',
          tags: ['Git', 'Tools'],
          date: 'Oct 2024',
          readTime: '9 min',
          emoji: '🌿',
          sections: [
            { title: 'Conventional Commits', content: 'Conventional commits standardize commit messages to automate changelogs and make history easier to read.', code: '# Format\n<type>(<scope>): <description>\n\n# Examples\nfeat(auth): add JWT refresh token\nfix(ui): correct mobile navbar overflow\ndocs: update README with deploy guide' },
            { title: 'Branching Strategy', content: 'I use a simple strategy: main (stable production), develop (integration), feature/xxx (new features), fix/xxx (bug fixes). Each feature gets its own Pull Request.' },
            { title: 'Useful Git aliases', content: 'Git aliases to speed up the daily workflow.', code: 'git config --global alias.lg "log --oneline --graph --decorate"\ngit config --global alias.st "status -s"\ngit config --global alias.undo "reset HEAD~1 --soft"' }
          ]
        }
      ]
    },

    // Chatbot translations
    chatbot: {
      title: 'Mulho\'s Assistant',
      online: 'Online',
      placeholder: 'Ask your question…',
    },

    // Blog extra keys
    blogExtra: {
      articleEnd: 'Thank you for reading this article! To learn more or discuss the topic, feel free to contact me directly.',
      close: 'Close',
    },

    // Education section translations
    education: {
      tag: '<Education>',
      title: 'My Educational Journey',
      subtitle: 'Education and diplomas',
      items: [
        {
          degree: 'Bachelor 3 - Software Engineering (GL)',
          institution: 'Higher Institute of Information Technology (ISI)',
          year: '2025 - 2026',
          description: 'Advanced training in software engineering with focus on application development, software architecture, and project management. Current year. Dakar, Senegal.'
        },
        {
          degree: 'Full Stack Developer Certification',
          institution: 'GoMyCode Bootcamp',
          year: 'August 2025 - January 2026',
          description: 'Intensive 6-month certification in fullstack web development (MERN, React, Node.js, MongoDB).'
        },
        {
          degree: 'Bachelor 2 - Software Engineering (GL)',
          institution: 'Higher Institute of Information Technology (ISI)',
          year: '2024 - 2025',
          description: 'Software engineering training with deepening in object-oriented programming, databases, and web development.'
        },
        {
          degree: 'Bachelor 1 - Software Engineering (GL)',
          institution: 'Higher Institute of Information Technology (ISI)',
          year: '2023 - 2024',
          description: 'First year of bachelor\'s degree in software engineering. Programming fundamentals, algorithms, and introduction to development.'
        },
        {
          degree: 'Scientific Baccalaureate',
          institution: 'Louis Grégory Private School',
          year: '2021 - 2022',
          description: 'Specialization in Mathematics and Physics. Pointe-Noire, Republic of Congo.'
        }
      ]
    },

    // Contact section translations
    contact: {
      tag: '<Contact>',
      title: 'Let\'s Talk',
      subtitle: 'if you want to know more about',
      me: 'me',
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        locationValue: 'Dakar, Senegal'
      },
      socialTitle: 'Follow or contact me',
      form: {
        nameLabel: 'Full name*',
        namePlaceholder: 'Mulho MABIALA',
        emailLabel: 'Email address*',
        emailPlaceholder: 'imulhomabiala@gmail.com',
        phoneLabel: 'Phone number',
        phonePlaceholder: '+221 78 730 87 06',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Project inquiry',
        messageLabel: 'Write your message*',
        messagePlaceholder: 'Hello, I would like to discuss...',
        sendButton: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Message sent successfully!',
        errorMessage: 'Error sending message.'
      },
      followMe: 'Follow Me'
    },

    // Footer translations
    footer: {
      description: 'Passionate Fullstack Developer, creating modern and innovative web experiences.',
      navigationTitle: 'Navigation',
      followTitle: 'Follow Me',
      copyright: 'All rights reserved.',
      createdBy: 'Created by',
      navigation: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact'
      }
    }
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'fr' ? 'en' : 'fr');
  };

  const t = translations[language];

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations: t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};

export default LanguageContext;
