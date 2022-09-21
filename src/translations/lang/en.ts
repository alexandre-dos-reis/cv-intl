import { devBachelor, btec, soundBachelor } from '../common/diplomas'
import { volvoExp, universPaieExp } from '../common/experiences'
import { contact, infoWebsite, social } from '../common/identity'
import { atelierAmelieProject, personnalWebsite } from '../common/projects'
import { techItems } from '../common/tech-items'
import { fr } from './fr'

export const en: typeof fr = {
  identity: {
    subtitle: 'Fullstack developer',
    children: {
      info: {
        title: 'ABOUT',
        children: [
          '36 yo',
          'Born on September 13, 1986',
          'Living in Caen, France',
          'Car & motorcycle licences',
          ...infoWebsite,
        ],
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
        title: 'LANGUAGES',
        children: ['Fluent portuguese', 'English B2+', 'Spanish B2-'],
      },
      interests: {
        title: 'INTERESTS',
        children: ['Web technologies', 'Algorythmy', 'Automating', 'Sound Synthesis'],
      },
      hobbies: {
        title: 'HOBBIES',
        children: ['Bike', 'Guitar', 'Eurorack', 'Photography'],
      },
    },
  },
  mainContent: {
    projects: {
      title: 'CURRENT PROJECTS',
      children: [
        {
          title: 'E-commerce website',
          ...atelierAmelieProject,
        },
        {
          title: 'Showcase website',
          ...personnalWebsite,
        },
      ],
    },
    experiences: {
      title: 'WORK EXPERIENCES',
      children: [
        {
          title: 'Digital & IT developer',
          ...volvoExp,
          duration: '2021 to 2022',
          mission: 'Digitalization of the industrial vehicle production site.',
          details: [
            'Agile & scrum process, Azure Devops platform',
            'ASP.NET Core 5 & ES6 Javascript app',
            'Power Apps, Power Automate, Power BI',
            'Training workshops',
          ],
        },
        {
          title: 'IT operations technician',
          ...universPaieExp,
          duration: '2019 to 2021',
          mission: 'Business application operations, supervision and management of production servers.',
          details: [
            'Windows Server 2019',
            'User management : ADDS, GoAnywhere, OTRS',
            'Script and automation via Powershell',
            'PRTG Supervision',
            'SQL server management',
            'Writing operating procedures',
            'Computer workstation management',
            'Assistance and technical support',
          ],
        },
      ],
    },
    diplomas: {
      title: 'EDUCATIONS',
      children: [
        {
          name: 'Web and mobile application development bachelor',
          ...devBachelor,
        },
        {
          name: 'IT Service to organizations BTEC',
          ...btec,
        },
        {
          name: 'Sound engineering bachelor',
          ...soundBachelor,
        },
      ],
    },
    techs: {
      title: 'TECH LANGUAGES & FRAMEWORKS',
      children: techItems,
    },
  },
}
