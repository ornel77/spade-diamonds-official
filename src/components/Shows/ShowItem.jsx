import { FiArrowDownRight } from "react-icons/fi";
import { LuBan, LuArrowRightCircle  } from "react-icons/lu";
import { Table } from "flowbite-react";

const ShowItem = ({ show }) => {
  return (
    <>
      <Table.Cell className="date text-xs text-white ">{show.date} </Table.Cell>
      <Table.Cell className="time text-white"> {show.time} </Table.Cell>
      <Table.Cell className="city text-white tracking-wide">
        {" "}
        {show.city}{" "}
      </Table.Cell>
      <Table.Cell className="venue text-white tracking-wide">
        {" "}
        {show.venue}{" "}
      </Table.Cell>
      <Table.Cell>
        <a
          href={show.infoLink}
          target="_blank"
          className={`info-link  ${
            show.isInfo ? "text-pink-600" : "pointer-events-none text-gray-400"
          } `}
        >
          {show.isInfo ? (
            <LuArrowRightCircle size={26}  className="info-icon" />
          ) : (
            <LuBan size={26} className="info-icon" />
          )}
        </a>
      </Table.Cell>
    </>
  );
};

export default ShowItem;
