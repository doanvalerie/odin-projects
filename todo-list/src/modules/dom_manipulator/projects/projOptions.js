function addProjOption(formID, projName) {
  const form = document.getElementById(formID);
  const select = form.querySelector("#project");

  const option = document.createElement("option");
  option.textContent = projName;
  option.value = projName;
  select.appendChild(option);
}

function deleteProjOption(formID, tab) {
  const form = document.getElementById(formID);
  const select = form.querySelector("#project");
  const projName = tab.textContent;
  const option = select.querySelector(`option[value=${projName}`);
  select.removeChild(option);
}

function wipeProjOptions(formID) {
  const form = document.getElementById(formID);
  const select = form.querySelector("#project");
  const inbox = select.querySelector('option[value="Inbox"]');

  let child = select.lastElementChild;
  while (child !== inbox) {
    select.removeChild(child);
    child = select.lastElementChild;
  }
}

export { addProjOption, deleteProjOption, wipeProjOptions };
