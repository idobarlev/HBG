import React from "react";
import "./App.css";

import "firebase/firestore";
import "firebase/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useAuthState } from "react-firebase-hooks/auth";

import HBG from "./Components/HBG";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import { auth } from "./firebsaeConfig";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <AppBar position="static" style={{ background: "#000000" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">HBG Official 🏀</Typography>
          {user ? <SignOut /> : <SignIn />}
        </Toolbar>
      </AppBar>
      <section>
        {user ? (
          <HBG />
        ) : (
          <Typography variant="h5" style={{ marginTop: "10%" }}>
            Sign in to view content!
          </Typography>
        )}
      </section>
    </div>
  );
}

export default App;
