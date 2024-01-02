interface Props {
    text: string
}

const Text = ({ text }: Props) => {
    return (
        <p className=" text-n-lightGrey text-[15px]">
            {text}
        </p>
    )
}
export default Text