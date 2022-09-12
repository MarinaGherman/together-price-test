import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

import s from "./App.module.scss";

const App = () => (
    <div className={s.appContainer}>
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </div>
);

export default App;
