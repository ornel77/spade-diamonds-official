const ShowItem = ({show}) => {
  return (
    <article className="border-b py-5 grid grid-cols-1 gap-3 md:grid-cols-3 md:items-start">
      <div className="flex gap-4">
        <p>{show.date}</p>
        <p>{show.time}</p>
      </div>
      <p className="">{show.venue}</p>
      <p className="md:text-right">{show.city}</p>
    </article>
  );
};
export default ShowItem;
