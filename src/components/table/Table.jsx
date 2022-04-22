import TableNotes from './TableNotes';
import TableStatistics from './TableStatistics';

const Table = ({ type }) => {
  //   const [tableStyle, settableStyle] = useState(type);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);

  //     const tableStyle = {
  //     grid-template-columns: `repeat(${title.lenght}, 1fr)`
  //   }

  return (
    <>
      {type === 'list' && <TableNotes />}

      {type === 'statistics' && <TableStatistics />}
    </>
  );
};

export default Table;
