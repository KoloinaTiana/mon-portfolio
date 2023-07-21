import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

export default function CarouselEx() {

  const [avatarSize, setAvatarSize] = useState("xxl");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 830); // You can adjust the breakpoint here
    };

    handleResize(); // Call once on initial load

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselHeight = isSmallScreen ? "80vh" : "100vh";

  // Utilisez useEffect pour détecter la taille de l'écran lors du chargement de la page
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setAvatarSize("xxl");
      } else if (window.innerWidth >= 1024) {
        setAvatarSize("xl");
      } else if (window.innerWidth >= 768) {
        setAvatarSize("lg");
      } else {
        setAvatarSize("md");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour définir la taille de l'avatar lors du chargement de la page

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ( 
    <section id="experience">
      <Carousel style={{
            height: carouselHeight,
            width: '100%',
      }} className="shadow-xl" autoplay={true} loop={true} autoplayDelay="15000">
        <div className="h-full w-full">
          <img
            src="https://koloinatiana.github.io/mon-portfolio/images/saisie.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex flex-col md:flex-row">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-xl md:text-4xl"
                  >
                    Opératrice de saisie (Job d'été)
                  </Typography>
                  <Typography
                    variant="h6"
                    className="mb-4 text-lg md:text-2xl text-[#B284A3]"
                  >
                    Tripalio
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    <ul className="list-disc text-md md:text-lg">
                      <li>Recherche</li>
                      <li>Saisie dans une base de donnée</li>
                    </ul>
                    
                  </Typography>
                  <div className="flex gap-2">
                    <a href="https://presse.tripalio.fr/" target="_blank">
                      <Button size="lg" color="white">
                        Voir le site
                      </Button>
                    </a>
                  </div>
              </div>
              <div className="ml-10">
                <div className="grid grid-cols-3 gap-6">
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/chrome.png" alt="recherche" title="Recherche" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/excel.png" alt="excel" title="Excel"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/organisation.jpg" alt="organisation" title="Organisation" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://koloinatiana.github.io/mon-portfolio/images/dev.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex flex-col md:flex-row">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-4xl"
                >
                  Stagiaire développeur (Stage)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-lg md:text-2xl text-[#B284A3]"
                >
                  Rester Libre !
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc text-md md:text-lg">
                    <li>Maintenance du nouveau site</li>
                    <li>Tests</li>
                    <li>Documentation</li>
                  </ul>
                </Typography>
                <div className="flex gap-2">
                  <a href="https://resterlibre.org/" target="_blank">
                    <Button size="lg" color="white">
                      Voir le site
                    </Button>
                  </a>
                </div>
              </div>
              <div className="ml-10">
                <div className="grid grid-cols-3 gap-6">
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/test.png" alt="test" title="Test" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/wordpress.png" alt="wordpress" title="Wordpress"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/mysql.jpg" alt="mysql" title="Mysql" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/word.png" alt="word" title="Word"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/rédaction.jpg" alt="rédaction" title="Rédaction"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://koloinatiana.github.io/mon-portfolio/images/mc.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex flex-col md:flex-row">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-4xl"
                >
                  Équipier polyvalent (Job étudiant)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-lg md:text-2xl text-[#B284A3]"
                >
                  Memphis Coffee - BLOIS
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc text-md md:text-lg">
                    <li>Prendre des commandes</li>
                    <li>Accueillir et servir les clients</li>
                    <li>Aide en cuisine</li>
                  </ul>
                </Typography>
                <div className="flex gap-2">
                  <a href="https://restaurants.memphis-restaurant.com/Blois/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness-website" target="_blank">
                    <Button size="lg" color="white">
                      Voir le site
                    </Button>
                  </a>
                </div>
              </div>
              <div className="ml-10">
                <div className="grid grid-cols-3 gap-6">
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/adapt.jpg" alt="adaptabilité" title="Adaptabilité" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/vitesse.jpg" alt="vitesse" title="Vitesse"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/patience.jpg" alt="patience" title="Patience" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/vente.png" alt="vente" title="Vente"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/equipe.jpg" alt="equipe" title="Travail d'équipe"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://koloinatiana.github.io/mon-portfolio/images/vp.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex flex-col md:flex-row">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-4xl"
                >
                  Développeur junior (Alternance)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-lg md:text-2xl text-[#B284A3]"
                >
                  Vanilla Pay - Madagascar
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc text-md md:text-lg">
                    <li>Concevoir des sites webs </li>
                    <li>Sites e-commerce </li>
                    <li>Concevoir des applications </li>
                    <li>Tests</li>
                  </ul>
                </Typography>
                <div className="flex gap-2">
                  <a href="https://moncompte.ariarynet.com/" target="_blank">
                    <Button size="lg" color="white">
                      Voir le site
                    </Button>
                  </a>
                </div>
              </div>
              <div className="ml-10">
                <div className="grid grid-cols-3 gap-6">
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/js.png" alt="js" title="Javascript" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/nodejs.jpg" alt="nodejs" title="Nodejs"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/Api.png" alt="api" title="API"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/postgresql.jpg" alt="postgresql" title="Postgresql" size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/php.jpg" alt="php" title="Php"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="https://koloinatiana.github.io/mon-portfolio/images/symfony.png" alt="symfony" title="Symfony"  size={avatarSize} variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}