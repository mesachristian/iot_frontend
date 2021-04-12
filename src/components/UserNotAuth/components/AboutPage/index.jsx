import React, { Component } from 'react';
import './styles.css';

import architecture from "./resources/architecture.PNG";

import undraw_smart_home from 'icons/undraw_smart_home.png';
import undraw_Mobile from 'icons/undraw_Mobile.png';
import undraw_Analytics from 'icons/undraw_Analytics.png';

import llama_verde from 'icons/llama_verde.png';
import fan_verde from 'icons/fan_verde.png';
import bombillo_verde from 'icons/bombillo_verde.png';


const Title = (props) =>{
    return(
        <div className="about-title-container">
            <h1>{props.children}</h1>
        </div>
    );
}

const ArchitectureSection = () => {
    return(
        <div className="about-achitecture-container">

            <div>
                <Title>Arquitectura del proyecto...</Title>
            </div>
    
            <div>
                <img src={architecture} className="architecture-img" />
            </div>
        </div>
    );
};

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page-container">
                
                <SolutionSection />
                
                <SensorsSection />

                <AppSection />

                <AnalitycsSection />

                <footer>
                    <ContactSection />
                </footer>
            </div>
        );  
    }
}

const SolutionSection = () => {
    return(
        <div className="section-container">
            <div className="section-title-container-left">
                <h1 className="section-title">Una solución completa...</h1>
            </div>

            <div className="solution-section-content">
                <div className="solution-text">
                    <p>
                    <b>Smartgenix</b> es una nueva propuesta en el mercado que busca hacer de la experiencia en 
                    el hogar de las personas Colombianas una experiencia única, confortable y segura. 
                    <b>Smartgenix</b> te trae muchos beneficios como usuario. Entre ellos están el poder 
                    controlar y monitorear el estado de tu hogar en todo momento. Tendrás una aplicación móvil 
                    para controlar de manera sencilla y amigable todos los actuadores brindados por 
                    <b>Smartgenix</b>.
                    <br/><br/>
                    <b>Smartgenix</b> también usa todo el poder de la analítica de datos para poder controlar de 
                    manera automatizada todos los actuadores y poder ahorrar energía en el hogar lo cual lo 
                    convierte a <b>Smartgenix en una solución amigable con el ambiente y con tu bolsillo.</b>
                    <br/><br/>
                    <b><i>¡Continúa leyendo para saber más!</i></b>
                    </p>
                </div>

                <div className="solution-image">
                    <img src={undraw_smart_home} width="500" height="400"/>
                </div>
            </div>
        </div>
    );
}

const Sensor = (props) => {
    return(
        <div className="sensor-container">
            <div className="sensor-image-container">
                <img src={props.img_src} width="150" height="150"/>
            </div>

            <p>
                {props.children}
            </p>
        </div>
    );
}
const SensorsSection = () => {
    return(
        <div className="section-container">
            <div className="section-title-container-left">
                <h1 className="section-title">¿Qué censamos?</h1>
            </div>

            <div className="solution-section-content">
                <div className="sensor-card-container">
                    <CardLayout title={<h2>Sensor de temperatura</h2>}>
                        <Sensor img_src={fan_verde}>
                        Con los sensores de temperatura podemos usar todo el poder de la analítica de datos para 
                        controlar las velocidades de los ventiladores en tu hogar y con esto ahorramos costes en 
                        energía para nuestros usuarios. Gracias a los datos recolectados por estos sensores podemos 
                        crear modelos estadísticos para simular el aire natural dentro de tu hogar para que este 
                        siempre este fresco y dispuesto a satisfacer tu comodidad.
                        </Sensor>
                    </CardLayout>
                </div>
                <div className="sensor-card-container">
                    <CardLayout title={<h3>Sensor de gas</h3>}>
                        <Sensor img_src={llama_verde}>
                            Gracias al sensor de gas natural integrado con el sensor de temperatura smartgenix
                            es el producto adecuado para poder salvar tu vida. Smatgenix hace uso de alertas
                            personalizadas al usuario en caso de detectar fugas de gas o incluso a la hogar
                            de un incendIo no previsto.
                        </Sensor>
                    </CardLayout>
                </div>
                <div className="sensor-card-container">
                    <CardLayout title={<h3>Sensor de luz</h3>}>
                        <Sensor img_src={bombillo_verde}>
                        Con los sensores de luminosidad podemos usar todo el poder de la analítica de datos 
                        para controlar la intensidad de los actuadores lumínicos en tu hogar y con esto ahorramos 
                        costes en energía para nuestros usuarios.  
                        </Sensor>
                    </CardLayout>
                </div>
            </div>
        </div>
    );
}

const AppSection = () => {
    return(
        <div className="section-container">
            <div className="section-title-container-left">
                <h1 className="section-title">Aplicación móvil</h1>
            </div>

            <div className="solution-section-content">
                <div className="solution-text">
                    <p>
                    Smartgenix también cuenta con una <b>aplicación móvil</b> la cual te permite tener control 
                    inmediato de los actuadores que están distribuidos por tu casa. Con esta aplicación puedes 
                    controlar las diferentes velocidades de los ventiladores en tu hogar, la intensidad lumínica 
                    de cada bombillo, su color y ¡mucho más!
                    <br/><br/>
                    La aplicación móvil cuenta demás con el servicio de autenticación de Smartgenix, esto para 
                    que los tus datos se mantengan seguros ya que para Smartgenix tu confort y seguridad son lo 
                    más importante.
                    </p>
                </div>

                <div className="solution-image">
                    <img src={undraw_Mobile} width="600" height="500"/>
                </div>
            </div>
        </div>
    );
}

const AnalitycsSection = () => {
    return(
        <div className="section-container">
            <div className="section-title-container-left">
                <h1 className="section-title">Analitica de datos</h1>
            </div>

            <div className="solution-section-content">
                <div className="solution-text">
                    <p>
                    La <b>analítica de datos</b> es el factor diferenciador de Smartgenix, gracias a ella podemos usar 
                    todos nuestros datos censados para poder predecir datos futuros y los más importante usamos 
                    estos datos para un control inteligente de los actuadores en tu hogar. Esto puede llevarte a 
                    ahorros energéticos hasta del 12% mensuales en bombillos y aires acondicionados.
                    <br/><br/>
                    Gracias a la analítica de datos siempre podrás estar preparado para el clima. Nunca más el 
                    día será demasiado frio o demasiado caliente, gracias al servicio de predicción de 
                    temperatura de Smartgenix sabrás la temperatura exacta para los siguientes días siguientes!
                    </p>
                </div>

                <div className="solution-image">
                    <img src={undraw_Analytics} width="600" height="500"/>
                </div>
            </div>
        </div>
    );
}

const ContactSection = () => {
    return(
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
    );
} 


const CardLayout = ({title, children}) => {
    return(
        <div className="card-layout">
            <div className="card-title-container">
                <div className="card-title">
                    {title}
                </div>
            </div>

            <div className="card-layout-content">
                {children}
            </div>
        </div>
    );
}

export default AboutPage;