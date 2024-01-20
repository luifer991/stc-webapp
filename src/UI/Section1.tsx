import './Section1.css';
import { type Section1Props } from '../vite-env';

function Section1 ({ text, title, body, alt, 
                    icon, iconTwo, iconThree, altTwo, altThree, 
                    subTitle, subTitleTwo, subTitleThree, bodyTwo, 
                    bodyThree, bodyFour }: Section1Props) {
    return(
        <>  
            <section className='section1'>
                <article className='sec-1'>
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
                </article>

                <div className="grid2">
                {/* Card */}
                <section className='grid-item'>
                    <img className='icon2'
                    src={icon} 
                    alt={alt} />
                    <h3 className='subtitle'>
                        {subTitle}
                    </h3>
                    <p className='body'>
                        {bodyTwo}
                    </p>
                </section>
                {/* Card */}
                <section className='grid-item'>
                    <img className='icon2'
                    src={iconTwo} 
                    alt={altTwo} />
                    <h3 className='subtitle'>
                        {subTitleTwo}
                    </h3>
                    <p className='body'>
                        {bodyThree}
                    </p>
                </section>
                {/* Card */}
                <section className='grid-item'>
                    <img className='icon2'
                    src={iconThree} 
                    alt={altThree} />
                    <h3 className='subtitle'>
                        {subTitleThree}
                    </h3>
                    <p className='body'>
                        {bodyFour}
                    </p>
                </section>
                </div>
            </section>  
        </>

    )
}


export default Section1;