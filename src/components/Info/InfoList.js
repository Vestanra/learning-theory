import { Text, Title, Wrap } from "./InfoList.styled"

export const InfoList = ({ info, index }) => {
    return (
        <Wrap>
            
            <Title>{index + 1}. {info.question}</Title>
            <Text>{info.answer}</Text>
        </Wrap>
    )    
}