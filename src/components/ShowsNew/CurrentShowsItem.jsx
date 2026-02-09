import { useTranslation } from "react-i18next";

const CurrentShowsItem = ({ show }) => {
  const { t, i18n } = useTranslation();
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const dateObj = new Date(show.date);
  const formatedDate =
    i18n.language == "en"
      ? dateObj.toLocaleDateString("en-UK", options)
      : dateObj.toLocaleDateString("fr-FR", options);
  const [day, month, year] = formatedDate.split(" ");
  console.log(show);

  return (
    // <article className="flex gap-5 shadow-xl p-5 rounded-md">
    //   <section className="uppercase text-4xl font-extrabold">
    //     <p> {day} </p>
    //     <p> {month} </p>
    //     <p> {year} </p>
    //   </section>
    //   <section className="flex flex-col gap-4">
    //     <div>
    //       <p className="font-bold text-xl">{show.location} </p>
    //       <p className="italic text-blue-500"> {show.venue} </p>
    //       <p className="italic text-sm"> {show.time} </p>
    //     </div>
    //     <div>
    //       {show.isInfo && (
    //         <a
    //           href={show.infoLink}
    //           target="_blank"
    //           className="underline cursor-pointer"
    //         >
    //           {t("shows.date-details")}
    //         </a>
    //       )}
    //     </div>
    //   </section>
    // </article>
    // ui like a concert ticket
    <article className="shadow-xl bg-black">
      <div>
        <img src={show.illu} alt="" className="" />
      </div>
      <div className="p-5">
        <p className="flex justify-between text-pink-500">
          <span>
            {day} {month} {year}{" "}
          </span>
          <span>{show.time} </span>
        </p>
        <p>{show.venue} </p>
        <p>{show.location} </p>

        <img src="/code-barre.png" alt="" className="bg-white w-48 mx-auto block" />
      </div>
    </article>
  );
};
export default CurrentShowsItem;
