export const InfoList = ({ info, index }) => {
    return (
        <div>
            <p><span>{index + 1}</span>{info.question}</p>
            <p>{info.answer}</p>
        </div>
    )    
}