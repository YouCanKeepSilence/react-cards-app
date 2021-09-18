import React from 'react';
import s from './Container.module.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enableSlice: props.enableSlice || false,
            currentIndex: props.startIndex || 0,
            childrenCount: props.children.length || 0
        }
    }

    onPrevious = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        })
    }
    onNext = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }

    hasNext = () => {
        return this.state.currentIndex < this.state.childrenCount - 1;
    }

    hasPrevious = () => {
        return this.state.currentIndex > 0;
    }

    render() {
        const {children} = this.props;
        const {enableSlice, currentIndex, childrenCount} = this.state;
        const hasNext = this.hasNext() ? '' : 'true';
        const hasPrevious = this.hasPrevious() ? '' : 'true';
        return (
            <div className={s.container}>
                {enableSlice ? children.slice(currentIndex, currentIndex + 1) : children}
                {enableSlice && <div className={s.slice}>
                    <button onClick={this.onPrevious} className={s.previous} disabled={hasPrevious}> &#8592; </button>
                    <div className={s.progress}> {currentIndex + 1} / {childrenCount} </div>
                    <button onClick={this.onNext} className={s.next} disabled={hasNext}> &#8594; </button>
                </div>}
            </div>

        );
    }
}

export default Container;
