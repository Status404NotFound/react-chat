import React from 'react';

import admin_avatar from "assets/img/admin_avatar.png";
import woman_avatar from "assets/img/woman_avatar.png";

import {Message} from "components";

import './Home.scss'

const Home = () => {
    return (
        <section className={'home'}>
            <Message
                avatar={woman_avatar}
                text={'Главный герой — 27-летний Илья Горюнов.'}
                date={new Date(2020, 6, 2)}
            />
            <Message
                avatar={admin_avatar}
                text={'Главный герой — 27-летний Илья Горюнов.'}
                date={new Date(2020, 6, 2)}
                isMe={true}
                isReaded = {true}
            />
        </section>
    );
};

export default Home;
