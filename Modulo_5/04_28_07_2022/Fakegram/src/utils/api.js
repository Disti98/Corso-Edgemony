const GET = async (path) => {
  const res = await fetch(path, { method: "GET" });
  return res.json();
};

const POST = async (path, body) => {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};

const DELETE = async (path, key) => {
  const res = await fetch(`${path}/${key}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export { GET, POST, DELETE };
