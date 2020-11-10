const url = "https://v1.jinrishici.com/all.json";
export const getPoetry = function () {
  const promise = new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const result = [];
        result.push(res.origin);
        result.push(res.author);
        result.push(res.content);
        resolve(result);
      })
      .catch((err) => reject(err));
  });

  return promise;
};
