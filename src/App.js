import React from 'react';
import Navbar from "./components/Navbar.js";
import CarouselP from "./components/Carousel.js";
import CarouselEx from "./components/CarouselEx.js";
import Presentation from "./components/Presentation.js";
import Parcours from "./components/Parcours.js";
import Competence from "./components/Competence.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <main>
        <Navbar />
        <CarouselP />
        <Presentation/>
        <Parcours />
        <CarouselEx />
        <Competence />
        <Footer />
    </main>
  );
}