import { makeStyles } from "@material-ui/styles";
// import {yellow, orange, blue} from '@material-ui/core/colors';

export default makeStyles(() => ({
  stage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    border: "1px solid black",
    position: "relative",
    backgroundColor: "lightblue",
  },
  header: {
    borderBottomWidth: 4,
    borderBottomColor: "black",
  },
  moveBtns: {
    display: "flex",
    justifyContent: "space-around",
    "& Button": {
      maxWidth: "45%",
      flexGrow: 1,
    },
  },
  tasksBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    flexGrow: 1,
  },
  addTaskRow: {
    display: "block",
    height: "20px",
  },
  button: {
    flexGrow: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "yellow",
    // width: '80%',
    // margin: '15 auto',
  },
}));
