import html from "./index.html";
import "./style.css";
import addListeners from "./modules/dom_manipulator/addListeners";
import displayTodoList from "./modules/dom_manipulator/list/displayTodoList";
import displayModelProjects from "./modules/dom_manipulator/projects/modelProj";
import displayModelEntries from "./modules/dom_manipulator/entries/modelEntry";
import { loadProjStorage } from "./modules/logic/projects";
import { loadEntryStorage } from "./modules/logic/entries";
import { handleProjTabs } from "./modules/dom_manipulator/projects/projTabs";

if (!localStorage.getItem("projList")) {
  displayModelProjects();
} else {
  loadProjStorage();
}

if (!localStorage.getItem("entryList")) {
  displayModelEntries();
} else {
  loadEntryStorage();
}

addListeners();
displayTodoList("Inbox");
handleProjTabs();
