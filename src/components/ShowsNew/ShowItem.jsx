const ShowItem = ({show}) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const dateObj = new Date(show.date);
  const formatedDate = dateObj.toLocaleDateString("en-UK", options);
  return (
    <article className="border-b py-5 grid grid-cols-1 gap-2 md:grid-cols-3 md:items-start">
      <div className="flex gap-4">
        <p>{formatedDate}</p>
        <p>{show.time}</p>
      </div>
      <p className="">{show.venue}</p>
      <p className="md:text-right">{show.location}</p>
    </article>
  );
};
export default ShowItem;
