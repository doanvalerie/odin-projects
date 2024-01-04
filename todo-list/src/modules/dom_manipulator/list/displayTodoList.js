import displayEntryCard from "../entries/displayEntry";
import { entryList } from "../../logic/entries";

function displayInbox() {
  entryList.forEach((entry) => displayEntryCard(entry));
}

function displayToday() {
  const today = new Date().toDateString();

  const todayEntries = entryList.filter((entry) => {
    const entryDate = new Date(entry.date).toDateString();
    return entryDate === today;
  });

  todayEntries.forEach((entry) => displayEntryCard(entry));
}

function displayWeek() {
  const today = new Date(new Date().toDateString());
  const sevenDaysAhead = new Date(today);
  sevenDaysAhead.setDate(today.getDate() + 7);

  const weekEntries = entryList.filter((entry) => {
    const entryDate = new Date(new Date(entry.date).toDateString());
    return entryDate >= today && entryDate <= sevenDaysAhead;
  });

  weekEntries.forEach((entry) => displayEntryCard(entry));
}

function displayPriority() {
  const highEntries = entryList.filter((entry) => entry.priority === "High");
  const mediumEntries = entryList.filter(
    (entry) => entry.priority === "Medium",
  );
  const lowEntries = entryList.filter((entry) => entry.priority === "Low");

  highEntries.forEach((entry) => displayEntryCard(entry));
  mediumEntries.forEach((entry) => displayEntryCard(entry));
  lowEntries.forEach((entry) => displayEntryCard(entry));
}

function displayCompleted() {
  const completedEntries = entryList.filter(
    (entry) => entry.completed === true,
  );
  completedEntries.forEach((entry) => displayEntryCard(entry));
}

function displayProject(projName) {
  const projEntries = entryList.filter((entry) => entry.project === projName);
  projEntries.forEach((entry) => displayEntryCard(entry));
}

const tabConfig = [
  {
    tabType: "Inbox",
    displayFunction: displayInbox,
  },
  {
    tabType: "Today",
    displayFunction: displayToday,
  },
  {
    tabType: "Week",
    displayFunction: displayWeek,
  },
  {
    tabType: "Important",
    displayFunction: displayPriority,
  },
  {
    tabType: "Completed",
    displayFunction: displayCompleted,
  },
];

export default function displayTodoList(tabType) {
  const config = tabConfig.find((tab) => tab.tabType === tabType);
  config.displayFunction();
}

function addProjConfig(projName) {
  const config = {
    tabType: projName,
    displayFunction: () => {
      displayProject(projName);
    },
  };
  tabConfig.push(config);
}

export { addProjConfig };
