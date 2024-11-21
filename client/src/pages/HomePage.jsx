// import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputForm from "../components/InputForm";
import UserList from "../components/UserList";
import ResponsiveNavBar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <ResponsiveNavBar />
            <Container sx={{  my: 4 }}>
                <Box>
                    <InputForm />
                    <UserList />
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;
