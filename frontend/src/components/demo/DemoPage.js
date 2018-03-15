import React, { Component } from 'react';
import TextInput from '../common/TextInput';
import TogetherButton from '../common/TogetherButton';

class DemoPage extends Component {
    render() {
        return (
            <div>
                <TextInput />
                <TogetherButton />
            </div>
        );
    }
}

export default DemoPage;
