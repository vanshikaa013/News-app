const NewsReducer = (state, action) => {
  switch (action.type) {
    case "Get_News":
      return {
        ...state,
        allNews: action.payload,
      };

    case "Search":
      return {
        ...state,
        allNews: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default NewsReducer;
