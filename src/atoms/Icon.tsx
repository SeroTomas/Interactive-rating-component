interface Props {
    icon: string
}


const Icon = ({ icon }: Props) => {
    return (
        <div className="h-10 w-10 rounded-full grid place-items-center bg-n-veryDarkBlue">
            <img src={icon} />
        </div>
    )
}
export default Icon