import { Outlet } from "react-router-dom";
import { ButtonWrapp, Link } from "./Quizzes.styled";

export const Quizzes = () => {
    return (
        <div>
            <ButtonWrapp>
                <Link to="css-html" color="blue">css, html</Link>
                <Link to="js" color="red">js</Link>
                <Link to="react" color="green">react</Link>
                <Link to="saved-items" color="pink">saved items</Link>
            </ButtonWrapp>
            <Outlet />
        </div>
    );
};