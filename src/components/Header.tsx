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
      sx={{
        backgroundColor: "#02000D",
        // paddingleft: { xs: "16px", md: "32px" },
        // paddingRight: "0px",
        py: 0,
        zIndex: 1100,
        position: "fixed",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "end", md: "space-between" },
            alignItems: "center",
            width: "100%",
            padding: { xs: "0px 0px 0px 16px", md: "16px 32px" },
            py: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/images/techneapp-logo.svg"
              alt="Company Logo"
              width={200}
              height={200}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              // sizes="(max-width: 900px) 120px, 200px"
            />
          </Box>

          <Box
            sx={{
              alignItems: "center",
              display: { xs: "none", md: "flex" },
              gap: "30px",
            }}
          >
            {navList.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Poppins', sans-serif",
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
                fontFamily: "Poppins, sans-serif",
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
          {/* mobie view */}
          <IconButton
            size="medium"
            edge="end"
            color="inherit"
            sx={{ display: { md: "none" }, padding: "0px" }}
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
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#BABABA",
            width: 250,
            height: 350,
            fontFamily: "'Poppins', sans-serif !important",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#BABABA",
            height: 350,
            width: 250,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            {navList.map((item, index) => (
              <ListItem
                key={index}
                onClick={navMenu}
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "background-color 0.3s, color 0.3s",
                  "&:hover": { color: "#06064A" },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#2E2E2E",
                    textAlign: "center",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ textAlign: "center", padding: "20px" }}>
            <Button
              variant="outlined"
              sx={{
                fontFamily: "Poppins, sans-serif",
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
