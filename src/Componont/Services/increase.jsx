import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


 
export default  function Increaser() {
    const [counterOn, setCounterOn] = useState(false);

    return <>
         <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="w-full mt-5 flex justify-around flex-wrap gap-10 mt-16 mb-16" style={{position:"relative",left:"13.5vw"}}>
                <Card
                  style={{border:"3px solid white",borderRadius:"15px"}}
                  className="flex" 
                  sx={{ maxWidth: 275, background: "none" }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl text-[#bcc8eb]"
                              start={0}
                              end={98}
                              delay={0}
                            />
                          )}
                          %
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          Satisfaction
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  style={{border:"3px solid white",borderRadius:"15px"}}
                  className="flex" 
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl text-[#bcc8eb]"
                              start={0}
                              end={100}
                              delay={0}
                            />
                          )}
                          %
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          Customization
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  style={{border:"3px solid white",borderRadius:"15px"}}
                  className="flex" 
                  sx={{ minHeight: 200, maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl text-[#bcc8eb]"
                              start={0}
                              end={99}
                              delay={0}
                            />
                          )}
                          %
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          Project Accuracy
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  style={{border:"3px solid white",borderRadius:"15px"}}
                  className="flex" 
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl text-[#bcc8eb]"
                              start={0}
                              end={95}
                              delay={0}
                            />
                          )}
                          %
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          On-Time Delivery
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  style={{border:"3px solid white",borderRadius:"15px"}}
                  className="flex" 
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl text-[#bcc8eb]"
                              start={0}
                              end={200}
                              delay={0}
                            />
                          )}
                          +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-xl font-bold text-head text-grey">
                          Positive Reviews
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </ScrollTrigger>
    </>
}