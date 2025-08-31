import { shows } from "../../utils/data";
import ShowItem from "./ShowItem";
import "./Shows.scss";

const Shows = () => {
  return (
    <section className="container">
      <div className="show-container">
        <h2>Live Tour</h2>
        <p className="italic text-center text-lg mb-9 text-pink-500">No dates yet</p>
        <div>
          <p className="text-center mb-5 underline">Past shows:</p>
          <select name="show-year" id="show-year" className="bg-transparent w-full border-2 outline-none">
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2024">2024</option>
            <option value="2024">2024</option>
          </select>
          {shows.map((show) => (
            <ShowItem key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shows;
