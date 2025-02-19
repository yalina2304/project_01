import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Divider,
  Container,
} from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#10201B", color: "White", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          sx={{ px: { xs: 2, md: 4 } }}
        >
          <Box sx={{ flex: 1, marginLeft: "80px" }}>
            <Typography variant="h6" fontWeight="regular" gutterBottom>
              Company{" "}
            </Typography>
            <Typography variant="body1">Headquarters</Typography>
            <Typography variant="body2">
              163 Elerdine Road,Hounslow,England
            </Typography>
            <Typography variant="body2">TW32PU,GB</Typography>

            <Typography variant="body1">R&D International</Typography>
            <Typography variant="body2">
              353/1 R DeMol Mawatha,colombo 3,
            </Typography>
            <Typography variant="body2">Western Province 00300,LK</Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Services
            </Typography>
            <Typography component="ul" variant="body2" sx={{ paddingLeft: 2 }}>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>DevOps Development</li>
              <li>Software Development</li>
              <li>Mobile application</li>
              <li>POS System</li>
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography component="ul" variant="body2" sx={{ paddingLeft: 2 }}>
              <li>Career Overview</li>
              <li>Current Openings</li>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Newsletter Subscribe
            </Typography>
            <Typography variant="body2">
              Subscribe with Techneapp To join thousand of other
              <br />
              professionals.nKeep Up-o date with the innovation
              <br /> and Technologies from around the globe
            </Typography>
            <Box sx={{ height: "20px" }} />
            <Box
              sx={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Mail"
                size="small"
                sx={{
                  flex: 1,
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "0 25px 25px 0",
                  backgroundColor: "#0E0A00",
                  color: "white",
                  "&:hover": { backgroundColor: "#14756d" },
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Divider
        sx={{
          margin: "20px 0",
          backgroundColor: "rgba(247, 241, 241, 0.88)",
          height: "2px",
        }}
      />

      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: { xs: 2, md: 4 } }}
        >
          <Box sx={{ display: "flex", justifyContent: "left", gap: 2, my: 2 }}>
            <Image
              src="/images/SocialMedia/fb.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              src="/images/SocialMedia/linkedin.png"
              alt="Linkedin"
              width={24}
              height={24}
            />
            <Image
              src="/images/SocialMedia/insta.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/images/SocialMedia/twitter.png"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/images/SocialMedia/youtube.png"
              alt="Youtube"
              width={24}
              height={24}
            />
            <Image
              src="/images/SocialMedia/google.png"
              alt="Google"
              width={24}
              height={24}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "right",
              gap: 1,
            }}
          >
            <Image
              src="/images/SocialMedia/copyright.png"
              alt="Copyright"
              width={24}
              height={24}
            />
            <Typography variant="body2" justifyContent={"right"}>
              2025 Techeapp.All Rights Reserved
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
