import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
 
export default function Presentation() {

  return (
    <section id="presentation" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Card className={`flex flex-col md:flex-row w-full max-w-4xl md:max-w-7xl rounded-3xl shadow-2xl m-5 transition duration-300 ease-in-out transform hover:scale-105`} style={{marginTop : "20px"}}>
       <CardHeader shadow={false} floated={false} className="w-40 h-40 md:w-72 md:h-72 shrink-0 m-1 rounded-r-none">
            <img 
            src="https://koloinatiana.github.io/mon-portfolio/images/profile-pic.png" 
            alt="image" 
            className="w-full h-full object-cover shadow-lg"
            />
        </CardHeader>
        <CardBody>
            <Typography variant="h6"className="uppercase mb-4 text-[#B284A3]">Présentation</Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
            RASOLOFOSON Koloina
            </Typography>
            <Typography color="gray" className="font-normal mb-8">
            J'ai 23 ans et je suis actuellement en Master 1 (Bac+4) en <a href="https://www.esiee-it.fr/fr/master-Lead-development" className="text-[#B284A3]">Manager en Ingénierie Informatique (M2i) MSc Lead Dev </a> à <a href="https://www.esiee-it.fr/fr" className="text-[#B284A3]">l'Esiee-It </a>. Je suis passionnée par le développement informatique et tout ceux qui concerne la création. <br/>
            Je suis déterminée, persévérante et avec une grande capacité d'adaptation. On me décrit souvent comme une personne souriante, un peu timide mais pas réservée.

            </Typography>
            <a href="https://koloinatiana.github.io/mon-portfolio/pdf/CV.pdf" target="_blank" className="inline-block" download="CV_Koloina_Rasolofoson.pdf">
                <Button variant="outlined" className="flex items-center gap-2 text-[#B284A3] hover:bg-[#B284A3] hover:text-white" style={{borderColor: "#B284A3"}}>                
                    Télecharger mon CV
                </Button>
            </a>
        </CardBody>
      </Card>
    </section>
  );
}