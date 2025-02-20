import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Container,
} from "@mui/material";

const services = [
  {
    title: "IT Consultancy",
    description:
      "IT consulting services help you align your technology strategies with your business goals.",
  },
  {
    title: "UI/UX Design",
    description:
      "UI/UX design involves wireframes, prototypes, and improving user experience.",
  },
  {
    title: "Web Development",
    description:
      "Creating and maintaining websites, including frontend and backend development.",
  },
  {
    title: "Software Development",
    description: "Designing, deploying, and supporting software applications.",
  },
  {
    title: "Mobile Application",
    description: "Developing applications for iOS and Android devices.",
  },
  {
    title: "Enterprise System",
    description:
      "Handling large-scale data and business processes with enterprise solutions.",
  },
  {
    title: "DevOps Development",
    description:
      "Automating and integrating processes between software development and IT teams.",
  },
  {
    title: "Blockchain",
    description:
      "Distributed ledger technology used for cryptocurrencies and secure transactions.",
  },
  {
    title: "Testing & QA",
    description:
      "Ensuring software quality through rigorous testing methodologies.",
  },
];

const Services = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          mb: 4,
          fontFamily: "Poppins, sans-serif",
          color: "#010501",
          mt: "2rem",
        }}
      >
        What{" "}
        <Box
          component="span"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#702562",
            display: "inline",
          }}
        >
          We
        </Box>{" "}
        Do
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#0D020A",
          borderRadius: "40px",
          paddingX: { xs: 1, md: 4 },
          paddingY: 2,
          boxShadow: 4,
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: "20px",
            height: "100%",
            minHeight: { xs: "150px", md: "300px" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "white",
              fontFamily: "Poppins, sans-serif",
              textAlign: "center",
              mb: 2,
            }}
          >
            Services
          </Typography>

          <Typography
            variant="h5"
            fontWeight="Regular"
            sx={{
              color: "#21E8D6",
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
              mb: 5,
            }}
          >
            Our services are tailored to make your business grow and stand out.{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontFamily: "Poppins, sans-serif",
              textAlign: "left",
            }}
          >
            {"  "}
            Techneapp is an established, high-level and leading technology
            provider of next-generation and end-to-end innovative custom
            software solutions. Using inventive technology and untainted web
            services. Techneapp prides itself on leading the market by using the
            latest emerging technologies to fully automate business processes.
          </Typography>
        </Box>

        {/*list*/}
        <Box
          sx={{
            width: { xs: "100%", md: "80%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontFamily: "Poppins, sans-serif",
            padding: { xs: "0px", md: "2px" },
          }}
        >
          <List
            sx={{
              width: "100%",
              maxWidth: "500px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            {services.map((service, index) => (
              <Tooltip
                key={index}
                title={
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      p: 1,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {service.description}
                  </Typography>
                }
                arrow
                placement="bottom"
                componentsProps={{
                  tooltip: { sx: { zIndex: 100 } },
                }}
              >
                <ListItem
                  sx={{
                    fontFamily: "P oppins, sans-serif",
                    border: "2px solid rgb(87, 3, 62)",

                    borderRadius: "10px",
                    mb: 1,
                    backgroundColor: "#702562",
                    color: "white",

                    "&:hover": {
                      backgroundColor: "#360527",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ListItemText primary={service.title} />
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
