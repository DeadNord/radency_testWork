import dataBase from '../json/data.json';
import statisticsList from '../layouts/statistics.hbs';
const data = JSON.parse(window.localStorage.getItem('data'));

// Ссылки
const refs = {
  statisticsTable: document.querySelector('div.js-table--statistic'),
};

// Функции
const filterStatistics = arr => {
  const activeNotes = arr.filter(item => item.status === true).map(item => item.category);
  const archivedNotes = arr.filter(item => item.status === false).map(item => item.category);
  const amountActiveNotes = {};
  const amountArchivedNotes = {};

  const amountNotes = (arr, res) => {
    for (const i of arr) {
      if (res[i] === undefined) {
        res[i] = 1;
      } else {
        res[i]++;
      }
    }
  };
  amountNotes(activeNotes, amountActiveNotes);
  amountNotes(archivedNotes, amountArchivedNotes);

  return [
    {
      category: 'Task',
      active: amountActiveNotes.Task !== undefined ? amountActiveNotes.Task : 0,
      archived: amountArchivedNotes.Task !== undefined ? amountArchivedNotes.Task : 0,
    },
    {
      category: 'Thought',
      active: amountActiveNotes.Thought !== undefined ? amountActiveNotes.Thought : 0,
      archived: amountArchivedNotes.Thought !== undefined ? amountArchivedNotes.Thought : 0,
    },
    {
      category: 'Idea',
      active: amountActiveNotes.Idea !== undefined ? amountActiveNotes.Idea : 0,
      archived: amountArchivedNotes.Idea !== undefined ? amountArchivedNotes.Idea : 0,
    },
  ];
};

// Рендер
const renderStatistics = arr => {
  const result = filterStatistics(arr);
  refs.statisticsTable.insertAdjacentHTML('beforeEnd', statisticsList(result));
};

if (data) {
  renderStatistics(data);
} else {
  renderStatistics(dataBase);
}
