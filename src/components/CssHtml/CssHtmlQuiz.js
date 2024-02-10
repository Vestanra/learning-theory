import quiz from "../../data/css-html.json";
import { Quiz } from "../Quiz/Qiuz";

export const CssHtmlQuiz = () => {    
    return (
        <div>
            <Quiz quiz={quiz} />
        </div>
    )
}