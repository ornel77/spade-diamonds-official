

const CurrentShowsItem = ({show}) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const dateObj = new Date(show.date);
  console.log(dateObj.getFullYear())
  const formatedDate = dateObj.toLocaleDateString("en-UK", options);
  const [day, month, year] = formatedDate.split(" ")
  
  return (
    <article className="flex gap-5">
      <section className="uppercase text-4xl font-extrabold">
        <p> {day} </p>
        <p> {month} </p>
        <p> {year} </p>
      </section>
      <section className="flex flex-col gap-4">
        <div>
          <p className="font-bold text-xl">{show.location} </p>
          <p className="italic text-blue-500"> {show.venue} </p>
          <p className="italic text-sm"> {show.time} </p>
        </div>
        <div>
          {show.isInfo && <a href={show.infoLink} target="_blank" className="underline cursor-pointer">Details</a>}
        </div>
      </section>
    </article>
  )
}
export default CurrentShowsItem