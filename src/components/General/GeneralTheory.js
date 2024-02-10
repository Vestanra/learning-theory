import info from "../../data/general.json";
import { InfoList } from "../Info/InfoList";

export const GeneralInfo = () => {
    
    return (
        <div>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} /></li>))}
            </ul>
        </div>
    )
}