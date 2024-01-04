import { format } from "date-fns";
import ViewIcon from "../../../icons/more.svg";
import EditIcon from "../../../icons/edit_note.svg";
import DeleteIcon from "../../../icons/delete.svg";
import { strikeEntry, unstrikeEntry } from "./manipulateEntry";
import {
  addTrashEntryListener,
  addViewEntryListener,
  addCheckboxListener,
  addEditDialogListener,
} from "../addListeners";

function appendPriorityColor(entry, card) {
  const priorityColor = document.createElement("div");
  priorityColor.classList.add("priority-color");

  const style = getComputedStyle(document.body);

  switch (entry.priority) {
    case "High":
      priorityColor.style.backgroundColor = style.getPropertyValue(
        "--high-priority-color",
      );
      break;
    case "Medium":
      priorityColor.style.backgroundColor = style.getPropertyValue(
        "--medium-priority-color",
      );
      break;
    case "Low":
      priorityColor.style.backgroundColor = style.getPropertyValue(
        "--low-priority-color",
      );
      break;
    default:
      priorityColor.style.backgroundColor = "white";
      break;
  }

  card.append(priorityColor);
}

function appendCheckbox(entry, card, entryItem) {
  const input = document.createElement("input");
  input.type = "checkbox";

  if (entry.completed) {
    input.checked = true;
  } else {
    input.checked = false;
  }

  addCheckboxListener(input, card);
  entryItem.append(input);
}

function appendTitle(entry, entryItem) {
  const name = document.createElement("span");
  name.classList.add("entry-title");
  name.textContent = entry.title;
  entryItem.append(name);
}

function appendEntryItem(entry, card, info) {
  const entryItem = document.createElement("div");
  entryItem.classList.add("entry-item");

  appendCheckbox(entry, card, entryItem);
  appendTitle(entry, entryItem);
  info.append(entryItem);
}

function appendDueDate(entry, entryDetails) {
  const dueDate = document.createElement("div");
  dueDate.classList.add("due-date");

  const dateString = entry.date.replace(/-/g, "/");
  dueDate.textContent = format(new Date(dateString), "MMM d, y");
  entryDetails.append(dueDate);
}

function appendEntryIcons(entry, card, entryDetails) {
  const iconIDs = ["view-entry", "edit-entry", "delete-entry"];

  const iconSRCs = [ViewIcon, EditIcon, DeleteIcon];

  for (let i = 0; i < iconIDs.length; ++i) {
    const icon = new Image();
    icon.src = iconSRCs[i];
    icon.setAttribute("id", iconIDs[i]);
    icon.classList.add("entry-icon");
    entryDetails.append(icon);
  }

  const view = entryDetails.querySelector("#view-entry");
  addViewEntryListener(view, card);

  const edit = entryDetails.querySelector("#edit-entry");
  addEditDialogListener(entry, edit, card);

  const trash = entryDetails.querySelector("#delete-entry");
  addTrashEntryListener(trash, card);
}

function appendEntryDetails(entry, card, info) {
  const entryDetails = document.createElement("div");
  entryDetails.classList.add("entry-details");

  appendDueDate(entry, entryDetails);
  appendEntryIcons(entry, card, entryDetails);

  info.append(entryDetails);
}

function appendInfo(entry, card) {
  const info = document.createElement("div");
  info.classList.add("info");

  appendEntryItem(entry, card, info);
  appendEntryDetails(entry, card, info);
  card.append(info);
}

function appendCompletion(entry, card) {
  if (entry.completed) {
    strikeEntry(card);
  } else {
    unstrikeEntry(card);
  }
}

export default function displayEntryCard(entry) {
  const list = document.getElementById("list");
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.index = entry.index;

  appendPriorityColor(entry, card);
  appendInfo(entry, card);
  appendCompletion(entry, card);
  list.append(card);
}
