import { createSelector } from '@reduxjs/toolkit';

export const getItems = (state: any) => state.notes.items;

export const getVisibilityFilter = (state: any) => state.notes.visibilityFilter;

export const getNotes = createSelector(
  [getItems, getVisibilityFilter],
  (items, filter) => {
    return items.filter((item: any) => item.status === filter);
  },
);

export const getStatistics = createSelector([getItems], items => {
  const activeNotes = items
    .filter((item:any) => item.status === true)
    .map((item:any) => item.category);
  const archivedNotes = items
    .filter((item:any) => item.status === false)
    .map((item:any) => item.category);
  const amountActiveNotes: {[x: string]: number} = {};
  const amountArchivedNotes: {[x: string]: number} = {};

  const amountNotes = (arr: any, res: { [x: string]: number }) => {
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
      archived:
        amountArchivedNotes.Task !== undefined ? amountArchivedNotes.Task : 0,
    },
    {
      category: 'Thought',
      active:
        amountActiveNotes.Thought !== undefined ? amountActiveNotes.Thought : 0,
      archived:
        amountArchivedNotes.Thought !== undefined
          ? amountArchivedNotes.Thought
          : 0,
    },
    {
      category: 'Idea',
      active: amountActiveNotes.Idea !== undefined ? amountActiveNotes.Idea : 0,
      archived:
        amountArchivedNotes.Idea !== undefined ? amountArchivedNotes.Idea : 0,
    },
  ];
});
