import Dashboard from "./components/dashboard";
import ForRoutes from "./components/ForRoutes";
import React, { useReducer, createContext } from "react";

import { initialState, reducer } from "./reducer/UseReducer";

// we create a contextAPI
export const UserContext = createContext();
// UserContext.type = "USER";
function App() {
  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <ForRoutes></ForRoutes>
    <UserContext.Provider value={{ state, dispatch }}>
      <Dashboard></Dashboard>
    </UserContext.Provider>
  );
}

export default App;
