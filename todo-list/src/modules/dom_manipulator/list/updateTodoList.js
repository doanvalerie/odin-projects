import displayTodoList from "./displayTodoList";

let currentTab = "Inbox";

function wipeTodoList() {
  const list = document.getElementById("list");

  let child = list.lastElementChild;
  while (child) {
    list.removeChild(child);
    child = list.lastElementChild;
  }
}

function changeTodoHeading(tabTitle) {
  const todoHeading = document.getElementById("todo-heading");
  todoHeading.textContent = tabTitle;
}

function fillTodoContent(tabElement) {
  const tabType = tabElement.dataset.tab;
  const tabTitle = tabElement.textContent.trim();
  currentTab = tabType;

  changeTodoHeading(tabTitle);
  displayTodoList(currentTab);
}

function changeTab(tabElement) {
  wipeTodoList();
  fillTodoContent(tabElement);
}

function refreshTodoList() {
  wipeTodoList();
  displayTodoList(currentTab);
}

function activateTabIfMatch(tab) {
  const inbox = document.querySelector('[data-tab="Inbox"]');
  if (currentTab === tab.textContent) {
    changeTab(inbox);
  }
}

export { changeTab, refreshTodoList, activateTabIfMatch };
