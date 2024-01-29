import quiz from "../../data/react.json";
import { Quiz } from "../Quiz/Qiuz";

export const ReactQuiz = () => {
    return (
        <div>
            <Quiz quiz={quiz}/>
        </div>
    )
};