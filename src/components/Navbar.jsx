import React, { useState, useEffect } from 'react'

const Navbar = () => {

    //var titulo = "Contactos APP";

    const [titulo, setTitulo] = useState("Contactos");

    const componenteListo = () => {
        console.log("El compoente se cargo");


        setTimeout(() => {
            setTitulo("Zayra Canales");
        }, 5000);

    }

    useEffect(componenteListo, [])


    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://seocom.agency/wp-content/uploads/2019/02/bootstrap-stack.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    {titulo}
                </a>
            </div>
        </nav>
    )
}

export default Navbar