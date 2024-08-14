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
        
              <div className="w-full mt-5 flex justify-around flex-wrap gap-10 mt-16 mb-16">
                <Card
                  className="flex"
                  sx={{ maxWidth: 275, background: "none" }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl text-white text-center">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl"
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
                          Projects Completed
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="flex"
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl text-white text-center">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl"
                              start={0}
                              end={80}
                              delay={0}
                            />
                          )}
                          +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          Positive Testimonials
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="flex"
                  sx={{ minHeight: 200, maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl text-white text-center">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl"
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
                          Team Member
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="flex"
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl text-white text-center">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl"
                              start={0}
                              end={5}
                              delay={0}
                            />
                          )}
                          +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-head text-xl font-bold ">
                          Year Experience
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card
                  className="flex"
                  sx={{ maxWidth: 275, background: "none"  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-4xl text-white text-center">
                          {" "}
                          {counterOn && (
                            <CountUp
                              className="text-4xl"
                              start={0}
                              end={95}
                              delay={0}
                            />
                          )}
                          % +
                        </h1>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <p className="text-xl font-bold text-head">
                          Customers Satisfaction
                        </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </ScrollTrigger>
    </>
}