import { Carousel, Typography } from "@material-tailwind/react";
import { TypeAnimation } from 'react-type-animation';
 
export default function CarouselP() {
  return (
    <Carousel
        style={{
            height: '100vh',
            width: '100%',
        }} className="shadow-xl"
        autoplay={true}
        loop={true}
        autoplayDelay = "20000"
        navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src="./images/ordi.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             <TypeAnimation
                sequence={[
                  'Bienvenue !',
                  1000, 
                  'Welcome !',
                  1000,
                  'Tongasoa !',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="./images/asa.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             <p style={{ fontSize: '2em'}}>I have a</p>
             <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'winner\'s mindset',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'strong team spirit ',
                  1000,
                  'fighting spirit',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block', color: '#B284A3' }}
                repeat={Infinity}
              />
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src="./images/code.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             <p style={{ fontSize: '2em'}}>Je suis</p>
             <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Développeur Web',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Développeur Logiciel',
                  1000,
                  'Développeur Mobile',
                  1000,
                  'En recherche d\'alternance',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block', color: '#B284A3' }}
                repeat={Infinity}
              />
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}