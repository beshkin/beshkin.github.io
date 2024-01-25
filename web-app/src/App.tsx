import React from 'react';
import {MoviesList} from "./components/MoviesList";
import block from "bem-css-modules";
import s from './App.module.scss';

const b = block(s);
function App() {
    return (
        <div className={b()}>
            <MoviesList/>
        </div>
    );
}

export default App;
