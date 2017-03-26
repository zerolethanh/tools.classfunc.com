/**
 * Created by ZE on 2017/03/26.
 */
import React from 'react';
import {render} from 'react-dom';

import Hello from './components/Hello'
import World from './components/World'
render(
    <div>
        <Hello/>
        <World/>
    </div>,
    document.getElementById('app')
);