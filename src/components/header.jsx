import React from 'react';
import FromMe from './form';

export default function baseApparelMain() {
    return (
        <section>
            <h1 id='base-title'><span id='base-pink'> We're</span> coming soon
            </h1>
            <p id='base-text'>
                Hello fellow shoppers! We're currently building our new fashion store.
                Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <FromMe />
        </section>
    )
}