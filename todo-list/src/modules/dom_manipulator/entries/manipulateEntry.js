import { entryList } from "../../logic/entries";

function strikeEntry(card) {
  const info = card.querySelector(".info");
  info.style.opacity = "30%";

  const entryTitle = card.querySelector(".entry-title");
  entryTitle.style.textDecoration = "line-through";

  const dueDate = card.querySelector(".due-date");
  dueDate.style.textDecoration = "line-through";
}

function unstrikeEntry(card) {
  const info = card.querySelector(".info");
  info.style.opacity = "100%";

  const entryTitle = card.querySelector(".entry-title");
  entryTitle.style.textDecoration = "none";

  const dueDate = card.querySelector(".due-date");
  dueDate.style.textDecoration = "none";
}

function reassignEntries(tab) {
  const projName = tab.textContent;
  for (let i = 0; i < entryList.length; ++i) {
    if (entryList[i].project === projName) {
      entryList[i].project = "Inbox";
    }
  }
}

export { strikeEntry, unstrikeEntry, reassignEntries };
