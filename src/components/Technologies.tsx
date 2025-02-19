"use client";

import { Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";

export default () => (
  <Container maxWidth="lg" sx={{ p: { xs: 2, md: 4 } }}>
    <Box sx={{ textAlign: "center", my: 5, color: "#010501" }}>
      <Typography variant="h4" fontWeight="bold">
        Technologies{" "}
        <Typography
          variant="h4"
          component="span"
          color="#2D0630"
          fontWeight="bold"
        >
          We{" "}
        </Typography>
        <Typography variant="h4" component="span" fontWeight="bold">
          Used{" "}
        </Typography>
      </Typography>
      <Stack spacing={2} mt={2} alignItems="center">
        {/* Frontend */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#09030A",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "80%",
            maxWidth: "1100px",
            height: "80px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography variant="body1" fontWeight="bold" color="white">
            Frontend
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "Wrap",
              justifyContent: "center",
              width: { xs: "50%", md: "80%" },
            }}
            mt={{ xs: 2, md: 0 }}
          >
            <Image
              src="/images/technologies/js.png"
              alt="JavaScript"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/angular.png"
              alt="Angular"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/tailwind.png"
              alt="Tailwind"
              width={30}
              height={30}
            />
            <Image src="/images/react" alt="React" width={30} height={30} />
            <Image
              src="/images/technologies/vuejs.png"
              alt="Vue.js"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/NextJs.png"
              alt="Next.js"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/mui.png"
              alt="Material UI"
              width={30}
              height={30}
            />
          </Stack>
        </Box>

        {/* Backend */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#09030A",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "80%",
            maxWidth: "1100px",
            height: "80px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography variant="body1" fontWeight="bold" color="white">
            Backend
          </Typography>
          <Stack
            direction="row"
            mt={{ xs: 2, md: 0 }}
            justifyContent="center"
            sx={{
              flexWrap: "Wrap",
              justifyContent: "center",
              width: { xs: "50%", md: "80%" },
            }}
          >
            <Image
              src="/images/technologies/JavaI.png"
              alt="Java"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/python.png"
              alt="Phython"
              width={30}
              height={30}
            />
          </Stack>
        </Box>

        {/* Database */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#09030A",
            borderRadius: "10px",
            padding: "10px 20px",
            width: "80%",
            maxWidth: "1100px",
            height: "80px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography variant="body1" fontWeight="bold" color="white">
            Database
          </Typography>
          <Stack
            direction="row"
            mt={{ xs: 2, md: 0 }}
            justifyContent="center"
            sx={{
              flexWrap: "Wrap",
              justifyContent: "center",
              width: { xs: "50%", md: "80%" },
            }}
          >
            <Image
              src="/images/technologies/mongodb.png"
              alt="MongoDB"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/mySql.png"
              alt="MySQL"
              width={30}
              height={30}
            />
            <Image
              src="/images/technologies/redis.png"
              alt="Redis"
              width={30}
              height={30}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  </Container>
);
