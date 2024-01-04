import TrashIcon from "../../../icons/delete.svg";
import { addTabListener, addTrashProjListener } from "../addListeners";
import { addProjConfig } from "../list/displayTodoList";
import { addProjOption, wipeProjOptions } from "./projOptions";
import { projList } from "../../logic/projects";

function addProjTab(projName) {
  const projTabs = document.getElementById("proj-sect-tabs");

  const tab = document.createElement("div");
  tab.classList.add("tab", "proj-tab");
  tab.dataset.tab = projName;

  const trashIcon = new Image();
  trashIcon.src = TrashIcon;
  trashIcon.classList.add("trash-proj");

  tab.append(projName, trashIcon);
  addTabListener(tab);
  addTrashProjListener(trashIcon, tab);
  projTabs.append(tab);
}

function deleteProjTab(tab) {
  const projTabs = document.getElementById("proj-sect-tabs");
  projTabs.removeChild(tab);
}

function wipeProjTabs() {
  const projTabs = document.getElementById("proj-sect-tabs");
  const sectLabel = projTabs.querySelector(".sb-sect-label");

  let child = projTabs.lastElementChild;
  while (child !== sectLabel) {
    projTabs.removeChild(child);
    child = projTabs.lastElementChild;
  }
}

function handleSideBarTabs() {
  wipeProjTabs();
  for (let i = 0; i < projList.length; ++i) {
    addProjTab(projList[i]);
    addProjConfig(projList[i]);
  }
}

function handleEntryTabs() {
  wipeProjOptions("entry-form");
  for (let i = 0; i < projList.length; ++i) {
    addProjOption("entry-form", projList[i]);
  }
}

function handleEditTabs() {
  wipeProjOptions("edit-form");
  for (let i = 0; i < projList.length; ++i) {
    addProjOption("edit-form", projList[i]);
  }
}

function handleProjTabs() {
  handleSideBarTabs();
  handleEntryTabs();
  handleEditTabs();
}

export { deleteProjTab, handleProjTabs };
