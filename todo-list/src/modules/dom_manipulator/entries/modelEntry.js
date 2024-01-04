import { entryList, EntryFactory, updateEntryList } from "../../logic/entries";

export default function displayModelEntries() {
  const sample1 = EntryFactory(
    "Sample: Clean room",
    "Wipe down mirror",
    "2023-09-28",
    "Low",
    "Inbox",
    false,
  );

  const sample2 = EntryFactory(
    "Sample: Buy groceries",
    "Go to Ocean market to buy spices",
    "2023-09-30",
    "Medium",
    "Inbox",
    true,
  );

  const sample3 = EntryFactory(
    "Sample: Study for exam",
    "Make flashcards",
    "2023-10-01",
    "High",
    "School",
    false,
  );

  entryList.push(sample1, sample2, sample3);
  updateEntryList();
}
