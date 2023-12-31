interface Props {
    text: string
}

const Text = ({ text }: Props) => {
    return (
        <p className="font-overpass text-n-lightGrey text-xs">
            {text}
        </p>
    )
}
export default Text