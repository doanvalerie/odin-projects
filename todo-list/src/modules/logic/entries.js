import { editCardIndex } from "../dom_manipulator/interactive/displayDialogs";

let entryList = [];

function EntryFactory(title, details, date, priority, project, completed) {
  return {
    title,
    details,
    date,
    priority,
    project,
    completed,
  };
}

function addEntry() {
  const form = document.getElementById("entry-form");

  const title = form.elements.title.value;
  const details = form.elements.details.value;
  const date = form.elements.date.value;
  const priority = form.elements.priority.value;
  const project = form.elements.project.value;
  const completed = false;

  const entry = new EntryFactory(
    title,
    details,
    date,
    priority,
    project,
    completed,
  );
  entryList.push(entry);
}

function deleteEntry(cardEntry) {
  const { index } = cardEntry.dataset;
  if (index > -1) {
    entryList.splice(index, 1);
  }
}

function sortEntryList() {
  entryList.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function addIndexProperty() {
  for (let i = 0; i < entryList.length; ++i) {
    entryList[i].index = i;
  }
}

function changeCompletionStatus(index, bool) {
  entryList[index].completed = bool;
}

function populateEntryStorage() {
  const string = JSON.stringify(entryList);
  localStorage.entryList = string;
}

function loadEntryStorage() {
  const string = localStorage.getItem("entryList");
  const array = JSON.parse(string);
  entryList = array;
}

function updateEntryList() {
  sortEntryList();
  addIndexProperty();
  populateEntryStorage();
}

function editEntry() {
  const form = document.getElementById("edit-form");
  const index = editCardIndex;

  entryList[index].title = form.elements.title.value;
  entryList[index].details = form.elements.details.value;
  entryList[index].date = form.elements.date.value;
  entryList[index].priority = form.elements.priority.value;
  entryList[index].project = form.elements.project.value;
}

export {
  entryList,
  EntryFactory,
  addEntry,
  deleteEntry,
  changeCompletionStatus,
  loadEntryStorage,
  updateEntryList,
  editEntry,
};
