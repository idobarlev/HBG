import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Button from "@material-ui/core/Button";

const auth = firebase.auth();

function SignIn() {
  function SignInWithGoogle() {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "white" }}
        onClick={SignInWithGoogle}
      >
        Login
      </Button>
    </div>
  );
}

export default SignIn;
