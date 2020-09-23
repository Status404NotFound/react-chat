import React from 'react';

import admin_avatar from 'assets/img/admin_avatar.png';
import woman_avatar from 'assets/img/woman_avatar.png';

import Pikachu from 'assets/img/Pikachu.png'
import Charmander from 'assets/img/Charmander.png'
import Bulbasaur from 'assets/img/Bulbasaur.png'

import {Message} from "components";

import './Home.scss'

const Home = () => {
    return (
        <section className={'home'}>
            <Message
                avatar={admin_avatar}
                text={'Hello'}
                date={new Date(2020, 6, 2)}
            />
            <Message
                avatar={woman_avatar}
                text={'Hello MF)'}
                date={new Date(2020, 6, 2)}
                isMe={true}
                isReaded = {true}
            />
            <Message
                avatar={admin_avatar}
                text={'Check this shit)'}
                date={new Date(2020, 6, 2)}
                attachments={[
                    {
                        filename: 'Pikachu',
                        url: Pikachu
                    },
                    {
                        filename: 'Charmander',
                        url: Charmander
                    },
                    {
                        filename: 'Bulbasaur',
                        url: Bulbasaur
                    }
                ]}
            />
        </section>
    );
};

export default Home;
