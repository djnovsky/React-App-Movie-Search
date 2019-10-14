const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://www.omdbapi.com/?t='

export const getMovie = (title) =>
  fetch(`${api+title}&apikey=c9d4f6d5`)
    .then(res => res.json())
