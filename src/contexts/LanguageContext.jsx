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
      projectsList: [
        {
          title: 'ECOHUB - Plateforme de Signalement Urbain',
          description: "Permettre aux citoyens de signaler facilement les problèmes de leur quartier et aider les autorités à prioriser et agir rapidement."
        },
        {
          title: 'Plateforme de commerce électronique',
          description: "Une plateforme de commerce électronique complète avec gestion des produits, panier d'achat et traitement des paiements."
        },
        {
          title: 'Dashboard Analytics',
          description: "Tableau de bord d'analyse avec graphiques interactifs et visualisation de données en temps réel."
        },
        {
          title: 'API REST Authentification',
          description: 'API robuste avec authentification JWT, gestion des rôles et sécurité avancée.'
        },
        {
          title: 'Portfolio Personnel',
          description: 'Site portfolio moderne avec animations fluides et design responsive.'
        },
        {
          title: 'Application de Cinéma',
          description: 'Une application de cinéma où vous pouvez présenter vos films ou émissions de télévision préférés.'
        },
        {
          title: 'Todo List',
          description: 'Une application de gestion de tâches moderne et intuitive avec une interface élégante créée avec React et Tailwind CSS.'
        },
        {
          title: 'NBarts - Galerie d\'Arts',
          description: 'Une galerie d\'arts en ligne élégante et immersive permettant de découvrir et d\'explorer des œuvres artistiques variées.'
        },
        {
          title: 'Zolaa - Plateforme Dynamique',
          description: 'Une plateforme web complète et dynamique offrant une expérience utilisateur moderne et fluide.'
        }
      ]
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
      projectsList: [
        {
          title: 'ECOHUB - Urban Reporting Platform',
          description: 'Enable citizens to easily report neighborhood issues and help authorities prioritize and act quickly.'
        },
        {
          title: 'E-commerce Platform',
          description: 'A complete e-commerce platform with product management, shopping cart, and payment processing.'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Analytics dashboard with interactive charts and real-time data visualization.'
        },
        {
          title: 'REST API Authentication',
          description: 'Robust API with JWT authentication, role management, and advanced security.'
        },
        {
          title: 'Personal Portfolio',
          description: 'Modern portfolio website with smooth animations and responsive design.'
        },
        {
          title: 'Movie Cinema Application',
          description: 'A movie cinema application where you can showcase your favorite movies and TV shows.'
        },
        {
          title: 'Todo List',
          description: 'A modern and intuitive task management application with an elegant interface built with React and Tailwind CSS.'
        },
        {
          title: 'NBarts - Art Gallery',
          description: 'An elegant and immersive online art gallery for discovering and exploring a variety of artistic works.'
        },
        {
          title: 'Zolaa - Dynamic Platform',
          description: 'A complete and dynamic web platform offering a modern and seamless user experience.'
        }
      ]
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
