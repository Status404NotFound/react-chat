import React from 'react';

import {Message} from "components";

import './Home.scss'

const Home = () => {
    return (
        <section className={'home'}>
            <Message
                avatar={'https://lh3.googleusercontent.com/868ViUqJ23esYhJVYderhwRFqYT4kTKpzPWSApRX3Pi7dP6SzdDaorbV7vi4bUwwpH9Fci0=s85'}
                text={'Главный герой — 27-летний Илья Горюнов.'}
                date={new Date(2020, 6, 2)}
                isMe={false}
            />
            <Message
                avatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKr-4_3JHSaiKkrTwXGXdRXkpl5dl2o7EaGg&usqp=CAU'}
                text={'Hello World'}
                date={new Date(2020, 8, 2)}
                isMe={true}
            />
        </section>
    );
};

export default Home;