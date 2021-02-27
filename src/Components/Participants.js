import Participant from "./Participant";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
function Participants({ participants }) {
  const participantsItems = () => {
    if (!participants) {
      return <Typography>No participants yet..</Typography>;
    }

    let i = 0;
    return participants.map((curParticipant) => {
      i++;
      return (
        <Participant
          key={curParticipant.id}
          participant={curParticipant}
          i={i}
        />
      );
    });
  };

  return (
    <Grid container justify="center">
      <List>{participantsItems()}</List>
    </Grid>
  );
}

export default Participants;
