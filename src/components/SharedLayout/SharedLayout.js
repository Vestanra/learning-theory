import { Outlet } from "react-router-dom"
import { Container, Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/quizzes">Quizzes</Link>
                    <Link to="/theory">Theory</Link>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};