import { Navigate, Route, Routes } from "react-router-dom";
import { Quizzes } from "../pages/Quizzes.js/Quizzes";
import { Theory } from "../pages/Theory/Theory";
import { CssHtmlQuiz } from "./CssHtmlQuiz/CssHtmlQuiz";
import { JSQuiz } from "./JSQuiz/JSQuiz";
import { CssHtmlInfo } from "./CssHtmlInfo/CssHtmlInfo";
import { JSInfo } from "./JSInfo.js/JSInfo";
import { ReactInfo } from "./ReactInfo/ReactInfo";
import { ReactQuiz } from "./ReactQuiz/ReactQuiz";
import { GlobalStyle } from "./GlobalStyle";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { SavedItems } from "./SavedItemsQuiz/SavedItemsQuiz";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/quizzes/" element={<Quizzes />}>
            <Route path="css-html" element={<CssHtmlQuiz />} />
            <Route path="js" element={<JSQuiz />} />
            <Route path="react" element={<ReactQuiz />} />
            <Route path="saved-items" element={<SavedItems/>} />
          </Route>
          <Route path="/theory" element={<Theory />}>
            <Route path="css-html" element={<CssHtmlInfo />} />
            <Route path="js" element={<JSInfo />} />
            <Route path="react" element={<ReactInfo />} />
          </Route>
          <Route path="*" element={<Navigate to="/quizzes" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
