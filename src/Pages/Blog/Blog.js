import React from 'react';

const Blog = () => {
    return (
        <div className='my-8'>
            <div className='border p-5 mb-12 m-2'>
                <h3 className='text-2xl mb-2 font-semibold' >1. Difference between SQL and NoSQL ?</h3>
                <p className='text-xl'><b>Ans: </b> <br /> SQL (Structured Query Language) is a programming language that is used to manage and manipulate data stored in relational database management systems (RDBMS).
                    NoSQL (Not Only SQL) is a broad class of database management systems that are designed to handle large amounts of data and support operations that are not well-suited to the structured, tabular data model used by SQL databases <br /><br />
                    SQL databases use a structured, tabular data model, while NoSQL databases can use a variety of data models, including document, key-value, graph, and column-family.
                    <br />NoSQL databases are often designed to be horizontally scalable, which means that they can easily handle increases in traffic and data volume by adding more machines to the database cluster. SQL databases can also be scaled, but it can be more challenging to do so.
                </p>
            </div>
            <div className='border p-5 mb-12 m-2'>
                <h3 className='text-2xl mb-2 font-semibold' >2. What is JWT, and how does it work?</h3>
                <p className='text-xl'><b>Ans: </b><br /> JSON Web Token (JWT) is a standard for representing claims securely between two parties. It is typically used to authenticate users and pass information about the user from an identity provider to a service provider.
                    <br /><br />
                    JWTs are self-contained, meaning that they contain all the information needed to identify the user and any additional claims in a single token. They are signed, which means that the authenticity of the token can be verified, and they are encoded, which means that the contents of the token are protected from tampering.
                </p>
            </div>
            <div className='border p-5 mb-12 m-2'>
                <h3 className='text-2xl mb-2 font-semibold' >3.What is the difference between javascript and NodeJS?</h3>
                <p className='text-xl'><b>Ans: </b> <br />
                    JavaScript is a programming language that is commonly used for front-end web development. It is a high-level, dynamically-typed language that is interpreted by web browsers, and is used to add interactivity to web pages and to create web applications.
                    <br /><br />
                    Node.js is a JavaScript runtime built on <b>Chrome's V8</b> JavaScript engine. It is a platform that allows developers to execute JavaScript on the server side, outside of a web browser. Node.js provides an event-driven architecture and a non-blocking I/O API, which makes it lightweight and efficient for building scalable, real-time applications.
                </p>
            </div>
            <div className='border p-5 mb-12 m-2'>
                <h3 className='text-2xl mb-2 font-semibold' >4.How does NodeJS handle multiple requests at the same time?</h3>
                <p className='text-xl'><b>Ans: </b> <br />
                    Node.js is designed to handle multiple requests concurrently by using an event-driven, non-blocking I/O model. This means that it can handle multiple requests at the same time without creating a separate thread for each request.
                    <br /><br />
                    Node.js also has a built-in mechanism for making non-blocking I/O operations, called the <b> Event Loop</b>. When a non-blocking I/O operation is initiated, it is added to the event queue, and the main thread is notified when it is complete. This allows the main thread to continue processing other requests while the I/O operation is being performed in the background.
                </p>
            </div>
        </div>
    );
};

export default Blog;