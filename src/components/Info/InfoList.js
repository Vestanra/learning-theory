import { useState } from "react"
import { Text, Title, Wrap } from "./InfoList.styled"

export const InfoList = ({ info, index }) => {
    const [isVisible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(!isVisible)
    }
    return (
        <Wrap>
            <Title onClick={handleClick}>{index + 1}. {info.question}</Title>
            {isVisible && <Text>{info.answer}</Text>}
        </Wrap>
    )    
}