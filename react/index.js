/**
 * Created by ZE on 2017/03/26.
 */
import React from 'react';
import {render} from 'react-dom';
import Timer from './components/Timer'
import Tools from "./components/Tools";
import $ from 'jquery';
import _ from 'underscore';

document.addEventListener('keydown', function (event) {
    // console.log(event.keyCode);
    let el = document.getElementById('Calculator_exp');
    if (el) {
        const keyCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48,//0...9
            187, 189, 191, 222,//+-*/
            32//Space
            , 8//delete
        ];
        if (_.contains(keyCodes, event.keyCode)) {
            el.focus();
        }
    }
});
render(
    <div>
        <Timer/>
        {/*<ToolList/>*/}
        {/*<BasicExample/>*/}
        <Tools/>
    </div>,
    document.getElementById('app')
);