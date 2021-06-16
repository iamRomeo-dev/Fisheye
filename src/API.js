const url =
  "https://iamromeo-dev.github.io/aaaaaaaaaaaaaaaaaaaaaaaaaaa/data.json";

export const fetchPhotographers = async () => {
  const res = await fetch(url);
  const json = await res.json();
  return json.photographers;
};

export const fetchMediaByPhotogrpaherId = async (id) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.media.filter((m) => m.photographerId === id);
};

export const fetchPhotographerById = async (id) => {
  const res = await fetch(url);
  const json = await res.json();
  return json.photographers.filter((photographer) => {
    return photographer.id === id;
  })[0];
};
