import { ImageWithChip, TitleAndText } from "@/molecules"

interface Props {
    image: string
    content: string
    text: string
    title: string
}

const ThankYou = ({ image, content, title, text }: Props) => {
    return (
        <div className="grid place-content-center p-6 bg-n-darkBlue w-[350px] h-[360px] rounded-2xl gap-6">
            <ImageWithChip image={image} content={content} />
            <TitleAndText title={title} text={text} style="items-center text-center"/>
        </div>
    )
}
export default ThankYou