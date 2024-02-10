import info from "../../data/css-html.json";
import { InfoList } from "../Info/InfoList";

export const CssHtmlInfo = () => {
    
    return (
        <div>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} /></li>))}
            </ul>
        </div>
    )
}