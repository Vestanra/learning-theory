import info from "../../data/css-html.json";
import { InfoList } from "../Info/InfoList";

export const CssHtmlInfo = () => {
    
    return (
        <div>
            <h1>HTML, CSS</h1>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} /></li>))}
            </ul>
        </div>
    )
}