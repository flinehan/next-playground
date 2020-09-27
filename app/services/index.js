
export const getTime = (id) => {
  return fetch('/api/time/1')
    .then(response => response.json())
    .then(data => console.log(data));
}