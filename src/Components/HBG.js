import React, { useState, useEffect } from "react";
import { auth, participantsRef } from "../firebsaeConfig";
import { Button, Typography } from "@material-ui/core";
import Participants from "./Participants";

function HBG() {
  const [participants, setParticipants] = useState(null);
  const { displayName, photoURL, uid } = auth.currentUser;
  const curDate = new Date().toLocaleDateString();

  useEffect(() => {
    participantsRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((curDoc) => {
        return { id: curDoc.id, ...curDoc.data() };
      });
      setParticipants(data);
    });
  }, []);

  const handleClickParticipant = () => {
    participantsRef.doc(uid).set({
      photoURL,
      name: displayName,
    });
  };

  const handleClickCancelParticipant = () => {
    participantsRef.doc(uid).delete();
  };

  const isParticipant =
    participants?.filter((cur) => cur.id === uid).length > 0;
  return (
    <div>
      <Typography style={{ marginTop: "7%" }}>Welcome to HBG</Typography>
      <Typography style={{ marginTop: "2%" }}>{curDate}</Typography>
      {isParticipant ? (
        <Button
          variant="outlined"
          style={{ color: "#ff5722", marginTop: "3%" }}
          onClick={handleClickCancelParticipant}
        >
          Cancel your participant
        </Button>
      ) : (
        <Button
          variant="outlined"
          style={{ color: "#4caf50", marginTop: "3%" }}
          onClick={handleClickParticipant}
        >
          Join today's game!
        </Button>
      )}
      <Participants participants={participants} />
    </div>
  );
}

export default HBG;
