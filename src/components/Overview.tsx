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
        backgroundColor: "#94D1CC",
        padding: "4rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "60px",
        overflow: "hidden",
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
            width: "180px",
            height: "180px",
          }}
        >
          <Image
            src={item.img}
            alt={item.title}
            width={180}
            height={180}
            style={{ display: "block", borderRadius: "50%" }}
          />

          <Typography
            variant="subtitle1"
            sx={{
              position: "absolute",
              top: "35%", // Adjusted to center properly
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {item.title}
          </Typography>

          {/* Value */}
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translate(-50%, 0)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "22px",
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
