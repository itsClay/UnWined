export const fetchWines = () => {
  return $.ajax({
  	method: "GET",
    url: 'api/wines/',
  });
};

export const fetchWine = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/wines/${id}`
  });
};

export const createWine = (wine) => {
  return $.ajax({
    method: 'POST',
    url: 'api/wines',
    data: { wine }
  });
};

export const updateWine = (wine) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/wines/${wine.id}`,
    data: { wine }
  });
};

export const deleteWine = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/wines/${id}`
  });
};
