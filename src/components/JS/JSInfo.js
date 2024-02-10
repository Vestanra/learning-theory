import info from "../../data/js.json";
import { InfoList } from "../Info/InfoList";

export const JSInfo = () => {
    
    return (
        <div>
            <ul>
                {info.map(((el, index) => <li key={el.id}><InfoList info={el} index={index} title={'JavaScript'} /></li>))}
            </ul>
        </div>
    )
}