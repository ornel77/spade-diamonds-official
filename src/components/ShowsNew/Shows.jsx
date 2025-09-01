import { useState } from "react";
import { shows, years } from "../../utils/data";
import ShowItem from "./ShowItem";
import "./Shows.scss";
import { motion } from "motion/react";
import CurrentShowsItem from "./CurrentShowsItem";

const Shows = () => {
  const sortByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  };
  const [year, setYear] = useState("");
  const currentDate = Date.now();
  const currentShows = shows
    .filter((show) => Date.parse(show.date) > currentDate)
    .sort(sortByDate);

  const pastShows = shows.filter(
    (show) => show.year == year && Date.parse(show.date) < currentDate
  );

  return (
    <section className="container">
      <div className="show-container">
        <h2>Shows</h2>
        {currentShows.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-center items-center gap-9">
            {currentShows.map((show) => (
              <CurrentShowsItem key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <p className="italic text-center text-lg mb-9 text-pink-500">
            No dates yet
          </p>
        )}
        <div className="mt-11">
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
