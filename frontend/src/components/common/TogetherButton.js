import React from 'react';

class TogetherButton extends React.Component {
    constructor() {
        super();
        this.onTogetherBtnClick = this.onTogetherBtnClick.bind(this);
    }

    onTogetherBtnClick() {
        // eslint-disable-next-line
        TogetherJS(this);
        return false;
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.onTogetherBtnClick}>Start Collaborate</button>
        );
    }
}

export default TogetherButton;
