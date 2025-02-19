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
      "IT consulting services are advisory services that help you assess different technology strategies and, in doing so, align your technology strategies with your business or process strategies.",
  },
  {
    title: "UI/UX Design",
    description:
      "UI / UX design is about collecting your requirements and evaluates it , Than proceed the idea using storyboards , prototypes",
  },
  {
    title: "Web Development",
    description:
      "Web development is process of building websites which means creating and maintaining websites. It includes web design, web publishing, web",
  },
  {
    title: "Software Development",
    description:
      "Software development is a process of creating, designing, deploying and supporting software which will",
  },
  {
    title: "Mobile Application",
    description:
      "A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile devic",
  },
  {
    title: "Enterprise System",
    description:
      "Enterprise systems is a large complex computing systems which handle large volumes of data and",
  },
  {
    title: "DevOps Development",
    description:
      "DevOps is the set of practices that works to automate and integrate the processes between software development and IT teams, so they",
  },
  {
    title: "Blockchain",
    description:
      "A blockchain is a digital, public ledger that records online transactions which is a core technology for cryptocurrencies like",
  },
  {
    title: "Testing & QA",
    description:
      "QA and Testing in Software Testing is defined as a procedure to ensure the quality of software products or services provided to the",
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ p: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#010501", fontsize: { xs: "2rem", md: "3rem" } }}
        >
          What{" "}
          <Box component="span" sx={{ color: "#2D0630" }}>
            We
          </Box>{" "}
          Do
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "30px",
            width: "100%",
            gap: { xs: 4, md: 0 },
            p: { xs: 4, md: 0 },
            boxShadow: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#06120C",
              display: "flex",
              flex: { xs: "1rem", md: "0.5rem " },
              width: { xs: "100%", md: "40%" },
              borderRadius: "20px ",
              textAlign: "justify",
              alignItems: "center",
              p: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 5 }}>
              Services
            </Typography>
            <Box
              component="img"
              src="/images/service.jpeg"
              alt="service"
              sx={{
              width:"100%",
                maxHeight: { xs: "200px", md: "300px" },
                objectFit: "contain",
                borderRadius: "10px",
                mx: "auto",
              }}
            />
          </Box>
          {/*right*/}
          <Box
            sx={{
              backgroundColor: "#06120C",
              display: "flex",
              flex: { xs: "1", md: "0.5" },
              flexDirection: "column",
              gap: 2,
              p: { xs: 2, md: 3 },
              width: { xs: "100%", md: "60%" },
              borderRadius: "20px",
            }}
          >
            <List>
              {services.map((service, index) => (
                <Tooltip
                  key={index}
                  title={
                    <Typography sx={{ fontSize: "1 rem", p: 1 }}>
                      {service.description}
                    </Typography>
                  }
                  arrow
                  placement="bottom"
                  sx={{ zIndex: 100 }}
                >
                  <ListItem
                    sx={{
                      border: "2px solid rgb(87, 3, 62)",
                      borderRadius: "10px",
                      mb: 1,
                      backgroundColor: "#702562",
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
    </Container>
  );
};

export default Services;
