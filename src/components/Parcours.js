import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody, Typography } from "@material-tailwind/react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

export default function Parcours() {
  return (
    <section id="parcours" className="flex top-5" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "60vw", margin: "0 auto", marginTop: "80px", marginBottom: "80px"}}>
      <Typography variant="h4"className="uppercase mb-4 text-[#B284A3]">Parcours</Typography>
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#B284A3] hover:bg-[#633e57]">
                <ArrowsUpDownIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Manager en Informatique - Lead Dev (Master 1)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gray" className="font-normal text-gray-600">
                <a href="https://www.esiee-it.fr/fr" className="text-[#B284A3]">Esiee-It </a> (Pontoise et Paris) / 2023 - 2024
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#B284A3] hover:bg-[#633e57]">
                <ArrowsUpDownIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Licence Informatique (Licence 2 et Licence 3)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gray" className="font-normal text-gray-600">
                <a href="https://www.univ-tours.fr/" className="text-[#B284A3]">Université de Tours</a> (site Blois) / 2021 - 2023
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#B284A3] hover:bg-[#633e57]">
                <ArrowsUpDownIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Licence Informatique - parcours développement
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gray" className="font-normal text-gray-600">
                Ecole Supérieure des Technologies d’information (<a href="https://esti.mg/accueil" className="text-[#B284A3]">ESTI Madagascar</a>)/ 2019 - 2021
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2 bg-[#B284A3] hover:bg-[#633e57]">
                <ArrowsUpDownIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Cours d’anglais (A2C certificate)
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gray" className="font-normal text-gray-600">
                English Teaching Program (<a href="https://www.facebook.com/etp.madagascar/" className="text-[#B284A3]">ETP</a>) / 2016 - 2019</Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
