import './Card.css'

export type CardProps = {
    icon: string
    alt: string
    subTitle: string
    body: string
    text?: string
    href?: string
}

function Card({ icon, alt, subTitle, body, text, href }: CardProps) {
    return (
        <>
            <section className='grid-item1'>
                <img className='icon'
                    src={icon}
                    alt={alt} />
                <div className='card__content'>
                    <h3 className='subtitle'>
                        {subTitle}
                    </h3>
                    <p className='body'>
                        {body}
                    </p>
                    <a href={href} target='_blank' rel='noreferrer'>
                        {text}
                    </a>
                </div>

            </section>

        </>

    )
}

export default Card


