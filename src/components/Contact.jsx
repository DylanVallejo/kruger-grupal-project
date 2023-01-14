import { useState } from 'react';
import style from './styles/Contact.module.css';

const Contact = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [textarea, setTextarea] = useState("");

    const onChangeHandler = (fieldName, value) => {
        switch (fieldName) {
            case "nombre":
                setNombre(value);
                break;
            case "apellido":
                setApellido(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "asunto":
                setAsunto(value);
                break;
            case "textarea":
                setTextarea(value);
                break;
            default:
                break;
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        /*         if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || asunto.trim() === "" || setTextarea.trim() === "") {
                    alert("Todos los campos son requeridos.");
                } else { */
        alert("Gracias por escribirnos.");
        setNombre("");
        setApellido("");
        setEmail("");
        setAsunto("");
        setTextarea("");
        //}
    }

    return (
        <div className={style.contactContainer}>
            <h1>Formulario de contacto</h1>
            <form onSubmit={(e) => { onSubmitHandler(e) }}>
                <input type="text" required placeholder="Nombres"
                    value={nombre} onChange={(e) => { onChangeHandler("nombre", e.target.value) }} />
                <input type="text" required placeholder="Apellidos"
                    value={apellido} onChange={(e) => { onChangeHandler("apellido", e.target.value) }} />
                <input type="email" required placeholder="Correo electrónico"
                    value={email} onChange={(e) => { onChangeHandler("email", e.target.value) }} />
                <input type="text" required placeholder="Asunto"
                    value={asunto} onChange={(e) => { onChangeHandler("asunto", e.target.value) }} />
                <textarea id="textarea" required placeholder="Escriba su mensaje..."
                    value={textarea} onChange={(e) => { onChangeHandler("textarea", e.target.value) }}></textarea>
                <button type="submit">Get in Touch!</button>
            </form>
        </div>
    );
};

export default Contact;