import './Texts.css';

type TextsProps = {
    text: string
    title: string
    body: string
}


export function Texts({ text, title, body }: TextsProps) {
    return(
        <>
            <p className='text-2'>
                {text}
            </p>
            <h2 className='title-2'>
                {title}
            </h2>
            <h4 className='body-2'>
                {body}
            </h4>
        </>
    )
}
