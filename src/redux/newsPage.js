let initialState = {
  news: [
    { id: 1, text: "jskjdlsjajdjsdjdjklasjdlasd;", likes: 10 },
    { id: 2, text: "jjkjioij", likes: 11 },
    { id: 3, text: "dfasfsafa", likes: 13 },
    { id: 4, text: "jskjdlsjajsfggdfvdvzsa", likes: 14 },
    { id: 5, text: "jskjdlssfdasfsv", likes: 10 },
  ],
};

export function newsReducer(state = initialState, action) {
  return initialState;
}
