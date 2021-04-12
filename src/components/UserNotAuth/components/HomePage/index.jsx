import React, { Component } from 'react';
import './styles.css';

import SmartGenixlogo from 'icons/SmartGenixlogo.jpg';
import face1 from 'icons/face1.jpg';
import face2 from 'icons/face2.jpg';
import face3 from 'icons/face3.jpeg';
import imagen1 from 'icons/imagen1.jpg';
import imagen2 from 'icons/imagen2.jpg';
import imagen3 from 'icons/imagen3.png';
import imagen4 from 'icons/imagen4.png';
import imagen5 from 'icons/imagen5.jpg';
import imagen6 from 'icons/imagen6.jpg';
import ladelmedio from 'icons/ladelmedio.jpg';
import imagen_datos from 'icons/imagen_datos.png';
import hover_click from 'icons/hover_click.png'

class HomePage extends Component{

    render(){
        return(
            <div className="home-page-container">
                <div className="home-page-header">
                    <div className="textos-header">
                        <div class="titulos">
                        <h1>Controla todos los ambientes de tu casa</h1>
                        <h2>Iluminación, temperatura y humedad</h2>
                        </div>
                        <div>
                            <img className="ladearribe" src={SmartGenixlogo}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="contenedor sobre-nosotros">
                        <h2 class="titulo">Nuestro Producto</h2>
                        <div class="contenedor-sobre-nosotros">
                            <img src={imagen_datos} alt="" class="imagen-datos"/>
                            <div class="contenedor-textos">
                                <h3><span>1</span>Automatiza tu hogar</h3>
                                <p>Controla y automatiza el ambiente de tu hogar, manteniendo estable y a gusto la temperatura, intensidad de luz y humedad desde la web.</p>
                                <h3><span>2</span>Alerta peligros</h3>
                                <p>Smartgenix te avisará si hay una fuga de gas para que puedas estar mas tranquilo en casa.</p>
                                <h3><span>3</span>Te brinda comodidad</h3>
                                <p>Podrás controlarlo comodamente en cualquier sitio que estes y en cualquier momento, todo desde internet</p>
                            </div>
                        </div>
                    </div>
                    <div class="portafolio">
                        <h2 class="titulo">PORQUE TE LO MERECES!!</h2>
                        <div class="galeria-port">
                            <div class="imagen-port">
                                <img src={imagen1} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Innovación</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={imagen2} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Para el hogar</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={imagen3} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Manejo desde la web</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={imagen4} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Alerta peligro</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={imagen5} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Todo desde IoT</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={imagen6} alt=""/>
                                <div class="hover-galeria">
                                    <img src={hover_click} alt=""/>
                                    <p>Sin complicaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desarrolladores">
                        <h2 class="titulo">Quienes somos</h2>
                        <div class="cards">
                            <div class="card">
                                <img src={face1} alt=""/>
                                <div class="contenido-texto-card">
                                    <h4>Christian Javier Mesa</h4>
                                    <p>Ingeniero electrónico de la Javeriana, 22 años. IoT lover!
                                        mesachristian@javeriana.edu.co
                                    </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={face2} alt=""/>
                                <div class="contenido-texto-card">
                                    <h4>Diego Torres Carmona</h4>
                                    <p>Ingeniero electrónico de la Javeriana, 20 años. Le encanta la automatización.
                                        diego.torresc@javeriana.edu.co </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={face3} alt=""/>
                                <div class="contenido-texto-card">
                                    <h4>Juan Sebastian Bustacara</h4>
                                    <p>Ingeniero electrónico de la Javeriana, 21 años, perfeccionista del diseño.
                                        bustacara-js@javeriana.edu.co</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-services">
                        <div class="contenedor">
                            <h2 class="titulo">Detalles Técnicos</h2>
                            <div class="servicio-cont">
                                <div class="servicio-ind">
                                    <h3>¿Cómo funciona?</h3>
                                        <p>La tecnología SmartGenix cuenta con la implementación de recursos como sensores de luz, temperatura, humedad y gas junto a sus respectivos actuadores que monitorean y controlan el hogar, mediante una computadora central que transfiere los datos a la página web donde se podrá visualizar toda la información del hogar.</p>
                                </div>
                                <div class="servicio-ind">
                                    <img src={ladelmedio} alt=""/>
                                </div>
                                <div class="servicio-ind">
                                        <h3>Garantías</h3>
                                        <p>Las garantías de nuestros productos y servicios cubren una funcionalidad continua las 24 horas del día durante todo el año, cualquier fallo técnico sera revisado por nuestros profesionales de manera gratuita y en caso de que la falla sea responsabilidad de la empresa, se realizará el mantenimiento adecuado igualmente de manera gratuita.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div class="contenedor-footer">
                        <div class="content-foo">
                            <h4>Phone</h4>
                            <p>3216549870</p>
                        </div>
                        <div class="content-foo">
                            <h4>E-mail</h4>
                            <p>smartgenix@outlook.com</p>
                        </div>
                        <div class="content-foo">
                            <h4>Location</h4>
                            <p>Bogotá</p>
                        </div>
                    </div>
                    <h2 class="titulo-final">&copy; Juan Bustacara | Diego Torres | Christian Mesa</h2>
                </footer>
            </div>

        );
    }
}

export default HomePage;