import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className="mega_counter">
                {this.props.count}
            </div>
        );
    }
};

export default Counter;
