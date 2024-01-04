import { format } from "date-fns";
import { entryList } from "../../logic/entries";

export default function viewEntry(card) {
  const dialog = document.getElementById("view-dialog");
  const { index } = card.dataset;

  const title = dialog.querySelector("#title");
  title.textContent = entryList[index].title;

  const project = dialog.querySelector("#project");
  project.textContent = entryList[index].project;

  const priority = dialog.querySelector("#priority");
  priority.textContent = entryList[index].priority;

  const date = dialog.querySelector("#date");
  date.textContent = format(new Date(entryList[index].date), "MMM d, y");

  const details = dialog.querySelector("#details");
  details.textContent = entryList[index].details;

  dialog.showModal();
}
