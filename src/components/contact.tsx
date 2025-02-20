"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const contact = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2, px: 2, mt: 2, mb: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Poppins,sans-serif",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Let's <span style={{ color: "#0D1D14" }}>Talk</span>
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Image src="/images/emoji.png" alt="Emoji" width={50} height={50} />
      </Box>

      <Typography
        variant="body1"
        sx={{ color: "#10A175", mt: 2, fontFamily: "Poppins,sans-serif" }}
      >
        Let's talk about your product,
      </Typography>

      <Box
        sx={{
          backgroundColor: "##B7F9FF",
          borderRadius: 2,
          px: 2,
          py: 2,
          mx: "auto",
          my: "auto",
          maxWidth: 600,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins,sans-serif",
            color: "#000112",
            justifyContent: "center",
          }}
        >
          We love engaging with new clients and our community. If you have any
          enquiries about building digital products or any other questions, get
          in touch!
          <br />
          Be connected with us to achieve your goals and to grow your business.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: { xs: 2, md: 5 },
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontFamily: "Poppins,sans-serif",
            backgroundColor: "#000369",
            color: "#fff",
            borderRadius: 20,
            px: 3,
            "&:hover": {
              backgroundColor: "#051401",
            },
          }}
        >
          Contact
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#14C38E",
            fontFamily: "Poppins,sans-serif",
            color: "#fff",
            borderRadius: 20,

            px: 3,
            "&:hover": {
              backgroundColor: "#051401",
            },
          }}
        >
          enquire@techneapp.com
        </Button>
      </Box>
    </Box>
  );
};

export default contact;
