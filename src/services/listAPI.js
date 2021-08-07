export const fetchAllAdv = async (page) => {
  const res = await fetch('http://127.0.0.1:7890/api/v1/adv');
  const json = await res.json();
  return json.slice((page - 1) * 3, page * 3);
}

export const fetchOneAdv = async (id) => {
  const res = await fetch(`http://127.0.0.1:7890/api/v1/${id}`);
  const json = await res.json();
  return json;
}

export const makeAdv = async (body) => {
  await fetch('http://127.0.0.1:7890/api/v1/adv', {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  });
}

export const deleteAdv = async (id) => {
  await fetch(`http://127.0.0.1:7890/api/v1/${id}`, {
    method: 'DELETE'
  })
}

export const updateAdv = async (obj) => {  //params!!!
  await fetch(`http://127.0.0.1:7890/api/v1/${obj.id}`, {
    method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(obj)
  });
}
