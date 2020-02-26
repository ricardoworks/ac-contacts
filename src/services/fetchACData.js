async function fetchACData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Api-Token": process.env.REACT_APP_CONTACTS_AUTH
    }
  });
  return response.json();
}

export default fetchACData;
export { fetchACData };
