"use client";
import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Image from "next/image";

const Header = () => {
  const [click, setClick] = useState(false);
  const navMenu = () => {
    setClick(!click);
  };
  const navList = [
    "Home",
    "About Us",
    "Services",
    "Careers",
    "Digital Marketing",
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#02000D", padding: "5px 0", zIndex: 1100 }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/techneapp-logo.svg"
              alt="Company Logo"
              width={120}
              height={50}
              priority
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            {navList.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "white",
                  "&:hover": { color: "#26a69a" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button
              variant="outlined"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "white", color: "#004d40" },
              }}
            >
              Contact Us
            </Button>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ display: { md: "none" } }}
            onClick={navMenu}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={click}
        onClose={navMenu}
        sx={{ width: "250px", flexShrink: 0 }}
      >
        <Box
          sx={{
            backgroundColor: "#02000D",
            height: "50vh",
            overflowY: "auto",
          }}
        >
          <List>
            {navList.map((item, index) => (
              <ListItem key={index} onClick={navMenu}>
                <ListItemText
                  primary={item}
                  sx={{
                    textAlign: "center",
                    color: "white",
                    "&:hover": { color: "#04041C" },
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: { xs: "block", md: "none" }, padding: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "white", color: "#004d40" },
                width: "100%",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
