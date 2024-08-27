import React from 'react';

function Home() {
    return (
        <section id="home" className="home">
            <div className="intro">
                <h2>Welcome to My Portfolio</h2>
                <p>I am a passionate Senior Software Engineer with expertise in full-stack development and cloud solutions.</p>
                <button onClick={() => window.location.href = '#contact'}>Get in Touch</button>
            </div>
        </section>
    );
}

export default Home;
