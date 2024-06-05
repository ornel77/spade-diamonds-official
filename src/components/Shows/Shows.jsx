import { shows } from "../../utils/data";
import "./Shows.scss";
import ShowItem from "./ShowItem";
import { Table } from "flowbite-react";

const Shows = () => {
  return (
    <section className="container">
      <div className="show-container">
        <h2>Live Tour</h2>
        <div className="table-wrap overflow-x-scroll md:overflow-x-hidden">
          <Table className="show-list bg-slate-900">
            <Table.Head>
              <Table.HeadCell className="bg-slate-950 text-slate-100">date</Table.HeadCell>
              <Table.HeadCell className="bg-slate-950 text-slate-100">time</Table.HeadCell>
              <Table.HeadCell className="bg-slate-950 text-slate-100">city</Table.HeadCell>
              <Table.HeadCell className="bg-slate-950 text-slate-100">venue</Table.HeadCell>
              <Table.HeadCell className="bg-slate-950 text-slate-100">More Info</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {shows.map((show) => (
                  <Table.Row key={show.id}>
                      <ShowItem show={show} />
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Shows;
