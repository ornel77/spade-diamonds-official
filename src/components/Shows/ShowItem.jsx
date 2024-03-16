

import { FiArrowDownRight } from "react-icons/fi";
import { Table } from "flowbite-react";

const ShowItem = ({ show }) => {
  return (
    <>
      <Table.Cell className="date text-xs text-white ">{show.date} </Table.Cell>
      <Table.Cell className="time text-white"> {show.time} </Table.Cell>
      <Table.Cell className="city text-white tracking-wide"> {show.city} </Table.Cell>
      <Table.Cell className="venue text-white tracking-wide"> {show.venue} </Table.Cell>
      <Table.Cell>
        <a href={show.infoLink} target="_blank" className="info-link text-pink-600">
          <FiArrowDownRight size={30} className="info-icon" />
        </a>
      </Table.Cell>
    </>
  );
};

export default ShowItem;
