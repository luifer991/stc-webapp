import './Footer.css'
import { Images } from '../Components/Images';


function Footer() {
  return (
    <>
      <section className='footer'>
        <div className="section-3">
          <img className='footer-logo' src="../../src/assets/wholelogogold.png" alt="logo STC es un escudo dorado con las letras STC a un lado" />
          <div className='foot-left'>
            <h4>
              Dirección
            </h4> 
            <p className='p1'>
              calle 36B # 42 - 25
            </p> 
            <h4>
              Contacto
            </h4> 
            <a  href="mailto: luifer991@gmail.com" target='_blank' rel='noreferrer'>
              luifer991@gmail.com
            </a>
            <a href="https://wa.me/573186922713" target='_blank' rel='noreferrer'>
              +573186922713
            </a>
            <div className="rrss">
                <Images />
            </div> 
          </div>               
        </div>
          <div className='links-2'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                  Programas de Prevención
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                  Tips de Seguridad
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Recursos de Apoyo
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Contactanos
              </a>
              <a  href="#" target="_blank" rel="noopener noreferrer">
                FAQs
              </a>            
          </div>
      </section>
      <footer>
        <p>© 2023 STC. All rights reserved.</p> 
        <div className="foot-right">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Cockie Policy</a>
        </div>
      </footer>
    </>
  )
}

export default Footer