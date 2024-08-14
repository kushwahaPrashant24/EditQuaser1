import React from "react";
import props from "./DataConst";
import "./IndustriesData.css";
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
  return <Slide direction="left" ref={ref} {...props} />;
});

function Card(props) {
  const [open, setOpen] = React.useState(false);

  const [DialogTwoopen, setDialogTwoOpen] = React.useState(false);

  const [DialogOneopen, setDialogOneOpen] = React.useState(false);

  const handleDialogOneClickOpen = () => {
    setDialogOneOpen(true);
  };

  const handleDialogOneClose = () => {
    setDialogOneOpen(false);
  };

  const handleDialogClickOpen = () => {
    setDialogTwoOpen(true);
  };

  const handleDialogClose = () => {
    setDialogTwoOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        {/*Button */}
        <Button
          variant="outlined"
          className=" h-24 w-11/12"
          onClick={handleClickOpen}
        >
          <div className="container flex   p-10">
            <p className="text-white text-4xl"> {props.name}</p>
            <div className="">
              <img src={props.img} alt="Revealed Image" class="hover-image" />
            </div>
          </div>
        </Button>

        {/*Dialog Box */}

        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          PaperProps={{
            className: "dialog-right", // Apply custom CSS class for positioning
            style: {
              width: "40%",
              maxWidth: "100%", // Maximum width for the dialog
              height: "100vh", // Full height
              position: "fixed", // Fix the position
              right: 0, // Align to the right
              margin: 0, // Remove default margins
              overflow: "auto", // Allow content to scroll if necessary
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
              left: "550px",
              color: "black",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          {/*Main Content of Dialog Box */}
          <div className=" -mt-8">
            <img className="w-full" src={props.img} alt="Company Logo" />
          </div>

          <div className="p-5 flex flex-col gap-5">
            <h1 className="text-3xl font-bold">{props.name}</h1>
            <p className="text-2xl mt-5">{props.paramain}</p>
          </div>

          {/* Project Section Start */}
          <div className="m-10">
            <h1 className="text-6xl pb-5">Projects</h1>
            <div className=" flex">
              {/*Project One */}

              <div className="">
                <div>
                  <Button className=" " onClick={handleDialogOneClickOpen}>
                    <img
                      className="w-full h-full"
                      src={props.projectImageone}
                      alt="Company Logo"
                    />
                  </Button>
                  <Dialog
                    fullScreen={window.innerWidth < 800}
                    open={DialogOneopen}
                    onClose={handleDialogOneClose}
                    TransitionComponent={Transition}
                    PaperProps={{
                      className: "dialog-right", // Apply custom CSS class for positioning
                      style: {
                        width: "40%",
                        maxWidth: "100%", // Maximum width for the dialog
                        height: "100vh", // Full height
                        position: "fixed", // Fix the position
                        right: 0, // Align to the right
                        margin: 0, // Remove default margins
                        overflow: "auto", // Allow content to scroll if necessary
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
                        left: "550px",
                        color: "black",
                        zIndex: 10,
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <div className=" -mt-8">
                      <img
                        className="w-full"
                        src={props.projectImageone}
                        alt="Company Logo"
                      />
                    </div>

                    <div className="p-5 flex flex-col gap-5">
                      <h1 className="text-3xl font-bold">
                        {props.projectonename}
                      </h1>
                      <p className="text-2xl mt-5">{props.projectonePara}</p>
                      <h3 className="text-4xl">Project Overview</h3>
                      <p className="text-2xl mt-5">
                        {props.projectOverviewOne}
                      </p>

                      <h3 className="text-4xl">Objective</h3>
                      <div>
                        <ul>
                          <li className="text-xl font-black">
                            {props.objectivesOne1}
                          </li>
                          <li className="text-xl font-black">
                            {props.objectivesOne2}
                          </li>
                          <li className="text-xl font-black">
                            {props.objectivesOne3}
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-4xl">Our Solutions</h3>
                      <p className="text-2xl">{props.solutionOne}</p>

                      <h3 className="text-4xl">Services Provided:</h3>
                      <div>
                        <ul className="text-2xl">
                          <li className="text-xl font-black">
                            {props.servicesProvidedOne1}
                          </li>
                          <li className="text-xl font-black">
                            {props.servicesProvidedOne2}
                          </li>
                          <li className="text-xl font-black">
                            {props.servicesProvidedOne3}
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-4xl">Testimonial</h3>
                      <p className="text-2xl">{props.testimonialOne}</p>

                      <h3 className="text-4xl">Client</h3>
                      <p className="text-2xl">{props.clientOne}</p>
                    </div>

                    <div className="p-5 flex flex-col gap-5">
                      <h1 className="text-3xl font-bold">
                        Would you like to know more about the project?
                      </h1>
                      <p className="text-2xl mt-5">
                        To find more about our work or any of our other brands,
                        get in touch. Mail us on <span>editquasar@gmail.com</span> or
                        call <span>+91 8967908081</span>.
                      </p>
                    </div>
                    <div className="sticky bottom-0 border-t-1 p-5 bg-white">
                      <button className="w-56 h-12 border-2">
                        Let's talk <ArrowForwardIcon />
                      </button>
                    </div>
                  </Dialog>
                  <p className="text-xl">
                  {props.projectonename}
                  </p>
                </div>
               
              </div>

              {/*Project Two */}

              <div className="">
                <div>
                  <Button className=" " onClick={handleDialogClickOpen}>
                    <img
                      className="w-full"
                      src={props.projectImageTwo}
                      alt="Company Logo"
                    />
                  </Button>
                  <Dialog
                    fullScreen={window.innerWidth < 800}
                    open={DialogTwoopen}
                    onClose={handleDialogClose}
                    TransitionComponent={Transition}
                    PaperProps={{
                      className: "dialog-right", // Apply custom CSS class for positioning
                      style: {
                        width: "40%",
                        maxWidth: "100%", // Maximum width for the dialog
                        height: "100vh", // Full height
                        position: "fixed", // Fix the position
                        right: 0, // Align to the right
                        margin: 0, // Remove default margins
                        overflow: "auto", // Allow content to scroll if necessary
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
                        left: "550px",
                        color: "black",
                        zIndex: 10,
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <div className=" -mt-8">
                      <img
                        className="w-full"
                        src={props.projectImageTwo}
                        alt="Company Logo"
                      />
                    </div>

                    <div className="p-5 flex flex-col gap-5">
                      <h1 className="text-3xl font-bold">
                        {props.projectTwoname}
                      </h1>
                      <p className="text-2xl mt-5">{props.projectTwoPara}</p>

                      <h3 className="text-4xl">Project Overview</h3>
                      <p className="text-2xl mt-5">
                        {props.projectOverviewTwo}
                      </p>

                      <h3 className="text-4xl">Objective</h3>
                      <div>
                        <ul>
                          <li className="text-xl font-black">
                            {props.objectivesTwo1}
                          </li>
                          <li className="text-xl font-black">
                            {props.objectivesTwo2}
                          </li>
                          <li className="text-xl font-black">
                            {props.objectivesTwo3}
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-4xl">Our Solutions</h3>
                      <p className="text-2xl">{props.solutionTwo}</p>

                      <h3 className="text-4xl">Services Provided:</h3>
                      <div>
                        <ul className="text-2xl">
                          <li className="text-xl font-black">
                            {props.servicesProvidedTwo1}
                          </li>
                          <li className="text-xl font-black">
                            {props.servicesProvidedTwo2}
                          </li>
                          <li className="text-xl font-black">
                            {props.servicesProvidedTwo3}
                          </li>
                        </ul>
                      </div>

                      <h3 className="text-4xl">Testimonial</h3>
                      <p className="text-2xl">{props.testimonialTwo}</p>

                      <h3 className="text-4xl">Client</h3>
                      <p className="text-2xl">{props.clientTwo}</p>
                    </div>

                    <div className="p-5 flex flex-col gap-5">
                      <h1 className="text-3xl font-bold">
                        Would you like to know more about the project?
                      </h1>
                      <p className="text-2xl mt-5">
                        To find more about our work or any of our other brands,
                        get in touch. Mail us on <span>{props.email}</span> or
                        call <span>{props.phone}</span>.
                      </p>
                    </div>
                    <div className="sticky bottom-0 border-t-1 p-5 bg-white">
                      <button className="w-56 h-12 border-2">
                        Let's talk <ArrowForwardIcon />
                      </button>
                    </div>
                  </Dialog>
                  <p className="text-xl">
                  {props.projectTwoname}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Project Section End */}

          <div className="p-5 flex flex-col gap-5">
                      <h1 className="text-3xl font-bold">
                        Would you like to know more about the project?
                      </h1>
                      <p className="text-2xl mt-5">
                        To find more about our work or any of our other brands,
                        get in touch. Mail us on <span className="font-bold">editquasar@gmail.com</span> or
                        call <span className="font-bold">+91 8967908081</span>.
                      </p>
                    </div>

          <div className="sticky bottom-0 border-t-1 p-5 bg-white">
            <button className="w-56 h-12 border-2">
              Let's talk <ArrowForwardIcon />
            </button>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default Card;
