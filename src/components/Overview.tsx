"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const overview = [
  { title: "PROJECTS", value: 23, img: "/images/Overview/projects.png" },
  { title: "HAPPY CLIENTS", value: 5, img: "/images/Overview/clients.png" },
  { title: "EMPLOYEES", value: 97, img: "/images/Overview/employees.png" },
];

const Overview = () => {
  return (
    <Box
      sx={{
        mb: 4,
        mt: "2rem",
        backgroundColor: "#94D1CC",
        padding: "4rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "60px",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {overview.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "relative",
            textAlign: "center",
            width: "300px",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <Image
            src={item.img}
            alt={item.title}
            layout="fill"
            objectFit="contain"
          />

          <Typography
            variant="subtitle1"
            sx={{
              position: "absolute",
              top: "30%",
              left: "10%",
              fontFamily: "Poppins, sans-serif",
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "20px", md: "23px" },
              textAlign: "center",
              ZIndex: 2,
            }}
          >
            {item.title}
          </Typography>

          {/* value */}
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "70%",
              fontFamily: "Poppins, sans-serif",

              color: "#fff",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {item.value}
          </Typography>
        </motion.div>
      ))}
    </Box>
  );
};

export default Overview;
