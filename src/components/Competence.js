import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Carousel from "./Carousel.jsx";
import {Typography } from "@material-tailwind/react";

export default function Competence() {
    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/js.png" title="Javascript"/>
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/nodejs.jpg" title="NodeJS" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/java.jpg" title="Java" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/mysql.jpg" title="MySQL"  />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/php.jpg" title="PHP"  />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="./images/react.jpg" title="ReactJS"  />
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