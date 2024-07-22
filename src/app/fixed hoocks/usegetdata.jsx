async function getData(data) {
  const res = await fetch(data);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getData;
