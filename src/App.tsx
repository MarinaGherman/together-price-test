import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store";

import s from "./App.module.scss";

const App = () => (
    <Provider store={store}>
        <div className={s.appContainer}>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    </Provider>
);

export default App;
