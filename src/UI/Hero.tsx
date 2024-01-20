import Button from "../Components/Button";
import Title from "../Components/Title";
import './Hero.css';

function Hero () {
    return(
        <>
            <div className="hero">
                 <Title />
                <div className="buttons">
                    <Button clas="l-btn" text="Aprender Más" />
                    <Button clas="s-btn" text="Suscribete" />
                </div>
            </div>
        
        </>
    )
}

export default Hero