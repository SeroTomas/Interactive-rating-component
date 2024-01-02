import { Title, Text } from "@/atoms"

interface Props {
    text: string
    title: string
}

const TitleAndText = ({ text, title }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <Title title={title}/>
            <Text text={text}/>
        </div>
    )
}
export default TitleAndText