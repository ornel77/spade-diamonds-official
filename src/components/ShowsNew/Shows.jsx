import { useState } from "react";
import { getYear, shows, years } from "../../utils/data";
import ShowItem from "./PastShowItem";
import "./Shows.scss";
import { motion } from "motion/react";
import UpcomingShowsItem from "./UpcomingShowsItem";
import { useTranslation } from "react-i18next";

const Shows = () => {
  const { t } = useTranslation();
  const sortByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  };

  const [year, setYear] = useState(years[0]);
  const currentDate = Date.now();
  const upcomingShows = shows
    .filter((show) => Date.parse(show.date) >= currentDate)
    .sort(sortByDate);
  

  const pastShows = shows.filter(
  show => Date.parse(show.date) < currentDate && getYear(show.date) === Number(year)
);


  return (
    <section className="">
      <div className="show-container">
        {/* Upcoming Show Section */}
        <div className="container">
          <h2 className="pb-7 mt-20">{t("shows.title")}</h2>
          {upcomingShows.length > 0 ? (
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]  justify-center gap-9">
              {upcomingShows.map((show) => (
                <UpcomingShowsItem key={show.id} show={show} />
              ))}
            </div>
          ) : (
            <p className="italic text-center text-lg mb-9 text-pink-500">
              {t("shows.no-date")}
            </p>
          )}
        </div>

        {/* Past Show Section */}
        <div className="mt-11 bg-gray-200 text-black ">
          <div className="container">
            <h2 className="text-center mb-5 text-black">{t("shows.past-shows")}</h2>
            <select
              name="show-year"
              id="show-year"
              className="bg-transparent w-full border-2 outline-none focus:ring-0 focus:border-gray-500"
              onChange={(e) => setYear(e.target.value)}
            >
              {/* <option value="-" className="italic text-black">
                {t("shows.select")}
              </option> */}
              {years.map((year, index) => (
                <option key={index} value={year} className="text-black">
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
      </div>
    </section>
  );
};
export default Shows;
