import TableNotes from './TableNotes';
import TableStatistics from './TableStatistics';
import React from "react"

interface Props {
  type: string
}

const Table: React.FC<Props> = (props) => {
  return (
    <>
      {props.type === 'list' && <TableNotes />}

      {props.type === 'statistics' && <TableStatistics />}
    </>
  );
};

export default Table;
