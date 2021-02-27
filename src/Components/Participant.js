import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Participant({ participant, i }) {
  return (
    <ListItem style={{ marginTop: "3%" }}>
      <ListItemText>{i}. </ListItemText>
      <ListItemText>{participant.name}</ListItemText>
    </ListItem>
  );
}

export default Participant;
