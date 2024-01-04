let editCardIndex = -1;

function displayEntryDialog() {
  const entryDialog = document.getElementById("entry-dialog");
  entryDialog.showModal();
}

function displayProjDialog() {
  const projDialog = document.getElementById("proj-dialog");
  projDialog.showModal();
}

function displayEditDialog(entry, card) {
  editCardIndex = card.dataset.index;

  const dialog = document.getElementById("edit-dialog");
  const form = document.getElementById("edit-form");

  const title = form.querySelector("#title");
  title.value = entry.title;

  const details = form.querySelector("#details");
  details.value = entry.details;

  const date = form.querySelector("#date");
  date.value = entry.date;

  const priority = form.querySelector("#priority");
  priority.value = entry.priority;

  const project = form.querySelector("#project");
  project.value = entry.project;

  dialog.showModal();
}

function closeDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  dialog.close();
}

export {
  displayEntryDialog,
  displayProjDialog,
  displayEditDialog,
  closeDialog,
  editCardIndex,
};
