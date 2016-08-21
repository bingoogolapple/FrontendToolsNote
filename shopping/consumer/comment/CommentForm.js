/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();

        // 要调用bind(this)后这里的this才能用
        let author = this.refs.author.value;
        let text = this.refs.text.value;
        console.log("提交表单", author, text);

        this.props.onCommentSubmit({author, text});

        this.refs.author.value = "";
        this.refs.text.value = "";
    }

    render() {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                    <input type="text" placeholder="姓名" ref="author"/>
                </div>
                <div className="field">
                    <textarea type="text" placeholder="评论" ref="text"/>
                </div>
                <div className="ui small icon input">
                    <input type="text" placeholder="Search small..."/>
                    <i className="search icon"></i>
                </div>
                <i className="diners club icon"></i>
                <button type="submit" className="ui blue button">添加评论</button>

                <div className="ui labeled button" tabindex="0">
                    <div className="ui red button">
                        <i className="heart icon"></i> Like
                    </div>
                    <a className="ui basic red left pointing label">
                        1,048
                    </a>
                </div>
                <div className="ui ordered steps">
                    <div className="completed step">
                        <div className="content">
                            <div className="title">Shipping</div>
                            <div className="description">Choose your shipping options</div>
                        </div>
                    </div>
                    <div className="completed step">
                        <div className="content">
                            <div className="title">Billing</div>
                            <div className="description">Enter billing information</div>
                        </div>
                    </div>
                    <div className="active step">
                        <div className="content">
                            <div className="title">Confirm Order</div>
                            <div className="description">Verify order details</div>
                        </div>
                    </div>
                </div>
                <div className="ui steps">
                    <div className="step">
                        <i className="truck icon"></i>
                        <div className="content">
                            <div className="title">Shipping</div>
                            <div className="description">Choose your shipping options</div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export {CommentForm as default};
