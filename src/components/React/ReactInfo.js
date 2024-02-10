import info from "../../data/react.json";
import { InfoList } from "../Info/InfoList";

export const ReactInfo = () => {
    
    return (
        <div>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index}/></li>))}
            </ul>
        </div>
    )
}