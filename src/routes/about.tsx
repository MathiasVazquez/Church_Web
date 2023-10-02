import React from "react";
import PageHeader from "../components/header/PageHeader";
import Footer from "../components/footer/Footer";
import "./about.css";

import { Box, Container, Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <PageHeader />
      <Box sx={{ paddingBottom: "3.8rem" }}>
        <div className="img-title" />
        <Container
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="title-nosotros">
            <span>IBCBV | Sobre Nosotros</span>
          </div>
          <div className="text-nosotros">
            A mediados del año 2015 algunos hermanos habíamos salido de varias
            congregaciones por razones del libertinaje rampante y la escasa
            importancia que le daban al estudio de las ecrituras, así
            coincidimos en reunirnos cada domingo en una plaza de la ciudad de
            Ñemby, para buscar la guia del Señor, y poder encontrar una
            congregación donde reunirnos.
            <br />
            <br />
            <br />
            Luego de tres meses aquello terminó convirtiéndose en una incipiente
            obra, y entendiendo que estábamos siendo guiados por Dios, notamos
            esta situación, y asumimos la responsabilidad de constituirnos como
            una pequeña iglesia local.
            <br />
            <br />
            <br />
            Comenzamos un intenso estudio de las confesiones del siglo XVII,
            terminamos adoptando la CBFL 1689 "Confesión Bautista de Fe de
            Londres de 1689" como nuestra, y nos constituimos formalmente como
            una iglesia bautista que abraza dicha confesión, como una fiel
            exposición del cuerpo de doctrina que creemos.
          </div>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default About;
