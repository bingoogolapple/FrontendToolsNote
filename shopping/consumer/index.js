/**
 * Created by bingoogolapple on 16/8/21.
 */

import '../bower_components/semantic/dist/semantic.min.css';
import React from "react";
import ReactDOM from "react-dom";
import CommentBox from './comment/CommentBox';

ReactDOM.render(
    <CommentBox />,
    document.getElementById('app')
);