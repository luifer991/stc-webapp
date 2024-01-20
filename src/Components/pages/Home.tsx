import Section from "../../UI/Section";
import Hero from "../../UI/Hero";
import Section1 from "../../UI/Section1";
import Cta from "../../UI/CTA";
import NewsLetter from "../../UI/NewsLetter";
import Contacts from "../../UI/Contacts";
import Footer from "../../UI/Footer";

function Home() {
  return (
    <>    
        <div>
            {/* Header */}
      <Hero />
    {/* Explained section about STC's System */}
      <Section 
          text='Simple'
          title='Fácil de aprender para todos los usuarios'
          body='STC está diseñado para ser amigable y accesible para personas de todas las condiciones  físicas. Nuestro programa ofrece una solución rápida y adaptable para prevenir situacione  violencia.'
          image='./src/assets/boxing.jpeg'
          alt='dos hombre practicando brasilian jiu jitsu'
          icon='./src/assets/safe.jpeg'
          altTwo='icono de un escudo'
          subTitle='Previene el peligro'
          bodyTwo='Toma el control de tu seguridad con las caracteristicas intuitivas de STC'
          iconTwo='./src/assets/fuerzaFisica.jpeg'
          altThree='icono de musculos'
          subTitleTwo='Fortalécete'
          bodyThree='STC hace que sus usuarios se sientan mas seguros y preparados en cualquier situación'
          />
      {/* Section explaining STC */}
      <Section1
          text='Mantente a salvo con STC'
          title='Experimenta el Poder de STC por Ti Mismo'
          body='Descubre cómo STC puede revolucionar tu seguridad personal. ¡Regístrate hoy y toma el control de tu seguridad!'
          icon='./src/assets/adapt.jpeg'
          alt='icono de personalizable'
          subTitle='STC es Personalizable'
          bodyTwo='STC está diseñado para adaptarse a cada usuario, asegurando una experiencia personalizada.'
          iconTwo='./src/assets/judo.jpeg'
          altTwo='icono de judo'
          subTitleTwo='Mantente Protegido en Cualquier Momento'
          bodyThree='STC proporciona una variedad de características de vanguardia para mejorar su seguridad'
          iconThree='./src/assets/seguridad.jpeg'
          altThree='icono de prioridad'
          subTitleThree='STC: Tu Seguridad, Nuestra Prioridad'
          bodyFour='STC garantiza tu seguridad con sus medidas de seguridad sólidas y confiables'
      />
          {/* Seccion 2 */}
          <Section 
          text='Capacitación'
          title='Manténgase seguro y protegido con STC'
          body='STC te proporciona una mayor seguridad y tranquilidad. Nuestro programa está diseñado para adaptarse a las necesidades de cada usuario, independientemente de su condición física.'
          image='./src/assets/serious.jpeg'
          alt='un hombre pateandole la cara a su contrincante en una pelea de muay thai'
          icon='./src/assets/beneficio.jpeg'
          altTwo='icono de mejora'
          subTitle='Beneficios'
          bodyTwo='STC garantiza su seguridad aportando soluciones rápidas y adaptables para prevenir la violencia'
          iconTwo='./src/assets/aprender.jpeg'
          altThree='icono de algo facil'
          subTitleTwo='Fácil de Aprender'
          bodyThree='STC está diseñado para que sea facil de aprender haciendolo accesible a todo el mundo'
          />
          <Section1
          text='Previene la Violencia'
          title='Utiliza STC en cualquier escenario'
          body='STC es un programa que te ayuda a prevenir situaciones de violencia, independientemente de tu condición física.'
          icon='./src/assets/mejora.jpeg'
          alt='icono de crecimiento'
          subTitle='Mejora tu Seguridad con STC'
          bodyTwo='STC puede adaptarse a diferentes situaciones, asegurandote que puedas prevenir la violencia'
          iconTwo='./src/assets/poder.jpeg'
          altTwo='icono de confianza'
          subTitleTwo='Empodérate con STC'
          bodyThree='STC asegura una solución segura para cualquier persona en cualquier escenario'
          iconThree='./src/assets/comunidad.jpeg'
          altThree='algo'
          subTitleThree='Únete a nuestra comunidad'
          bodyFour='STC empodéra a sus usuarios con las herramientas para prevenir la violencia y librarse de cualquier peligro'
      />
        <Cta />
        <NewsLetter />
        <Contacts />
        <Footer />
        </div>
    </>

  )
}

export default Home