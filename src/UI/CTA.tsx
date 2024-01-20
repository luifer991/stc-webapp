import Button from '../Components/Button'
import './CTA.css'

function Cta() {
  return (
    <>
        <section className='cta'>
          <div className="title1">
              <h2>Descubre STC</h2>
              <p>Promover la Seguridad y Crear Comunidades más Seguras</p>
          </div>
            <div className="buttons2">
                <Button clas="l-btn" text="Aprender Más" />
                <Button clas="s-btn" text="Suscribete" />
            </div>
        </section>
    </>
  )
}


export default Cta
