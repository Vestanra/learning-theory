import info from "../../data/react.json";
import { InfoList } from "../Info/InfoList";

export const ReactInfo = () => {
    
    return (
        <div>
            <h1>React</h1>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} /></li>))}
            </ul>
        </div>
    )
}