import { useTranslation } from "react-i18next";

const CurrentShowsItem = ({ show }) => {
  const { t, i18n } = useTranslation();
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const dateObj = new Date(show.date);
  const formatedDate = i18n.language == "en" ? dateObj.toLocaleDateString("en-UK", options) : dateObj.toLocaleDateString("fr-FR", options)
  const [day, month, year] = formatedDate.split(" ");

  return (
    <article className="flex gap-5 shadow-xl p-5 rounded-md bg-black">
      <section className="uppercase text-4xl font-extrabold">
        <p> {day} </p>
        <p> {month} </p>
        <p> {year} </p>
      </section>
      <section className="flex flex-col gap-4">
        <div className="space-y-0.5">
          <p className="font-bold text-xl">{show.location} </p>
          <p className="italic"> {show.venue} </p>
          <p className=" text-sm"> {show.time} </p>
        </div>
        <div>
          {show.isInfo && (
            <a
              href={show.infoLink}
              target="_blank"
              className=" cursor-pointer uppercase  border-2 border-blue-500 text-blue-500 px-3 py-1.5 rounded-sm text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              {t("shows.date-details")}
            </a>
          )}
        </div>
      </section>
    </article>
  );
};
export default CurrentShowsItem;
