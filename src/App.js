import React from 'react';
import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import {ReactComponent as ReactLogoSvg} from './logo.svg';
import Card from "./components/Card";
import {wordsList} from "./wordsList";

const App = () => {
    return (
        <>
            <HeaderBlock>
                <Header>Учите слова онлайн</Header>
                <Paragraph>Используйте карточки чтоб запоминать слова</Paragraph>
            </HeaderBlock>
            <HeaderBlock hideBackground>
                <Header>Продолжим?</Header>
                <ReactLogoSvg/>
            </HeaderBlock>
            <div>
                {wordsList.map(({eng, rus}, idx) => (
                    <Card key={idx} eng={eng} rus={rus} />
                    )
                )}
            </div>
        </>
    )
}

export default App;
