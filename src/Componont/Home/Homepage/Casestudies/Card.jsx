import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Card(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div className="flex justify-center items-center">
          <img className="relative" src={props.logo} alt="Company Logo" />
          <div className="text-white text-2xl text-head2 absolute">
            <h2>{props.companyname}</h2> {props.button}
          </div>
        </div>
      </Button>
      <Dialog
        fullScreen={window.innerWidth < 1024}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            width: "40%",
            maxWidth: "100%", // Maximum width for the dialog
            height: "100vh", // Full height
            position: "fixed", // Fix the position
            left: 0, // Align to the right
            margin: 0, // Remove default margins
            overflow: "auto",
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          style={{
            backgroundColor: "white",
            position: "sticky",
            height: "30px",
            width: "30px",
            top: "10px",
            left: "600px",
            color: "black",
            zIndex: 10,
          }}
        >
          <CloseIcon />
        </IconButton>

        <div className=" -mt-8">
          <img className="w-full" src={props.logo} alt="Company Logo" />
        </div>
        <div className="">
          <div className="p-5">
            <h2 className="text-3xl font-bold">{props.companyname}</h2>
            <h1 className="text-4xl font-black">{props.industryname}</h1>
            <p className="text-2xl mt-5">{props.paragraph}</p>
          </div>
          <div className="p-5">
            <h2 className="text-3xl font-bold">Service Provided</h2>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col sm:flex-row gap-5">
                <img className="w-full sm:w-1/2" src={props.img1} />
                <img className="w-full sm:w-1/2" src={props.img2} />
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <img className="w-full sm:w-1/2" src={props.img3} />
                <img className="w-full sm:w-1/2" src={props.img4} />
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-5">
              <h1 className="text-3xl font-bold">
                Would you like to know more about the project?
              </h1>
              <p className="text-2xl mt-5">
                To find more about our work or any of our other brands, get in
                touch. Mail us on <span>{props.email}</span> or call{" "}
                <span>{props.phone}</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 border-t-1 p-5 bg-white">
          <button className="w-56 h-12 border-2">
            Let's talk <ArrowForwardIcon />
          </button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default Card;
