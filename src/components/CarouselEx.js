import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";

export default function CarouselEx() {

  return ( 
    <section id="experience">
      <Carousel style={{
            height: '100vh',
            width: '100%',
      }} className="shadow-xl" autoplay={true} loop={true} autoplayDelay="15000">
        <div className="h-full w-full">
          <img
            src="./images/saisie.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Opératrice de saisie (Job d'été)
                  </Typography>
                  <Typography
                    variant="h6"
                    className="mb-4 text-xl md:text-2xl lg:text-3xl text-[#B284A3]"
                  >
                    Tripalio
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    <ul className="list-disc">
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
                  <Avatar src="./images/chrome.png" alt="recherche" title="Recherche" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/excel.png" alt="excel" title="Excel"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/organisation.jpg" alt="organisation" title="Organisation" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="./images/dev.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="flex">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Stagiaire développeur (Stage)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-xl md:text-2xl lg:text-3xl text-[#B284A3]"
                >
                  Rester Libre !
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc">
                    <li>Maintenance du nouveau site</li>
                    <li>Tests</li>
                    <li>Documentation</li>
                  </ul>
                </Typography>
                  <a href="https://resterlibre.org/" target="_blank">
                    <Button size="lg" color="white">
                      Voir le site
                    </Button>
                  </a>
              </div>
              <div className="ml-10">
                <div className="grid grid-cols-3 gap-6">
                  <Avatar src="./images/test.png" alt="test" title="Test" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/wordpress.png" alt="wordpress" title="Wordpress"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/mysql.jpg" alt="mysql" title="Mysql" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/word.png" alt="word" title="Word"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/rédaction.jpg" alt="rédaction" title="Rédaction"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="./images/mc.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="flex">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Équipier polyvalent (Job étudiant)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-xl md:text-2xl lg:text-3xl text-[#B284A3]"
                >
                  Memphis Coffee - BLOIS
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc">
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
                  <Avatar src="./images/adapt.jpg" alt="adaptabilité" title="Adaptabilité" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/vitesse.jpg" alt="vitesse" title="Vitesse"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/patience.jpg" alt="patience" title="Patience" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/vente.png" alt="vente" title="Vente"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/equipe.jpg" alt="equipe" title="Travail d'équipe"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="./images/vp.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="flex">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Développeur junior (Alternance)
                </Typography>
                <Typography
                  variant="h6"
                  className="mb-4 text-xl md:text-2xl lg:text-3xl text-[#B284A3]"
                >
                  Vanilla Pay - Madagascar
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  <ul className="list-disc">
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
                  <Avatar src="./images/js.png" alt="js" title="Javascript" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/nodejs.jpg" alt="nodejs" title="Nodejs"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/Api.png" alt="api" title="API"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/postgresql.jpg" alt="postgresql" title="Postgresql" size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/php.jpg" alt="php" title="Php"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                  <Avatar src="./images/symfony.png" alt="symfony" title="Symfony"  size="xxl" variant="rounded" className="transition duration-300 ease-in-out transform hover:scale-105"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}