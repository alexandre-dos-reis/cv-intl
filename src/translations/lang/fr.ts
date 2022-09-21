import { devBachelor, btec, soundBachelor } from '../common/diplomas'
import { volvoExp, universPaieExp } from '../common/experiences'
import { contact, infoWebsite, social } from '../common/identity'
import { atelierAmelieProject, personnalWebsite } from '../common/projects'
import { techItems } from '../common/tech-items'

export const fr = {
  identity: {
    subtitle: 'Développeur Fullstack',
    children: {
      info: {
        title: 'À PROPOS',
        children: ['36 ans', 'Né le 13 septembre 1986', 'Résidant à Caen', 'Permis A & B', ...infoWebsite],
      },
      contact: {
        title: 'CONTACT',
        children: contact,
      },
      social: {
        title: 'SOCIAL',
        children: social,
      },
      languages: {
        title: 'LANGUES',
        children: ['Portugais courant', 'Anglais B2+', 'Espagnol B2-'],
      },
      interests: {
        title: 'INTÉRÊTS',
        children: ['Technologies du web', 'Algorythmie', 'Automatisation', 'Synthèse Sonore'],
      },
      hobbies: {
        title: 'LOISIRS',
        children: ['Vélo', 'Guitare', 'Eurorack', 'Photographie'],
      },
    },
  },
  mainContent: {
    projects: {
      title: 'PROJECT EN COURS',
      children: [
        {
          title: 'Site E-commerce',
          ...atelierAmelieProject,
        },
        {
          title: 'Site Vitrine',
          ...personnalWebsite,
        },
      ],
    },
    experiences: {
      title: 'EXPÉRIENCES',
      children: [
        {
          title: 'Développeur Digital & IT',
          ...volvoExp,
          duration: '2021 à 2022',
          mission: 'Mission de digitalisation du site de production de véhicules industriels.',
          details: [
            'Méthode Agile, Scrum, Plateforme Azure Devops',
            'Application ASP.NET Core 5 & Javascript ES6',
            'Power Apps, Power Automate, Power BI',
            "Animation d'ateliers de formation",
          ],
        },
        {
          title: "Technicien d'exploitation",
          ...universPaieExp,
          duration: '2019 à 2021',
          mission: 'Exploitation des applicatifs métiers, supervision et gestion des serveurs de productions.',
          details: [
            'Windows Server 2019',
            'Création des utilisateurs : ADDS, GoAnywhere, OTRS',
            'Script et automatisation Powershell',
            'Supervision PRTG',
            'Gestion de bases de données MSSQL',
            "Rédaction de procédures d'exploitation",
            'Gestion des postes informatiques',
            'Assistance et support technique via GLPI et OTRS',
          ],
        },
      ],
    },
    diplomas: {
      title: 'DIPLÔMES',
      children: [
        {
          name: "Licence Développement d'application web et mobile",
          ...devBachelor,
        },
        {
          name: 'BTS Service Informatique aux Organisations option SISR',
          ...btec,
        },
        {
          name: "Licence Diplôme d'Études Supérieures des Techniques du Son",
          ...soundBachelor,
        },
      ],
    },
    techs: {
      title: 'LANGAGES INFO & TECHNO',
      children: techItems,
    },
  },
}
