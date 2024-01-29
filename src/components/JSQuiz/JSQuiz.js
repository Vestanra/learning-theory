import quiz from "../../data/js.json";
import { Quiz } from "../Quiz/Qiuz";

export const JSQuiz = () => {
    return (
        <div>
            <Quiz quiz={quiz} title={'JavaScript'}/>
        </div>
    )
};