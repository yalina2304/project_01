"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/navigation";
import { Box, Card, Typography, Container } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const testimonials = [
  {
    name: "Jane Nic",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Jhon Doe",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Ali Pazani",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Testimonial = () => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", pt: 5, pb: 5, mb: 4, mt: "2rem" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "#010501", fontFamily: "Poppins, sans-serif" }}
        >
          What{" "}
          <Box
            component="span"
            sx={{ color: "#2D0630", fontFamily: "Poppins, sans-serif" }}
          >
            Our
          </Box>{" "}
          Client Saying
        </Typography>

        <Box
          sx={{
            mt: "2rem",
            backgroundColor: "#3A0603",
            borderRadius: "30px",
            width: "100%",
            boxShadow: 2,
            py: { xs: 1, md: 5 },
            px: { xs: 1, md: 5 },
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              width: "100%",
            }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={20}
              style={{ width: "100%" }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      backgroundColor: "#590905",

                      color: "#fff",
                      borderRadius: 3,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      maxWidth: 300,
                      height: 350,
                      mx: "auto",
                      p: 3,
                      top: "20%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontFamily: "Poppins, sans-serif" }}
                    >
                      {testimonial.des}
                    </Typography>

                    <Box
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFDBBE",
                          position: "absolute",
                          bottom: "30%",

                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#F7F7F7",
                          position: "absolute",
                          bottom: "20%",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        {testimonial.job}
                      </Typography>
                    </Box>

                    {/* Star */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "5%",
                        display: "flex",
                        gap: 0.5,
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Typography
                          key={i}
                          sx={{ color: "#FFD700", fontSize: "1.5rem" }}
                        >
                          <StarBorderIcon />
                        </Typography>
                      ))}
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
