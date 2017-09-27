export const fetchCheckins = () => {
  return $.ajax({
  	method: "GET",
    url: '/api/checkins/',
  });
};

export const fetchCheckin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/checkins/${id}`
  });
};

export const createCheckin = (checkin) => {
  return $.ajax({
    method: 'POST',
    url: 'api/checkins',
    data: { checkin }
  });
};

export const updateCheckin = (checkin) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/checkins/${checkin.id}`,
    data: { checkin }
  });
};

export const deleteCheckin = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/checkins/${id}`
  });
};
