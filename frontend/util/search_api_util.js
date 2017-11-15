export const getSearch = (query) => {
  return $.ajax({
    method: "GET",
    url: `/api/search/${query}`,
  })
}