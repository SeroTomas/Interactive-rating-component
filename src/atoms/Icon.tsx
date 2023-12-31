interface Props {
    icon: string
}


const Icon = ({ icon }: Props) => {
    return (
        <div className="h-5 w-5 rounded-full flex justify-center items-center bg-n-mediumGrey">
            <img src={icon} />
        </div>
    )
}
export default Icon