"use client";
import React from "react";
import { Box, Typography, Card, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const team = [
  { name: "CEO", image: "/images/Team/CEO.webp", color: "blue" },
  { name: "Project Manager", image: "/images/Team/PM.jpg", color: "green" },
  {
    name: "Senior Software Engineer",
    image: "/images/Team/SW.jpeg",
    color: "purple",
  },
];
const Team = () => {
  return (
    <Container maxWidth="lg" sx={{p:{xs:3,md:4}}}>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#010501" }}
        >
          Meet{" "}
          <Box component="span" sx={{ color: "#2D0630" }}>
            Our{" "}
          </Box>{" "}
          Team
        </Typography>

        <Box
          sx={{
            backgroundColor: "#1CF7E4",
            padding: "2rem",
            maxWidth: "1000px",
            margin: "auto",
            borderRadius: "20px ",
            textAlign: "center",
          }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              1200: { slidesPerView: 3 },
            }}
            style={{ width: "90%", maxWidth: "800px", marginTop: "20px" }}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    borderRadius: "20px",
                    textAlign: "center",
                    p: 2,
                    display: "flex",
                    height: "350px",
                    Width: "100px",

                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: member.color,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "90px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      marginTop: "5px",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography
                    fontWeight="bold"
                    sx={{ fontSize: "18px", color: "white", mt: 1 }}
                  >
                    {member.name}
                  </Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
};

export default Team;
