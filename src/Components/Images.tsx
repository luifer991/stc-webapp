import './Images.css';

const facebook = '../../src/assets/facebook.png';
const instagram = '../../src/assets/instagram.png';
const tikTok = '../../src/assets/tik-tok.png';
const amazon = '../../src/assets/amazon.png';


export function Images () {


  return (
    <>
        <a href='https://www.facebook.com/s.t.c.sistematacticodecombate' target='_blank' rel='noreferrer' >
            <img className='img-icons' src={facebook} alt='icono de facebook' />
        </a>
        <a href='https://www.instagram.com/stc_sistema_99/' target='_blank' rel='noreferrer' >
            <img className='img-icons' src={instagram} alt='icono de instagram' />
        </a>
        <a href='https://www.tiktok.com/@guerreros_stc?is_from_webapp=1&sender_device=pc' target='_blank' rel='noreferrer' >
            <img className='img-icons' src={tikTok} alt='icono de tiktok' />
        </a>
        <a href='https://www.amazon.com/dp/B0C47NHQVD?ref_=pe_3052080_397514860' target='_blank' rel='noreferrer' >
            <img className='img-icons' src={amazon} alt='icono de amazon' />
        </a>
    </>
  )
}
