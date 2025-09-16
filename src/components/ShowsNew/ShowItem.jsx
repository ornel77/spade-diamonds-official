import { useTranslation } from "react-i18next";
const ShowItem = ({show}) => {
    const { i18n } = useTranslation();
  
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const dateObj = new Date(show.date);
  const formatedDate = i18n.language == "en" ? dateObj.toLocaleDateString("en-UK", options) : dateObj.toLocaleDateString("fr-FR", options)
  return (
    
    <article className="border-b py-5 grid grid-cols-1 gap-2 md:grid-cols-3 md:items-start">
      <div className="flex gap-4">
        <p>{formatedDate}</p>
        {/* <p>{show.time}</p> */}
      </div>
      <p className="">{show.venue}</p>
      <p className="md:text-right">{show.location}</p>
    </article>
  );
};
export default ShowItem;
