import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slide from '../components/Slide';

export default function MasInfo() {

    const slideData = {
        title: 'Régimen de Promoción de la Contratación de Trabajo Registrado',
        subtitle: '¿En que consiste?',
        listItems: [
            'Además del nuevo régimen permanente para el micro-empleadores, se establece un régimen transitorio que aplica a las empresas con menos de 80 empleados. Este régimen beneficia la contratación de nuevos puestos registrados, y consiste en descuentos temporarios en las contribuciones patronales (excluyendo obras sociales)',

            'Las empresas con 15 empleados o menos, pagarán 0% de contribuciones patronales en el primer año y 25% en el segundo año, por cada nuevo empleado, siempre que esta contratación aumente la nómina del personal (respecto de la cantidad de empleados que tenía a marzo de 2014). Por su parte, las empresas que tengan entre 16 y 80 empleados pagarán un 50% en los dos primeros años de cada nuevo puesto de trabajo formal creado.',

            'A diferencia del régimen permanente, para acceder a los beneficios de este régimen transitorio de promoción de contrataciones, los empleadores deben solicitar ejercer esta opción ante la AFIP. En otras palabras, es un beneficio optativo que no se activará si el empleador no lo demanda.'
        ],
    };


    return (
        <>
            <Header />

            <main className="container-fluid">

                {/* INDICADORES DEL CARRUCEL */}

                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                    </div>

                    <div className="container p-5 carousel-inner">
                        {/* PRIMER SLIDE */}

                        <div className="carousel-item active px-3">
                            <h1 className="text-center py-4">¿Por qué deberias contratar empleados con poca o nula experiencia?</h1>
                            <ul style={{ display: 'flex', flexDirection: 'column', padding: '6.5px' }}>
                            </ul>
                            <div className="accordion accordion-flush" id="accordionFlushExample">

                                {/* PRIMER ACCORDION */}
                                <div className="accordion-item">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Demuestran mayor entusiasmo y motivación
                                        </button>
                                    </h4>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul >
                                                <li>Como en todo negocio o empresa, las personas que ingresan desde cero
                                                    a
                                                    una nueva oportunidad, llegan con mucha emoción y motivación para
                                                    dar lo
                                                    mejor de ellos.</li>
                                                <li>Desde la productividad y actitud, que pueden hacer una gran
                                                    diferencia y
                                                    a la par contagiar a los demás.</li>
                                                <li>Estas personas buscan todas las maneras de cumplir con los
                                                    objetivos, lo
                                                    que significa un mayor esfuerzo y dedicación para realizar las
                                                    operaciones.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* SEGUNDO ACCORDION */}
                                <div className="accordion-item active">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Dispuestos a aprender
                                        </button>
                                    </h4>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>En algunas ocasiones, profesionales con larga carrera no les parece
                                                    buena idea seguir capacitándose o actualizarse de nuevas tecnologías
                                                    o
                                                    metodologías que puedan mejorar su labor de venta o instalación de
                                                    paneles solares.</li>
                                                <li>Por otra parte, quiénes comienzan en el sector tienen una mayor
                                                    predisposición de aprender desde prácticas antiguas o tradicionales
                                                    hasta nuevas innovaciones que cambian el mundo del sector
                                                    fotovoltaico.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* TERCER ACCORDION */}
                                <div className="accordion-item active">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                            Mayor flexibilidad
                                        </button>
                                    </h4>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Las personas que inician en este mercado, suelen ser más abiertos al
                                                    momento de realizar diferentes roles dentro de la empresa, desde un
                                                    representante o asesor de ventas, responsable de logística, auxiliar
                                                    administrativo, entre otros.</li>
                                                <li>Están dispuestos a comenzar desde cero para tener la oportunidad de
                                                    crecer dentro de la empresa.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* CUARTO ACCORDION */}
                                <div className="accordion-item active">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                            aria-expanded="false" aria-controls="flush-collapseFour">
                                            Proponen nuevas ideas
                                        </button>
                                    </h4>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Contratar a personal sin experiencia a diferencia de lo que se cree
                                                    que
                                                    no son capaces de aportar nada, estas personas ingresan con muchas
                                                    nuevas ideas y experiencias diferentes que podrían aportar una nueva
                                                    perspectiva a tu empresa de paneles solares. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* QUINTO ACCORDION */}
                                <div className="accordion-item" data-bs-interval="1000">
                                    <h4 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                            aria-expanded="false" aria-controls="flush-collapseFive">
                                            Ahorro de costes
                                        </button>
                                    </h4>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Como bien sabemos, una persona con amplia experiencia y conocimiento
                                                    en
                                                    el sector fotovoltaico, sobre la cantidad que puede cobrar por sus
                                                    honorarios.</li>
                                                <li>En cambio, una persona que se inicia en este mercado, el coste puede
                                                    ser
                                                    mucho menor al menos al principio. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/*  SEGUNDO SLIDE */}

                        <Slide
                            title={slideData.title}
                            subtitle={slideData.subtitle}
                            listItems={slideData.listItems}
                        />

                        {/*  BOTONES DEL CARRUCEL */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev" style={{ marginRight: "500px" }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next" style={{ marginLeft: "500px" }} >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>


                </div>
            </main>

            <Footer />
        </>
    )
};
