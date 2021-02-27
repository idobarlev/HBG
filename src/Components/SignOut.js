import React from "react";
import { auth } from "../firebsaeConfig";
import "firebase/auth";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SignOut() {
  return (
    auth.currentUser && (
      <IconButton
        variant="contained"
        style={{ color: "white" }}
        onClick={() => auth.signOut()}
      >
        <ExitToAppIcon />
      </IconButton>
    )
  );
}

export default SignOut;
