import { Link, Outlet } from "react-router-dom";

export const Theory = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="css-html">css-html</Link>
                </li>
                <li>
                    <Link to="js">js</Link>
                </li>
                <li>
                    <Link to="react">react</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
};