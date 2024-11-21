import {
  Box,
  Container,
} from "@mui/material";
import Navbar from "../components/Navbar";

const PricePage = () => {
  return (
      <Box>
          <Navbar />
          <Container
              maxWidth="sm"
              sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#f9f9f9",
              }}
          >
              Hello World, Sign In
          </Container>
      </Box>
  );
};

export default PricePage;
