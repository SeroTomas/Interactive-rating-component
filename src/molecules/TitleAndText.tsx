import { Title, Text } from "@/atoms"

interface Props {
    text: string
    title: string
    style?: string
}

const TitleAndText = ({ text, title, style }: Props) => {
    return (
        <div className={` flex flex-col gap-4 ${style}`}>
            <Title title={title}/>
            <Text text={text}/>
        </div>
    )
}
export default TitleAndText