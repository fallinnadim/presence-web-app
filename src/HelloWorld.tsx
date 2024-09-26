import { FC } from 'react';

const HelloWorld: FC = () => {
    return (
        <>
            <p data-testid="message-container">Hello Presence App</p>
            <button data-testid="button-container">count : 1</button>
        </>
    );
};

export default HelloWorld;