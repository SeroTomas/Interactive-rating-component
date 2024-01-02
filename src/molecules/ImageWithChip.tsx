import { Chip, Image } from "@/atoms"

interface Props {
    image: string
    content: string
}

const ImageWithChip = ({ image, content }: Props) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <Image image={image}/>
            <Chip content={content}/>
        </div>
    )
}
export default ImageWithChip