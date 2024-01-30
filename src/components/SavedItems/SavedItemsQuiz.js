import { useEffect, useState } from "react";
import { Quiz } from "../Quiz/Qiuz";
import { Container } from "./SavedItemsQuiz.styled";

export const SavedItems = () => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        const savedQuizzes = localStorage.getItem('saved');
        if (savedQuizzes !== null) {
            setQuiz(JSON.parse(savedQuizzes));
        }
    }, []);

    return (
        <div>
            {quiz.length > 0 ? <Quiz quiz={quiz}/> : <Container><p>You don't have any saved items</p></Container>}
        </div>
    )
}