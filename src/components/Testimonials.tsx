"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Card, Typography, Container } from "@mui/material";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Nic",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/testimonials/test1.png",
  },
  {
    name: "Jhon Doe",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/testimonials/test2.png",
  },
  {
    name: "Ali Pazani",
    job: "Project Manager",
    des: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/images/testimonials/test1.png",
  },
];

const Testimonial = () => {
  return (
    <Container maxWidth="lg" sx={{ p: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 5,
          pb: 5,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#010501" }}
        >
          What{" "}
          <Box component="span" sx={{ color: "#2D0630" }}>
            Our
          </Box>{" "}
          Client Saying
        </Typography>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "#06120C",
            borderRadius: "30px",
            width: "100%",
            boxShadow: 2,
            py: 4,
            px: { xs: 2, md: 5 },
          }}
        >
          <Box
            sx={{
              maxWidth: 1000,
              mx: "auto",
              px: 2,
            }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={2}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: 15 }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      borderRadius: 3,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      maxWidth: 300,
                      mx: "auto",
                      height: 350,
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={"bg"}
                      width={320}
                      height={350}
                      style={{ borderRadius: 10 }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: "20%",
                        left: "10%",
                        width: "80%",
                        color: "#fff",
                      }}
                    >
                      <Typography variant="body1" gutterBottom>
                        {testimonial.des}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "20%",
                        left: "10%",
                        width: "80%",
                        color: "#FF16DF",
                      }}
                    >
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="subtitle1" sx={{ color: "#11F9FF" }}>
                        {testimonial.job}
                      </Typography>
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonial;
