import { shows } from "../../utils/data";
import ShowItem from "./ShowItem";
import "./Shows.scss";

const Shows = () => {
  return (
    <section className="container">
      <div className="show-container">
        <h2>Live Tour</h2>
        <div>
          {
            shows.map(show => (
              <ShowItem key={show.id} show={show} />
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default Shows;
