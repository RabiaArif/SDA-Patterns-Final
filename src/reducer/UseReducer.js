export const initialState = {
  contacts: [
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@us.army.mil",
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com",
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com",
    },
  ],
};

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return state;
  }
  return state;
};
