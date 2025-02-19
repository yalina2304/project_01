import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "90vh", md: "100vh" },
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
        margin: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingLeft: { xs: 4, md: 8 },
          paddingTop: { xs: 4, md: 8 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: { xs: "center", md: "left" },
            paddingX: { xs: 2, md: 8 },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "#091030",
              textTransform: "uppercase",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            BUILDING{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                paddingX: 1,
                backgroundImage: "url('/images/text.jpg')",
                color: "white",
                borderRadius: "5px",
                display: "inline-block",
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              FUTURE-READY
            </Box>
          </Typography>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: "#091030",
              textTransform: "uppercase",
              marginTop: 1,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            BUSINESS APPLICATIONS
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              paddingX: 3,
              paddingY: 1.5,
              backgroundColor: "#1BD4D0",
              color: "Black",
              fontWeight: "bold",
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
