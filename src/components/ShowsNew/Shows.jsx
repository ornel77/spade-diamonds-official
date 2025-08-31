import { useState } from "react";
import { shows, years, yearsInt } from "../../utils/data";
import ShowItem from "./ShowItem";
import "./Shows.scss";
import {motion} from 'motion/react'

const Shows = () => {
  const [year, setYear] = useState("");
  // faire un filtre pour les past date ne prendre que ceux selon l'année sélectionné
  //  faire un filtre pour les dates des lives qui sont supérieur à la date actuel
  // si cet array est vide alors on met le message no dates yet
  // faire une fonction pour formatter la date
  const pastShows = shows.filter((show) => show.year == year);
  return (
    <section className="container">
      <div className="show-container">
        <h2>Shows</h2>
        <p className="italic text-center text-lg mb-9 text-pink-500">
          No dates yet
        </p>
        <div>
          <p className="text-center mb-5 underline">Past shows:</p>
          <select
            name="show-year"
            id="show-year"
            className="bg-transparent w-full border-2 outline-none focus:ring-0 focus:border-gray-500"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="-" className="italic">
              Select a date
            </option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          <motion.div
            key={year} // <--- force remount à chaque changement de year
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {pastShows.map((show) => (
              <ShowItem key={show.id} show={show} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Shows;
