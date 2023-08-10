import kotlinLogo from '../assets/kotlin-logo.png'
import javaLogo from '../assets/java-logo.png'
import vueLogo from '../assets/vue-logo.png'
import cssLogo from '../assets/css-logo.png'
import androidLogo from '../assets/androidLogo.png'
import reactLogo from '../assets/react-logo.png'
import hmtlLogo from '../assets/html-logo.png'
import typeScriptLogo from '../assets/typescript-logo.png'
import javaScriptLogo from '../assets/javascript-logo.png'

export const allTechno = [
    { name: 'React', logo: reactLogo },
    { name: 'Vue', logo: vueLogo },
    { name: 'HTML', logo: hmtlLogo },
    { name: 'Android Studio', logo: androidLogo }
]

export const portafolioInfo = {
    name: 'My portafolio',
    techno: { name: 'React', logo: reactLogo },
    description: 'Aplicación web para mostrar mis',
    gitUrl: 'https://github.com/Zaratee/myWebPage/tree/main',
    image: [],
    type: 'Personal Proyecto',
    lenguages: [{ name: 'HTML', logo: hmtlLogo }],
    package: ['Tailwind']
}

export const allProjects = [
    {
        name: 'Gestor de citas acupunturista',
        techno: { name: 'Android Studio', logo: androidLogo },
        description: 'Aplicación para un consultorio de acupuntura, que ayuda a la gestion de citas, hacer citas y espacio para hacer publicaciones como doctor',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        lenguages: [{ name: 'Java', logo: javaLogo }],
        package: []
    },
    {
        name: 'Sistema Deportivo Fútbol usuarios',
        techno: { name: 'React', logo: reactLogo },
        description: 'Sistema personalizado para la visualización de liguillas',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        lenguages: [{ name: 'TypeScript', logo: typeScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['Tailwind', 'Next.js ']
    },
    {
        name: 'Sistema Deportivo Fútbol admin',
        techno: { name: 'React', logo: reactLogo },
        description: 'Sistema personalizado para la gestión de liguillas',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        lenguages: [{ name: 'TypeScript', logo: typeScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['Tailwind', 'Next.js', 'React-pdf']
    },
    {
        name: 'Administrador de inventario en hospital',
        techno: { name: 'React', logo: reactLogo },
        description: 'Sistema para administrar el stock de los insumos dentro de un Hospital',
        gitUrl: '',
        image: [],
        type: 'Freelance',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: []
    },
    {
        name: 'Marvel api',
        techno: { name: 'React', logo: reactLogo },
        description: 'Aplicación web haciendo uso de Fetch con la api Marvel y manejando los datos con Redux',
        gitUrl: 'https://9kt63y.csb.app/',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['Redux', 'Fetch', 'MarvelAPI']
    },
    {
        name: 'Animal Selector',
        techno: { name: 'React', logo: reactLogo },
        description: 'Aplicación web para hacer uso tecnología de React Router',
        gitUrl: 'https://github.com/Zaratee/reactRouterProject',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['Tailwind', 'React Router']
    },
    {
        name: 'Responsive Grid',
        techno: { name: 'HTML', logo: hmtlLogo },
        description: 'Aplicación web con grid responsive',
        gitUrl: 'https://github.com/Zaratee/Responsive-Grid-Website',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'TypeScript', logo: typeScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: []
    },
    {
        name: 'Todo list',
        techno: { name: 'React', logo: reactLogo },
        description: 'Todo app hecho con Redux',
        gitUrl: 'https://github.com/Zaratee/ToDoListRedux',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['Redux']
    },
    {
        name: 'Pokedex',
        techno: { name: 'React', logo: reactLogo },
        description: 'Aplicacion hecha con React, haciendo uso de la api Pokedex',
        gitUrl: 'https://github.com/Zaratee/Pokedex',
        image: [],
        type: 'BootCamp',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: ['GraphQL']
    },
    {
        name: 'React Bootcamp',
        techno: { name: 'React', logo: reactLogo },
        description: 'Aplicaciones del bootcamp react',
        gitUrl: 'https://github.com/Zaratee/All-Task-From-React-Training',
        image: [],
        type: 'BootCamp',
        lenguages: [{ name: 'JavaScript', logo: javaScriptLogo }, { name: 'HTML', logo: hmtlLogo }, { name: 'CSS', logo: cssLogo }],
        package: []
    },
    {
        name: 'Convertidor de años a minutos',
        techno: { name: 'Android Studio', logo: androidLogo },
        description: 'Herramienta para hacer conversión de años a minutos',
        gitUrl: 'https://github.com/Zaratee/AgeInMinutes',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'Kotlin', logo: kotlinLogo }],
        package: []
    },
    {
        name: 'Calculadora',
        techno: { name: 'Android Studio', logo: androidLogo },
        description: 'Aplicación de calculadora',
        gitUrl: 'https://github.com/Zaratee/Calculator',
        image: [],
        type: 'Personal Proyecto',
        lenguages: [{ name: 'Kotlin', logo: kotlinLogo }],
        package: []
    },


]