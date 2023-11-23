import "./App.css";
import Posts from "./pages/Posts";
import Layout from "./layouts/layout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./services/redux/store";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
        </Route>
    )
);

function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
