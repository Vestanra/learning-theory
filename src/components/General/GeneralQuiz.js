import quiz from "../../data/general.json";
import { Quiz } from "../Quiz/Qiuz";

export const GeneralQuiz = () => {    
    return (
        <div>
            <Quiz quiz={quiz} />
        </div>
    )
}