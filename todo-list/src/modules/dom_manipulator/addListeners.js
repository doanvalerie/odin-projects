import validateForm from "./interactive/validateForm";
import viewEntry from "./entries/viewEntry";
import { deleteProjOption } from "./projects/projOptions";
import { handleProjListAdd, handleProjListDel } from "../logic/projects";
import { deleteProjTab, handleProjTabs } from "./projects/projTabs";
import { strikeEntry, unstrikeEntry, reassignEntries } from "./entries/manipulateEntry";
import { displayEditDialog, displayProjDialog, displayEntryDialog, closeDialog } from "./interactive/displayDialogs";
import { activateTabIfMatch, changeTab, refreshTodoList } from "./list/updateTodoList";
import { addEntry, deleteEntry, editEntry, updateEntryList, changeCompletionStatus } from "../logic/entries";

function addTabListener(...tabs) {
  for (let i = 0; i < tabs.length; ++i) {
    tabs[i].addEventListener("click", (event) => changeTab(event.target));
  }
}

function addPlusProjListener() {
  const plusProj = document.getElementById("add-project");
  plusProj.addEventListener("click", displayProjDialog);
}

function addPlusEntryListener() {
  const plusEntry = document.getElementById("add-entry");
  plusEntry.addEventListener("click", displayEntryDialog);
}

function addProjFormListener() {
  const form = document.getElementById("proj-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const projName = form.elements["proj-name"].value;
    const isValid = validateForm("proj-form", ".validate");
    if (isValid) {
      handleProjListAdd(projName);
      handleProjTabs();
      form.reset();
    }
  });
}

function addEntryFormListener() {
  const form = document.getElementById("entry-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = validateForm("entry-form", ".validate");
    if (isValid) {
      addEntry();
      updateEntryList();
      refreshTodoList();
      form.reset();
    }
  });
}

function addCloseDialogListener(dialogID, formID) {
  const dialog = document.getElementById(dialogID);
  const form = document.getElementById(formID);

  dialog.addEventListener("click", dialog.close);
  form.addEventListener("click", (event) => event.stopPropagation());
}

function addDialogListeners() {
  addCloseDialogListener("proj-dialog", "proj-form");
  addCloseDialogListener("entry-dialog", "entry-form");
  addCloseDialogListener("edit-dialog", "edit-form");
}

function addViewDialogListener() {
  const dialog = document.getElementById("view-dialog");
  const cardDisplay = document.getElementById("card-display");

  dialog.addEventListener("click", dialog.close);
  cardDisplay.addEventListener("click", (event) => event.stopPropagation());
}

function addTrashProjListener(trash, tab) {
  trash.addEventListener("click", (event) => {
    event.stopPropagation();

    handleProjListDel(tab);
    deleteProjTab(tab);
    deleteProjOption("entry-form", tab);
    deleteProjOption("edit-form", tab);
    reassignEntries(tab);
    activateTabIfMatch(tab);
  });
}

function addTrashEntryListener(trash, card) {
  trash.addEventListener("click", () => {
    deleteEntry(card);
    updateEntryList();
    refreshTodoList();
  });
}

function addViewEntryListener(view, card) {
  view.addEventListener("click", () => {
    viewEntry(card);
  });
}

function addCheckboxListener(input, card) {
  input.addEventListener("click", () => {
    const { index } = card.dataset;
    if (input.checked) {
      changeCompletionStatus(index, true);
      updateEntryList();
      strikeEntry(card);
    } else {
      changeCompletionStatus(index, false);
      updateEntryList();
      unstrikeEntry(card);
    }
  });
}

function addEditDialogListener(entry, edit, card) {
  edit.addEventListener("click", () => {
    displayEditDialog(entry, card);
  });
}

function addEditFormListener() {
  const form = document.getElementById("edit-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = validateForm("edit-form", ".validate");
    if (isValid) {
      editEntry();
      updateEntryList();
      refreshTodoList();
      closeDialog("edit-dialog");
    }
  });
}

export default function addListeners() {
  const tabs = document.querySelectorAll(".tab");

  addTabListener(...tabs);
  addPlusProjListener();
  addPlusEntryListener();
  addDialogListeners();
  addProjFormListener();
  addEntryFormListener();
  addEditFormListener();
  addViewDialogListener();
}

export {
  addTabListener,
  addTrashProjListener,
  addTrashEntryListener,
  addViewEntryListener,
  addCheckboxListener,
  addEditDialogListener,
};
