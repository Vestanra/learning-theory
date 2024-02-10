import { Navigate, Route, Routes } from "react-router-dom";
import { Quizzes } from "../pages/Quizzes.js/Quizzes";
import { Theory } from "../pages/Theory/Theory";
import { CssHtmlQuiz } from "./CssHtml/CssHtmlQuiz";
import { JSQuiz } from "./JS/JSQuiz";
import { CssHtmlInfo } from "./CssHtml/CssHtmlInfo";
import { JSInfo } from "./JS/JSInfo";
import { ReactInfo } from "./React/ReactInfo";
import { ReactQuiz } from "./React/ReactQuiz";
import { GlobalStyle } from "./GlobalStyle";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { GeneralQuiz } from "./General/GeneralQuiz";
import { GeneralInfo } from "./General/GeneralTheory";
import { SavedItems } from "./SavedItems/SavedItemsQuiz";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route path="/" element={<Quizzes />}>
            <Route path="general" element={<GeneralQuiz/>} />
            <Route path="css-html" element={<CssHtmlQuiz />} />
            <Route path="js" element={<JSQuiz />} />
            <Route path="react" element={<ReactQuiz />} />
            <Route path="saved-items" element={<SavedItems/>} />
          </Route>
          <Route path="/theory" element={<Theory />}>
            <Route path="general" element={<GeneralInfo/>} />
            <Route path="css-html" element={<CssHtmlInfo />} />
            <Route path="js" element={<JSInfo />} />
            <Route path="react" element={<ReactInfo />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
