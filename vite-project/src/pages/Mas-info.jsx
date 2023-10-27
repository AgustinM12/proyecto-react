import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slide from '../components/Slide';
import Accordion from '../components/Accordion';

export default function MasInfo() {

    const slideData1 = {
        title: 'Régimen de Promoción de la Contratación de Trabajo Registrado',
        subtitle: '¿En que consiste?',
        listItems: [
            'Además del nuevo régimen permanente para el micro-empleadores, se establece un régimen transitorio que aplica a las empresas con menos de 80 empleados. Este régimen beneficia la contratación de nuevos puestos registrados, y consiste en descuentos temporarios en las contribuciones patronales (excluyendo obras sociales)',

            'Las empresas con 15 empleados o menos, pagarán 0% de contribuciones patronales en el primer año y 25% en el segundo año, por cada nuevo empleado, siempre que esta contratación aumente la nómina del personal (respecto de la cantidad de empleados que tenía a marzo de 2014). Por su parte, las empresas que tengan entre 16 y 80 empleados pagarán un 50% en los dos primeros años de cada nuevo puesto de trabajo formal creado.',

            'A diferencia del régimen permanente, para acceder a los beneficios de este régimen transitorio de promoción de contrataciones, los empleadores deben solicitar ejercer esta opción ante la AFIP. En otras palabras, es un beneficio optativo que no se activará si el empleador no lo demanda.'
        ],
    };

    const slideData2 = {
        title: "TITULO",
        subtitle: "SUBTITULO",
        listItems: [
            "LISTA DE ITEMS",
            "LISTA DE ITEMS",
            "LISTA DE ITEMS"
        ]
    }

    const accordionData1 = {
        title: "Demuestran mayor entusiasmo y motivación",
        itemList: [
            "Como en todo negocio o empresa, las personas que ingresan desde cero a una nueva oportunidad, llegan con mucha emoción y motivación para dar lo mejor de ellos.",
            "Desde la productividad y actitud, que pueden hacer una gran diferencia y a la par contagiar a los demás.",
            "Estas personas buscan todas las maneras de cumplir con los objetivos, lo que significa un mayor esfuerzo y dedicación para realizar las operaciones.",
        ],
    }

    const accordionData2 = {
        title: "Dispuestos a aprender",
        itemList: [
            "En algunas ocasiones, profesionales con larga carrera no les parece buena idea seguir capacitándose o actualizarse de nuevas tecnologías o metodologías que puedan mejorar su labor de venta o instalación de paneles solares.",
            "Por otra parte, quiénes comienzan en el sector tienen una mayor  predisposición de aprender desde prácticas antiguas o tradicionales hasta nuevas innovaciones que cambian el mundo del sector fotovoltaico."
        ],
    }

    const accordionData3 = {
        title: "Mayor flexibilidad",
        itemList: [
            "Las personas que inician en este mercado, suelen ser más abiertos al momento de realizar diferentes roles dentro de la empresa, desde un representante o asesor de ventas, responsable de logística, auxiliar administrativo, entre otros.",
            "Están dispuestos a comenzar desde cero para tener la oportunidad de crecer dentro de la empresa."
        ],
    }

    const accordionData4 = {
        title: "Proponen nuevas ideas",
        itemList: [
            "Contratar a personal sin experiencia a diferencia de lo que se cree que no son capaces de aportar nada, estas personas ingresan con muchas nuevas ideas y experiencias diferentes que podrían aportar una nueva perspectiva a tu empresa de paneles solares."
        ],
    }

    const accordionData5 = {
        title: "Ahorro de costes",
        itemList: [
            "Como bien sabemos, una persona con amplia experiencia y conocimiento en el sector fotovoltaico, sobre la cantidad que puede cobrar por sus honorarios.",
            "En cambio, una persona que se inicia en este mercado, el coste puede ser mucho menor al menos al principio."
        ],
    }

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

                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>

                    <div className="container p-5 carousel-inner">
                        {/* PRIMER SLIDE */}

                        <div className="carousel-item active px-3">
                            <h1 className="text-center py-4">¿Por qué deberias contratar empleados con poca o nula experiencia?</h1>
                            <ul style={{ display: 'flex', flexDirection: 'column', padding: '6.5px' }}>
                            </ul>
                            <div className="accordion accordion-flush" id="accordionFlushExample">

                                {/* PRIMER ACCORDION */}

                                <Accordion
                                    title={accordionData1.title}
                                    itemList={accordionData1.itemList}
                                />

                                {/* SEGUNDO ACCORDION */}

                                <Accordion
                                    title={accordionData2.title}
                                    itemList={accordionData2.itemList}
                                />

                                {/* TERCER ACCORDION */}
                                <Accordion
                                    title={accordionData3.title}
                                    itemList={accordionData3.itemList}
                                />

                                {/* CUARTO ACCORDION */}

                                <Accordion
                                    title={accordionData4.title}
                                    itemList={accordionData4.itemList}
                                />

                                {/* QUINTO ACCORDION */}
                                <Accordion
                                    title={accordionData5.title}
                                    itemList={accordionData5.itemList}
                                />

                            </div>
                        </div>

                        {/*  SEGUNDO SLIDE */}

                        <Slide
                            title={slideData1.title}
                            subtitle={slideData1.subtitle}
                            listItems={slideData1.listItems}
                        />

                        <Slide
                            title={slideData2.title}
                            subtitle={slideData2.subtitle}
                            listItems={slideData2.listItems}
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
