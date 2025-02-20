import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "70vh", md: "120vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        backgroundImage: "url('/images/HeroImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: { xs: "60px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
        margin: 0,
      }}
    >
      <Container
        sx={{
          paddingX: { xs: 4, md: 8 },
          paddingY: { xs: 4, md: 8 },
        }}
      >
        <Container
          sx={{
            paddingX: { xs: 4, md: 8 },
            paddingY: { xs: 4, md: 8 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#091030",
              fontFamily: "Poppins, sans-serif",
              textTransform: "uppercase",
              fontSize: { xs: "2rem", md: "5rem" },
            }}
          >
            BUILDING{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                paddingX: 1,
                paddingY: 2,
                backgroundImage: "url('/images/text.jpg')",
                color: "white",
                borderRadius: "5px",
                display: "inline-block",
                fontSize: { xs: "2rem", md: "5rem" },
              }}
            >
              FUTURE-READY
            </Box>
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#091030",
              textAlign: "center",
              textTransform: "uppercase",
              marginTop: 1,
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "2rem", md: "5rem" },
            }}
          >
            BUSINESS APPLICATIONS
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              marginLeft: "auto",
              paddingX: 3,
              paddingY: 1.5,
              backgroundColor: "#1BD4D0",
              color: "Black",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              justifyContent: "flex-end",
              borderRadius: "50px",
              textTransform: "uppercase",
              fontSize: { xs: "0.8rem", md: "1rem" },
              "&:hover": { backgroundColor: "#1BD4D0" },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default HeroSection;
