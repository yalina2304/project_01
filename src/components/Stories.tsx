"use client";
import React from "react";
import { Box, Typography, Card, Button, Container } from "@mui/material";
import Image from "next/image";

const stories = [
  {
    image: "/images/Storiess/s1.png",
    text: "We are proud to introduce World Flight Vibes as one of the best-registered travel agents in the UK. We strive to deliver excellent customer satisfaction by providing world-class service to our beloved passengers. At moments of uncertainties, booking your flight can be a complex challenge, but our experienced Travel Consultants successfully thrive on making all necessary arrangements for a peaceful flight vibe.",
  },
  {
    image: "/images/Storiess/s2.png",
    text: "Looking for great holiday deals that won't break the bank? Then don't look any further. Our selection of low-cost offers will have you fantasising about warm days on the beach in no time. Those looking for a last minute getaway can find deals on a variety of last minute flights. All inclusive options are just waiting to be snatched up by budget conscious families. Adult only couples can save money without sacrificing luxury. ",
  },
  {
    image: "/images/Storiess/s3.png",
    text: "Many of the flights and flight-inclusive holidays on lowcostvibes.com which depart from the UK are financially protected by the ATOL scheme. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. This website is intended primarily to residents of the UK.",
  },
  {
    image: "/images/Storiess/s4.png",
    text: "Many of the flights and flight-inclusive holidays on lowcostvibes.com which depart from the UK are financially protected by the ATOL scheme. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. This website is intended primarily to residents of the UK.",
  },
  {
    image: "/images/Storiess/s5.png",
    text: "Many of the flights and flight-inclusive holidays on lowcostvibes.com which depart from the UK are financially protected by the ATOL scheme. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. This website is intended primarily to residents of the UK.",
  },
];

const Stories = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
          mt: "2rem",
          fontSize: { xs: "0.5rem", md: "1 rem" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#010501", fontFamily: "Poppins, sans-serif" }}
        >
          What{" "}
          <Box component="span" sx={{ color: "#2D0630" }}>
            We{" "}
          </Box>{" "}
          Done
        </Typography>

        <Card
          sx={{
            backgroundColor: "#E293F2",
            padding: { xs: "1rem", md: "2rem" },
            fontFamily: "Poppins, sans-serif",
            maxWidth: "1300px",
            margin: "auto",
            borderRadius: "20px",
            color: "#fff",
            textAlign: "left",
          }}
        >
          {stories.map((story, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                mb: { xs: 3, md: 4 },
              }}
            >
              <Image
                src={story.image}
                alt={"logo"}
                width={150}
                height={80}
                style={{
                  objectFit: "contain",
                }}
              />

              <Box sx={{ flex: 1, ml: { xs: 0, md: 3 }, mt: { x: 2, md: 0 } }}>
                <Typography
                  variant="body1"
                  color="#070108"
                  sx={{
                    fontsize: {
                      xs: "0.5rem",
                      md: "1.5rem",
                      fontFamily: "Poppins, sans-serif",
                    },
                  }}
                >
                  {story.text}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#300733",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
                paddingX: 3,
                paddingY: 1,
                fontFamily: "Poppins, sans-serif",
                borderRadius: "10px",
                textTransform: "none",

                "&:hover": { backgroundColor: "#1BD4D0" },
              }}
            >
              More Stories
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Stories;
