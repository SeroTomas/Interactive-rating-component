
interface Props {
    value: string
    handleClick: () => void
}

const Selectable = ({ value, handleClick }: Props) => {

    
    return (
        <button onClick={handleClick} type="button" className="flex justify-center items-center h-10 w-10 rounded-full bg-n-veryDarkBlue text-n-lightGrey hover:bg-n-lightGrey hover:text-white active:text-white active:bg-p-orange focus:bg-p-orange">
            {value}
        </button>
    )
}
export default Selectable