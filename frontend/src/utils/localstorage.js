function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = json.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { loadData, saveData };
