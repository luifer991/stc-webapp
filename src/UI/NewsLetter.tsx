import './NewsLetter.css';

function NewsLetter() {
  return (
    <>
        <section className='newsletter'>
            <div className='title-3'>
                <h2>
                    Manténgase al día con el Newsletter de STC
                </h2>
                <p>
                    Suscríbase a nuestro boletín para recibir las últimas novedades sobre STC y consejos de seguridad
                </p>
            </div>
            <div className="form">
                <form action="mailto:correo@ejemplo.com" method="post" encType="text/plain">
                    <input required type="text" name="text" className="input"/>
                    <label className="label">Email</label>
                    <button type="submit" className='send-btn'>Enviar</button>
                </form>
            </div>
            <p>Al suscibirte aceptas nuestro terminos y condiciones</p>
        </section>
    </>
    
  )
}

export default NewsLetter