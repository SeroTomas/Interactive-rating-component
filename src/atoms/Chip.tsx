interface Props {
    content: string
}

const Chip = ({ content }: Props) => {
    return (
        <p className="text-p-orange text-xs bg-n-mediumGrey">{content}</p>
    )
}
export default Chip