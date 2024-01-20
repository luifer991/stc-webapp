import Card from '../Components/Card';
import './Contacts.css'

function Contacts() {
  return (
    <>
        <div className='card-container'>
            <Card 
            icon = './src/assets/email.png'
            alt = 'icono de email'
            subTitle = 'Email'
            body = 'Si necesitas cualquier ayuda o pregunta escribenos al siguiente email'
            text='luifer991@gmail.com'
            />  
            <Card 
            icon = './src/assets/whatsapp.png'
            alt = 'icono de whatsapp'
            subTitle = 'Whatsapp'
            body = 'Puedes escribirnos durante horas laborales si deseas una forma más rápida'
            href='https://wa.me/573186922713'
            text='+573186922713'
            />  
            <Card 
            icon = './src/assets/ubicacion.png'
            alt = 'icono de ubicación'
            subTitle = 'Ubicación'
            body = 'Visitanos en Medellín Colombia oara entrenar con nosotros'
            text ='Cll 36B #42 - 25'
            />  
        </div>

        
    </>
  )
}


export default Contacts
