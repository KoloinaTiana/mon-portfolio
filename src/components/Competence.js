import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Carousel from "./Carousel.jsx";
import {Typography } from "@material-tailwind/react";

export default function Competence() {
    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/js.png" title="Javascript"/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/nodejs.jpg" title="NodeJS" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/java.jpg" title="Java" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/mysql.jpg" title="MySQL"  />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/php.jpg" title="PHP"  />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://koloinatiana.github.io/mon-portfolio/images/react.jpg" title="ReactJS"  />
          )
        }
      ];
      return (
        <div className="">
          <Typography variant="h4"className="uppercase mt-20 text-[#B284A3] text-center">Compétences</Typography>
          <Carousel
            cards={cards}
            height="500px"
            width="30%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      );
}