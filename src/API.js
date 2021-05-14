const url =
  "https://iamromeo-dev.github.io/aaaaaaaaaaaaaaaaaaaaaaaaaaa/data.json";

export const fetchPhotographers = async () => {
  const res = await fetch(url);
  return res.json();
};
