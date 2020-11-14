import React from 'react';


const Contact = () => {

    let emailAddress: string = 'daniel.gurney@gmail.com';

    return (
        <main>
            <p>
                If you'd like to send me an email, please feel free to get in touch with me by <a href={`mailto:${emailAddress}`}>sending me an email.</a>
            </p>
        </main>
    )
}


export default Contact;