import { BsJournalCode, BsFillDiagram3Fill } from 'react-icons/bs';
import Joacoimg from '@/public/images/JA.jpg';
import Lautiimg from '@/public/images/LC.jpg';
import LBimg from '@/public/images/LB.jpg';

const data = {
 nav: [
  { href: '#home', name: 'Home', button: false }, 
  { href: '#servicios', name: 'Servicios', button: false },
  { href: '#nosotros', name: 'Nosotros', button: false },
  { href: '#contacto', name: 'Contacto', button: true }
 ],
 hero: {
  titulo: 'Bienvenidos a',
  span: 'AMBACO',
  texto: 'Tu socio estratégico para impulsar el crecimiento y la excelencia en tu empresa. Sabemos que cada decisión cuenta, es por eso que estamos aquí para ofrecerte soluciones personalizadas y orientadas a resultados que llevan tu negocio al siguiente nivel.'
 },
 services: {
  titulo: 'Nuestro Servicios',
  subtitulo: 'Nos especializamos en proporcionar un conjunto integral de servicios para satisfacer las necesidades únicas de tu empresa',
  titulo2: 'Powerful suite of tools',
  subtitulo2: 'Diseñada para catalizar el éxito de tu empresa. Con un enfoque integral en la consultoría empresarial, ofrecemos una amplia gama de herramientas poderosas diseñadas para impulsar la eficiencia, la innovación y el crecimiento sostenible.',
 },
 servicesTab: [
  { n: 1, titulo: 'Diagnóstico Estratégico', texto: 'Nuestra suite comienza con un análisis exhaustivo de tu empresa. A través de evaluaciones estratégicas, identificamos oportunidades de mejora, fortalezas y áreas de enfoque para desarrollar una estrategia personalizada que maximice tu potencial.' },
  { n: 2, titulo: 'Optimización de Procesos', texto: 'Maximizamos la eficiencia operativa a través de la revisión y mejora continua de tus procesos empresariales. Nuestra metodología busca eliminar obstáculos, reducir costos y mejorar la calidad para garantizar un rendimiento óptimo.' },
  { n: 3, titulo: 'Consultoría Estratégica', texto: 'Guiamos a tu empresa hacia el éxito a través de una consultoría estratégica personalizada. Ya sea que estés buscando expandirte, diversificar tu oferta o enfrentar nuevos desafíos, nuestro equipo está preparado para brindarte la orientación que necesitas.' },
 ],
 solutions: {
  titulo: 'Explore the solutions',
  subtitulo: 'Te invitamos a sumergirte en un universo de soluciones empresariales diseñadas para impulsar tu organización hacia nuevos horizontes de éxito.',
 },
 solutionCards: [
  { titulo: 'Soluciones Tecnológicas Innovadoras', icono: BsJournalCode, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { titulo: 'Estrategias de Desarrollo Organizacional', icono: BsFillDiagram3Fill, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { titulo: 'Proyectos a la Medida', icono: BsFillDiagram3Fill, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { titulo: 'Consultoría Estratégica Especializada', icono: BsFillDiagram3Fill, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { titulo: 'Herramientas de Optimización de Procesos', icono: BsFillDiagram3Fill, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { titulo: 'Innovación en Consultoría Empresarial', icono: BsFillDiagram3Fill, texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
 ],
 nosotros: [
  { texto: 'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.', nombre: 'Lorenzo Barrantes', cargo: 'CEO & Co-Funder', empresa: 'Consultora', imagen: LBimg, red: 'https://www.linkedin.com/in/lorenzo-barrantes/' },
  { texto: 'I love this prFoduct and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.', nombre: 'Carlos Lautaro Colli', cargo: 'CEO & Co-Funder', empresa: 'Consultora', imagen: Lautiimg, red: 'https://www.linkedin.com/in/carloslautarocolli/' },
  { texto: 'I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time.', nombre: 'Joaquin Amodio', cargo: 'CEO & Co-Funder', empresa: 'Consultora', imagen: Joacoimg, red: 'https://www.linkedin.com/in/joaqu%C3%ADn-amodio-aa93271ba/' },
 ]
};

export default data