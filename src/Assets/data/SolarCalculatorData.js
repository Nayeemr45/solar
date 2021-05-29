import { v4 as uuidv4 } from "uuid";
import icon11 from "../Icons/icon11.svg";
import icon12 from "../Icons/icon12.svg";
import icon13 from "../Icons/icon13.svg";
import icon14 from "../Icons/icon14.svg";
import icon21 from "../Icons/icon21.svg";
import icon22 from "../Icons/icon22.svg";
import icon23 from "../Icons/icon23.svg";
import icon24 from "../Icons/icon24.svg";
import icon31 from "../Icons/icon31.svg";
import icon32 from "../Icons/icon32.svg";
import icon41 from "../Icons/icon42.svg";
import icon42 from "../Icons/icon42.svg";
import icon43 from "../Icons/icon43.svg";
import icon44 from "../Icons/icon44.svg";
import iconN from "../Icons/iconN.svg";
import iconNE from "../Icons/iconNE.svg";
import iconNW from "../Icons/iconNW.svg";
import iconS from "../Icons/iconS.svg";
import iconSE from "../Icons/iconSE.svg";
import iconSW from "../Icons/iconSW.svg";
import iconE from "../Icons/iconE.svg";
import iconW from "../Icons/iconW.svg";
import Direction_N from "../../components/Directions/Direction_N";
import Direction_NW from "../../components/Directions/Direction_NW";
import Icon1 from "../../components/Icons/Icon1";
import Icon2 from "../../components/Icons/Icon2";
import Icon3 from "../../components/Icons/Icon3";
import Icon4 from "../../components/Icons/Icon4";
import Icon5 from "../../components/Icons/Icon5";
import Icon6 from "../../components/Icons/Icon6";
import Icon7 from "../../components/Icons/Icon7";
import Icon8 from "../../components/Icons/Icon8";
import Icon9 from "../../components/Icons/Icon9";
import Icon10 from "../../components/Icons/Icon10";
import Icon11 from "../../components/Icons/Icon11";
import Icon12 from "../../components/Icons/Icon12";
import Icon13 from "../../components/Icons/Icon13";
import Icon14 from "../../components/Icons/Icon14";
import Icon15 from "../../components/Icons/Icon15";

export const SolarCalculatorData = [
  [
    { id: uuidv4(), text: "1-2", icon: <Icon1 /> },
    { id: uuidv4(), text: "3", icon: <Icon2 /> },
    { id: uuidv4(), text: "4th", icon: <Icon3 /> },
    { id: uuidv4(), text: "5 and more", icon: <Icon4 /> },
  ],
  [
    { id: uuidv4(), text: "approx. 2,000 kWh", icon: <Icon5 /> },
    { id: uuidv4(), text: "approx. 3,000 kWh", icon: <Icon6 /> },
    { id: uuidv4(), text: "approx. 4,000 kWh", icon: <Icon7 /> },
    { id: uuidv4(), text: "more than 5,000 kWh", icon: <Icon8 /> },
  ],
  [
    { id: uuidv4(), text: "Throughout the day", icon: <Icon9 /> },
    {
      id: uuidv4(),
      text: "In the mornings and the evenings",
      icon: <Icon10 />,
    },
  ],
  [
    { id: uuidv4(), text: "Flat roof", icon: icon41 },
    { id: uuidv4(), text: "Flat roof and carport", icon: <Icon12 /> },
    { id: uuidv4(), text: "Roof with incline", icon: <Icon13 /> },
    { id: uuidv4(), text: "Roof with incline and carport", icon: <Icon14 /> },
    { id: uuidv4(), text: "Carport only", icon: <Icon15 /> },
  ],
  [
    { id: uuidv4(), text: "approx. 20 m²", icon: <Icon5 /> },
    { id: uuidv4(), text: "approx. 30 m²", icon: <Icon6 /> },
    { id: uuidv4(), text: "approx. 45 m²", icon: <Icon7 /> },
    { id: uuidv4(), text: "approx. 60 m² and more", icon: <Icon8 /> },
  ],
  [
    { id: uuidv4(), text: "N", icon: <Direction_N /> },
    { id: uuidv4(), text: "NW", icon: <Direction_N /> },
    { id: uuidv4(), text: "NE", icon: <Direction_N /> },
    { id: uuidv4(), text: "E", icon: <Direction_N /> },
    { id: uuidv4(), text: "SE", icon: <Direction_N /> },
    { id: uuidv4(), text: "S", icon: <Direction_N /> },
    { id: uuidv4(), text: "Sw", icon: <Direction_N /> },
    { id: uuidv4(), text: "w", icon: <Direction_N /> },
  ],
];

export const SolarCalculatorQuestion = [
  "How many people live in your household?",
  "What is your average electricity consumption per year?",
  "What time of the day do you mostly use electricity?",
  "How steep is the slope of your roof?",
  "How big is the usable roof area?",
  "In which main direction is your roof surface oriented?",
];
