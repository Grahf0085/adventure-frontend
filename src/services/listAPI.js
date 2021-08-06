export const fetchAdv = async (page) => {
  const res = await fetch('postgres://postgres:postgres@localhost:5432/postgres');
  const json = await res.json();
  return json.slice((page - 1) * 3, page * 3);
}