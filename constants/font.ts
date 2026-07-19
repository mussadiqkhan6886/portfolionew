import {Cutive, DM_Sans, Special_Elite} from "next/font/google"
import { Caveat } from "next/font/google";

export const dSans = DM_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", '800', "900"],
    style: ["normal", "italic"],
    subsets: ["latin"]
}) 

export const special = Cutive({ subsets: ["latin"], weight: ["400"] });