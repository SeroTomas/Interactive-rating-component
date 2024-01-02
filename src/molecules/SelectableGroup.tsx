import { Selectable } from "@/atoms"
import { selectable } from "@/models"
interface Props {
    data: selectable[]
    handleClick: (value: string) => void
}

const SelectableGroup = ({ data, handleClick }: Props) => {
    return (
        <div className="flex justify-between">
            {
                data.map(element => <Selectable value={element.value} key={element.id} handleClick={() => handleClick(element.value)} />)
            }
        </div>
    )
}
export default SelectableGroup