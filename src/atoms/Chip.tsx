interface Props {
    content: string
}

const Chip = ({ content }: Props) => {
    return (
        <p className="text-p-orange text-sm bg-n-veryDarkBlue py-1 px-3 rounded-2xl ">
            {content}
        </p>
    )
}
export default Chip