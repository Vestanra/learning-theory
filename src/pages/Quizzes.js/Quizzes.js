import { Outlet } from "react-router-dom";
import { ButtonWrapp, Link } from "./Quizzes.styled";

export const Quizzes = () => {
    return (
        <div>
            <ButtonWrapp>
                <Link to="general" color="#b0b0d3">general</Link>
                <Link to="css-html" color="#c3daea">css, html</Link>
                <Link to="js" color="#C4B9B6">js</Link>
                <Link to="react" color="#a8bfa6">react</Link>
                <Link to="saved-items" color="#89a8a3">saved items</Link>
            </ButtonWrapp>
            <Outlet />
        </div>
    );
};