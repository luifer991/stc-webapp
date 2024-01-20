import './Section.css'
import { type SectionProps } from '../vite-env'

function Section ({ text, title, body, image, alt, icon, 
                    iconTwo, altTwo, altThree, subTitle, 
                    subTitleTwo, bodyTwo, bodyThree 
                }: SectionProps) {
    return(
        <section>
            <article>
                {/* Texts */}
                <p className='text-2'>
                    {text}
                </p>
                <h2 className='title-2'>
                    {title}
                </h2>
                <h4 className='body-2'>
                    {body}
                </h4>
            
            <div className='grid'>
                {/* Card */}
                <section className='grid-item'>
                    <img className='icon'
                    src={icon} 
                    alt={alt} />
                    <h3 className='subtitle'>
                        {subTitle}
                    </h3>
                    <p className='body'>
                        {bodyTwo}
                    </p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className="card-button">Aprender Más</button>
                    </a>
                </section>
                {/* Card */}
                <section className='grid-item'>
                    <img className='icon'
                    src={iconTwo} 
                    alt={altTwo} />
                    <h3 className='subtitle'>
                        {subTitleTwo}
                    </h3>
                    <p className='body'>
                        {bodyThree}
                    </p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button className="card-button">Más Información</button>
                    </a>
                    
                </section>
            </div>
            </article>
            {/* Image */}
                <img 
                className='image'
                src={image}
                alt={altThree} />
        </section>
    )
}

export default Section