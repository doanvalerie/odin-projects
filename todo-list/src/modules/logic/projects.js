let projList = [];

function addProj(projName) {
  projList.push(projName);
}

function deleteProj(tab) {
  const projName = tab.textContent;
  const index = projList.indexOf(projName);
  if (index > -1) {
    projList.splice(index, 1);
  }
}

function sortProjList() {
  projList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function populateProjStorage() {
  const string = JSON.stringify(projList);
  localStorage.projList = string;
}

function loadProjStorage() {
  const string = localStorage.getItem("projList");
  const array = JSON.parse(string);
  projList = array;
}

function handleProjListAdd(projName) {
  addProj(projName);
  sortProjList();
  populateProjStorage();
}

function handleProjListDel(tab) {
  deleteProj(tab);
  populateProjStorage();
}

export { projList, loadProjStorage, handleProjListAdd, handleProjListDel };
