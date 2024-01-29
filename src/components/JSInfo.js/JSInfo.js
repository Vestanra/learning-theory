import info from "../../data/js.json";
import { InfoList } from "../Info/InfoList";

export const JSInfo = () => {
    
    return (
        <div>
            <h1>JavaScript</h1>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} /></li>))}
            </ul>
        </div>
    )
}