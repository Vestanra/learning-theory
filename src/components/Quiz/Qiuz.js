import { useEffect, useState } from "react"
import { Button, ButtonSvg, ButtonsWrap, Card, Container, Wrap, Text } from "./Quiz.styled";
import { RiBookmarkFill } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";
import { Navigate } from "react-router-dom";

export const Quiz = ({ quiz }) => {
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [selected, setSelected] = useState(false);
    
    const [saved, setSaved] = useState(() => {
        const savedQuizzes = localStorage.getItem('saved')
        if (savedQuizzes !== null) {
            return JSON.parse(savedQuizzes)
        }
        return [];
    });

    const addToSaved = () => {
        setSaved(saved => [...saved, quiz[index]]); 
    }

    const removeFromSaved = () => setSaved(saved => saved.filter(el =>el.id !== quiz[index].id));

    const selectedHandler = () => {
        setSelected(!selected);
        if (!selected) {
            addToSaved()
        } else {
            removeFromSaved()
        }
    };

    useEffect(() => {
        localStorage.setItem('saved', JSON.stringify(saved))
    }, [saved]);

     useEffect(() => {
         const isItem = saved.some(el => el.id === quiz[index].id)
         if (isItem) {
              return setSelected(true)         
        }
    }, [index, quiz, saved]);


    const increment = () => {
        setIndex(index + 1);
        setFlipped(false);
        setSelected(false);
    };

    const decrement = () => {
        setIndex(index - 1);
        setFlipped(false);
        setSelected(false);
    }

    const onFinish = () => {
        setResult(true);
    }

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    if (result) {
        return <Navigate to="/quizzes" replace />
    };

    return (
        <Container>
            <ButtonSvg type="button" onClick={selectedHandler}>{selected ? <RiBookmarkFill /> : <RiBookmarkLine />}</ButtonSvg>
            <Wrap >
                <Card onClick={handleCardClick}>
                    {!flipped ?
                        <Text>{index + 1}. {quiz[index].question}</Text> :
                        <Text>{quiz[index].answer}</Text>}
                </Card>
            </Wrap>
            <ButtonsWrap>
                {index > 0 ? <Button type="button" onClick={decrement}>Back</Button> : <Button type="button" disabled>Back</Button>}
                {index < quiz.length - 1 ? <Button type="button" onClick={increment}>Next</Button> : <Button type="button" onClick={onFinish}>Finish</Button>}
            </ButtonsWrap>
        </Container>
    );
};