import React, { Component } from 'react';
import s from './Card.module.scss';

class Card extends Component {

    state = {
        done: false
    }

    onCardClick = () => {
        const { done } = this.state;
        this.setState({
            done: !done
        })
    }

    render() {
        const {eng, rus} = this.props;
        const { done } = this.state;
        const cardClass = [s.card];
        if (done) {
            cardClass.push(s.done);
        }
        return (
            <div
                className={cardClass.join(' ')}
                onClick={this.onCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        <p>{ eng }</p>
                    </div>
                    <div className={s.cardBack}>
                        <p>{ rus }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
