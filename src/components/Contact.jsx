const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Ready to connect with me?</h1>
            <form action="#">
                <h4>Let's Connect!</h4>
                <input type="text" placeholder="First name" className="nombre" />
                <input type="text" placeholder="Last name" className="apellido" />
                <input type="email" placeholder="Email address" className="email" />
                <textarea name="textarea" id="textarea" placeholder="Enter Text here"></textarea>
                <button type="submit">Get in Touch!</button>
            </form>
        </div>
    );
};

export default Contact;