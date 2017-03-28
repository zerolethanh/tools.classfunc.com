/**
 * Created by ZE on 2017/03/26.
 */
import React from 'react';
import {render} from 'react-dom';
import Timer from './components/Timer'
import Tools from "./components/Tools";
render(
    <div>
        <Timer/>
        {/*<ToolList/>*/}
        {/*<BasicExample/>*/}
        <Tools/>
    </div>,
    document.getElementById('app')
);