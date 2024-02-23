import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { Table } from "flowbite-react";

const ShowItem = ({ show }) => {
  return (
    <>
      <Table.Cell className="date text-xs">{show.date} </Table.Cell>
      <Table.Cell className="time"> {show.time} </Table.Cell>
      <Table.Cell className="city"> {show.city} </Table.Cell>
      <Table.Cell className="venue font-semibold"> {show.venue} </Table.Cell>
      <Table.Cell>
        <a href={show.infoLink} target="_blank" className="info-link text-pink-600">
          <FiArrowDownRight size={30} className="info-icon" />
        </a>
      </Table.Cell>
    </>
  );
};

export default ShowItem;
