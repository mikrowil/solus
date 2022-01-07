import {Provider} from "react-redux";
import store from './src/store/store'
import NavGroup from "./src/NavGroup";

/**
 * Entry point of the application
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
    return (
        <Provider store={store}>
            <NavGroup/>
        </Provider>
    );
}

