import { Outlet,} from "react-router-dom";
import { Wrap, Link } from "./Theory.styled";

export const Theory = () => {
    return (
        <div>
            <Wrap>
                <li>
                    <Link to="css-html">css-html</Link>
                </li>
                <li>
                    <Link to="js">js</Link>
                </li>
                <li>
                    <Link to="react">react</Link>
                </li>
            </Wrap>
            <Outlet/>
        </div>
    )
};