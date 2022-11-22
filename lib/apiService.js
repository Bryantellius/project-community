export async function fetcher(url, method = "GET", body = {}) {
  let options = {
    method,
  };

  if (method == "POST" || method == "PUT") {
    options.body = JSON.stringify(body);
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  let res = await fetch(url, options);

  if (res.ok) {
    return await res.json();
  } else {
    return false;
  }
}
