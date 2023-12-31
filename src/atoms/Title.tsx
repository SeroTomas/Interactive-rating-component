interface Props {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <h2 className="font-overpass text-2xl">
            {title}
        </h2>
    )
}
export default Title