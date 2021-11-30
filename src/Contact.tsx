import React, { useState } from 'react';


const Contact = () => {

    const emailAddress: string = 'daniel.gurney@gmail.com';

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");


    const handleSubmit = (e: React.SyntheticEvent) => {

        const encodedData = [
            'form-name=contact',
            `name=${encodeURIComponent(name)}`,
            `email=${encodeURIComponent(email)}`,
            `message=${encodeURIComponent(message)}`,
        ]

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encodedData.join('&')
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    }


    return (
        <main>

            <p>
                If you'd like to send me an email, please feel free to get in touch with me by <a href={`mailto:${emailAddress}`}>sending me an email</a> or complete the form below:
            </p>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                    Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                    Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                    Message: <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} />
                    </label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </main>
    )
}


export default Contact;