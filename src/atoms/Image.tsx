interface Props {
    image: string
    params:string
}

const Image = ({ image, params }: Props) => {
    return (
        <img src={image} className={params}/>
    )
}
export default Image