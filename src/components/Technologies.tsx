"use client";

import { Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";

export default () => (
  <Box>
    <Box
      sx={{
        textAlign: "center",
        my: 5,
        color: "#010501",
        fontFamily: "Poppins, sans-serif",
        mb: 4,
        mt: "2rem",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 2, color: "#010501", fontFamily: "Poppins,sans-serif" }}
      >
        Technologies{" "}
        <Typography
          variant="h4"
          component="span"
          color="#2D0630"
          fontWeight="bold"
          sx={{ fontFamily: "Poppins,sans-serif" }}
        >
          We{" "}
        </Typography>
        <Typography
          variant="h4"
          component="span"
          fontWeight="bold"
          sx={{ fontFamily: "Poppins,sans-serif" }}
        >
          Used{" "}
        </Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          mt: "2rem",
        }}
      >
        {/* Frontend */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0F0F0F",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "100%",
            minHeight: "80px",
            maxWidth: "1300px",

            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="white"
            mb={0}
            sx={{ fontFamily: "Poppins,sans-serif" }}
          >
            Frontend
          </Typography>
          <Box
            sx={{
              img: { borderRadius: "10px" },
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              // width: { xs: "50%", md: "80%" },
              alignItems: "center",
              mt: { xs: 0, md: 1 },
              p: "5px",
            }}
          >
            <Image
              src="/images/technologies/js.png"
              alt="JavaScript"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/angular.png"
              alt="Angular"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/tailwind.png"
              alt="Tailwind"
              width={50}
              height={50}
            />

            <Image
              src="/images/technologies/vuejs.png"
              alt="Vue.js"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/NextJs.png"
              alt="Next.js"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/mui.png"
              alt="Material UI"
              width={50}
              height={50}
            />
          </Box>
        </Box>

        {/* Backend */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0F0F0F",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "100%",

            minHeight: "80px",
            maxWidth: "1300px",

            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="white"
            mb={0}
            sx={{ fontFamily: "Poppins,sans-serif" }}
          >
            Backend
          </Typography>
          <Box
            sx={{
              img: { borderRadius: "10px" },
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              // width: { xs: "50%", md: "80%" },
              alignItems: "center",
              mt: { xs: 0, md: 1 },
              p: "5px",
            }}
          >
            <Image
              src="/images/technologies/JavaI.png"
              alt="Java"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/python.png"
              alt="Phython"
              width={50}
              height={50}
            />
          </Box>
        </Box>

        {/* Database */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#0F0F0F",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "100%",
            minHeight: "80px",
            maxWidth: "1300px",

            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color="white"
            mb={0}
            sx={{ fontFamily: "Poppins,sans-serif" }}
          >
            Database
          </Typography>
          <Box
            sx={{
              img: { borderRadius: "10px" },
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              // width: { xs: "50%", md: "80%" },
              alignItems: "center",
              mt: { xs: 0, md: 1 },
              p: "5px",
            }}
          >
            <Image
              src="/images/technologies/mongodb.png"
              alt="MongoDB"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/mySql.png"
              alt="MySQL"
              width={50}
              height={50}
            />
            <Image
              src="/images/technologies/redis.png"
              alt="Redis"
              width={50}
              height={50}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);
