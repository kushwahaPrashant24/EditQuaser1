import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./counter.css"



export default  function counter() {
    const [counterOn, setCounterOn] = useState(false);

    return <>
         <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="w-full mt-5   mt-16 mb-16 count">
                

                

                <Card
                  style={{borderRadius:"15px"}}
                  className="flex card1 text-center"
                  sx={{ minHeight: 200, maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-5xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-6xl font-bold text-center text-[#bcc8eb]"
                              start={0}
                              end={200}
                              delay={0}
                            />
                          )}
                          +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                        Branding Projects
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  style={{borderRadius:"15px"}}
                  className="flex card2"
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-5xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-6xl font-bold text-center text-[#bcc8eb]"
                              start={0}
                              end={20}
                              delay={0}
                            />
                          )}
                          +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                        Countries Served
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card 
                  style={{borderRadius:"15px"}}
                  className="flex card3"
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-5xl  text-center text-[#bcc8eb]">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-6xl font-bold text-center text-[#bcc8eb]"
                              start={0}
                              end={90}
                              delay={0}
                            />
                          )}
                          %
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-xl font-bold text-head">
                        ROI Improvement
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </ScrollTrigger>
    </>
}