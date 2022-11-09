const baseURL = "http://localhost:3500/programming-languages";

async function getData(page = 1) {
  const response = await fetch(baseURL + `/?page=${page}`);
  const result = await response.json();
  return result.data;
}

async function addData(data) {
  const response = await fetch(baseURL, createFetchOption("POST", data));
  return await response.text();
}

async function deleteData(id) {
  const response = await fetch(baseURL + `/${id}`, { method: "DELETE" });
  return await response.text();
}

async function updateData(id, data) {
  const response = await fetch(
    baseURL + `/${id}`,
    createFetchOption("PUT", data)
  );
  return await response.text();
}

function createFetchOption(method, data) {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}

export { getData, addData, deleteData, updateData };
