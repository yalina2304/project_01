"use client";
import React from "react";
import { Box, Typography, Card, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const team = [
  { name: "CEO", image: "/images/Team/CEO.webp", color: "#00023D" },
  { name: "Project Manager", image: "/images/Team/PM.jpg", color: "#00023D" },
  {
    name: "Senior Software Engineer",
    image: "/images/Team/SW.jpeg",
    color: "#00023D",
  },
  {
    name: "Senior Software Engineer",
    image: "/images/Team/SW.jpeg",
    color: "#00023D",
  },
];
const Team = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          mt: "2rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#010501", fontFamily: "Poppins,sans-serif" }}
        >
          Meet{" "}
          <Box component="span" sx={{ color: "#2D0630" }}>
            Our{" "}
          </Box>{" "}
          Team
        </Typography>

        <Box
          sx={{
            backgroundColor: "#1F1330",
            padding: { xs: "0rem", md: "2rem" },
            width: "100%",
            maxWidth: "1200px",
            margin: " 0 auto",
            borderRadius: "20px ",
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <Swiper
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              1200: { slidesPerView: 3 },
            }}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    borderRadius: "20px",
                    textAlign: "center",
                    p: 2,
                    display: "flex",
                    height: "350px",
                    Width: "100%",
                    position: "relative",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: member.color,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={90}
                    height={120}
                    //fill
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      display: "block",
                      marginTop: "15px",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: "18px",
                      color: "white",
                      mt: 1,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
