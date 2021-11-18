import { makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

export default makeStyles((props) => ({
  box: {
    display: "flex",
    justifyContent: "space-around",
    borderColor: yellow,
    borderWidth: "10px",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
}));
