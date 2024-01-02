import { Icon, SubmitBtn } from "@/atoms"
import { selectable } from "@/models"
import { SelectableGroup, TitleAndText } from "@/molecules"
import { FormEvent } from "react"


export interface Props {
    icon: string
    title: string
    text: string
    data: selectable[]
    handleClick: (value: string) => void
    handleChange: () => void
}

const HowDidWeDo = ({ icon, title, text, data, handleClick, handleChange }: Props) => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleChange();
    }

    return (
        <div className="flex flex-col bg-n-darkBlue w-[350px] p-6 rounded-2xl gap-6">
            <Icon icon={icon} />
            <TitleAndText text={text} title={title} />
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <SelectableGroup data={data} handleClick={handleClick} />
                <SubmitBtn />
            </form>
        </div>
    )
}
export default HowDidWeDo