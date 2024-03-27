import { BsJournalCode, BsMagic, BsFillDiagram3Fill, BsBarChartFill, BsArrowRepeat, BsLightbulb, BsStar   } from 'react-icons/bs';
import Joacoimg from '@/public/images/JA.png';
import Lautiimg from '@/public/images/LC.png';
import LBimg from '@/public/images/LB.png';
import Logo from '@/public/images/logoambaco.png'

const solucionesIcono = {
 project: BsJournalCode,
 tools: BsFillDiagram3Fill,
 innovation: BsLightbulb,
 satisfaction: BsStar,
}
const href = {
 services: 'services',
 about: 'about-us',
 contact: 'contact',
}
const serviciosIcono = {
 bi: BsBarChartFill,
 mejora: BsArrowRepeat,
 agil : BsMagic,
}

export const dataEn = {
 nav: [
  { href: href.services, name: 'Services', button: false },
  { href: href.about, name: 'About Us', button: false },
  { href: href.contact, name: 'Contact', button: true }
 ],
 hero: {
  titulo: 'Welcome to',
  span: Logo,
  texto: 'Your strategic partner to drive growth and excellence in your company. We know that every decision matters, and we are here to offer you personalized solutions focused on results that take your business to the next level.',
  boton1: 'Contact',
  boton2: 'Services',
  video: 'Watch the full video (2 min)',
  },
 services: {
  titulo: 'Our Services',
  subtitulo: 'We focus on identifying and optimizing key processes in your business to improve their efficiency, applying Lean methodologies. Additionally, we have experience in data analytics, allowing us to generate visualizations of key indicators to facilitate decision-making.',
  titulo2: 'The Power of Tools',
  subtitulo2: 'Designed to catalyze your company\'s success. With a comprehensive approach to business consulting, we offer a wide range of powerful tools designed to boost efficiency, innovation, and sustainable growth.',
 },
 servicesTab: [
  {icon: serviciosIcono.bi, n: 1, titulo: 'Business Intelligence', texto: 'Survey of key business and process indicators to streamline information flows and generate tools that visualize your company\'s KPIs, facilitating decision-making and activity tracking.' },
  {icon: serviciosIcono.mejora, n: 2, titulo: 'Continuous Improvement', texto: 'Application of Lean methodologies for the organization, restructuring, and elimination of processes with the aim of optimization and achieving measurable results.' },
  {icon: serviciosIcono.agil, n: 3, titulo: 'Agile Methodologies', texto: 'We offer a specialized approach in agile methodologies, such as Scrum, Kanban, among others, designed to optimize software development and project management. With this approach, we foster collaboration and ensure the timely delivery of high-quality results. Through iterative processes and a customer-centric mindset, we help companies quickly adapt to market changes and maximize the value of their technology investments.' },
 ],
 solutions: {
  titulo: 'Explore the Solutions',
  subtitulo: 'We invite you to immerse yourself in a universe of business solutions designed to propel your organization towards new horizons of success.',
 },
 solutionCards: [
  { titulo: 'Tailored Projects', icono: solucionesIcono.project, texto:'In-depth survey of needs and strategic planning.' },
  { titulo: 'Diversity of Technological Tools', icono: solucionesIcono.tools, texto: 'Application of visualization, programming, and organizational tools.' },
  { titulo: 'Innovation in Processes', icono: solucionesIcono.innovation, texto:'Comprehensive analysis and proposal of solutions on processes.' },
  { titulo: 'Customer Satisfaction Focus', icono: solucionesIcono.satisfaction, texto:'Solutions designed with the customer at the center, seeking to maximize added value.' },
 ],
 nosotros: [
  { texto: '', nombre: 'Joaquín Amodio', cargo: 'Industrial Engineer', empresa: '', imagen: Joacoimg, red: 'https://www.linkedin.com/in/joaqu%C3%ADn-amodio-aa93271ba/' },
  { texto: '', nombre: 'Lorenzo Barrantes', cargo: 'Industrial Engineer', empresa: '', imagen: LBimg, red: 'https://www.linkedin.com/in/lorenzo-barrantes/' },
  { texto: '', nombre: 'Carlos Lautaro Colli', cargo: 'Industrial Engineer', empresa: '', imagen: Lautiimg, red: 'https://www.linkedin.com/in/carloslautarocolli/' }, 
 ],
 form: {
  titulo: 'Contact',
  enviar: 'Sending...',
  boton: 'Send Message'
 }
};
export const dataEs = {
 nav: [
  // { href: 'home', name: 'Home', button: false }, 
  { href: href.services, name: 'Servicios', button: false },
  { href: href.about, name: 'Nosotros', button: false },
  { href: href.contact, name: 'Contacto', button: true }
 ],
 hero: {
  titulo: 'Bienvenidos a',
  span: Logo,
  texto: 'Tu socio estratégico para impulsar el crecimiento y la excelencia en tu empresa. Sabemos que cada decisión cuenta y estamos aquí para ofrecerte soluciones personalizadas y orientadas a resultados que llevan tu negocio al siguiente nivel.',
  boton1: 'Contacto',
  boton2: 'Servicios',
  video: 'Mirar video completo (2 min)',
 },
 services: {
  titulo: 'Nuestro Servicios',
  subtitulo: 'Nos dedicamos a relevar y optimizar procesos claves de su negocio para mejorar la eficiencia de los mismos, aplicando metodologías Lean. A su vez, contamos con experiencia en analítica de datos, que nos permite generar visualizaciones de indicadores claves para facilitar la toma de decisiones.',
  titulo2: 'El poder de las herramientas',
  subtitulo2: 'Diseñada para catalizar el éxito de tu empresa. Con un enfoque integral en la consultoría empresarial, ofrecemos una amplia gama de herramientas poderosas diseñadas para impulsar la eficiencia, la innovación y el crecimiento sostenible.',
 },
 servicesTab: [
  {icon: serviciosIcono.bi, n: 1, titulo: 'Inteligencia de Negocios', texto: 'Relevamiento de indicadores claves de negocio y procesos para la eficientización de flujos de información y generación de herramientas que permitan visualizar los KPIs de su empresa, facilitando la toma de decisiones y el seguimiento de las actividades.' },
  {icon: serviciosIcono.mejora, n: 2, titulo: 'Mejora Continua', texto: 'Aplicación de metodologías Lean para la organización, reestructuración y eliminación de procesos con la búsqueda de la optimización y de obtener resultados medibles.' },
  {icon: serviciosIcono.agil, n: 3, titulo: 'Metodologías Ágiles', texto: 'Ofrecemos un enfoque especializado en metodologías ágiles, como Scrum, Kanban, entre otras, diseñadas para optimizar el desarrollo de software y la gestión de proyectos. Con este abordaje, fomentamos la colaboración y garantizamos la entrega oportuna de resultados de alta calidad. A través de procesos iterativos y una mentalidad centrada en el cliente, ayudamos a las empresas a adaptarse rápidamente a los cambios del mercado y a maximizar el valor de sus inversiones en tecnología.' },
 ],
 solutions: {
  titulo: 'Explora las soluciones',
  subtitulo: 'Te invitamos a sumergirte en un universo de soluciones empresariales diseñadas para impulsar tu organización hacia nuevos horizontes de éxito.',
 },
 solutionCards: [
  { titulo: 'Proyectos a la Medida', icono: solucionesIcono.project, texto: 'Relevamiento en profundidad de las necesidades y planificación estratégica.' },
  { titulo: 'Diversidad de Herramientas Tecnológicas', icono: solucionesIcono.tools, texto: 'Aplicación de herramientas de visualización, programación y organización.' },
  { titulo: 'Innovación en Procesos', icono: solucionesIcono.innovation, texto: 'Análisis exhaustivo y propuesta de soluciones sobre procesos.' },
  { titulo: 'Enfoque en Satisfacción al Cliente', icono: solucionesIcono.satisfaction, texto: 'Soluciones diseñadas con el cliente en el centro buscando maximizar el valor agregado.' },
 ],
 nosotros: [
  { texto: '', nombre: 'Joaquín Amodio', cargo: 'Ingeniero Industrial', empresa: '', imagen: Joacoimg, red: 'https://www.linkedin.com/in/joaqu%C3%ADn-amodio-aa93271ba/' },
  { texto: '', nombre: 'Lorenzo Barrantes', cargo: 'Ingeniero Industrial', empresa: '', imagen: LBimg, red: 'https://www.linkedin.com/in/lorenzo-barrantes/' },
  { texto: '', nombre: 'Carlos Lautaro Colli', cargo: 'Ingeniero Industrial', empresa: '', imagen: Lautiimg, red: 'https://www.linkedin.com/in/carloslautarocolli/' }, 
 ],
 form: {
  titulo: 'Contacto',
  enviar: 'Enviando...',
  boton: 'Enviar Mensaje'
 }
};

