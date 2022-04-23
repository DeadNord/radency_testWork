import s from './Table.module.css';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import { getStatistics } from '../../redux/notes/notes-selectors';

const TableStatistics = () => {
  const statistics = useSelector(getStatistics);

  return (
    <div>
      <ul className={classnames(s.topic__list, s.table__statistics)}>
        <li className={s.topic__item}>Note Category </li>
        <li className={s.topic__item}>Active </li>
        <li className={s.topic__item}>Archived </li>
      </ul>

      {statistics.map(item => (
        <ul className={classnames(s.table__list, s.table__statistics)}>
          <li className={s.table__item}>{item.category}</li>
          <li className={s.table__item}>{item.active}</li>
          <li className={s.table__item}>{item.archived} </li>
        </ul>
      ))}
    </div>
  );
};

export default TableStatistics;
