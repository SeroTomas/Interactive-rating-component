interface Props {
    value: string
    handleClick: () => void
}

const Selectable = ({ value, handleClick }: Props) => {
    return (
        <button onClick={handleClick} className="flex justify-center items-center h-5 w-5 rounded-full bg-n-mediumGrey text-n-lightGrey hover:bg-n-lightGrey hover:text-white active:text-white active:bg-p-orange">
            {value}
        </button>
    )
}
export default Selectable