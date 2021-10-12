import "./App.css";
import React, { useEffect } from "react";
import Routes from "./route/Routes";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/authAction";
import { LOGOUT_USER } from "./actions/types";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT_USER });
    });
  }, []);
  return <Routes />;
}

export default App;
