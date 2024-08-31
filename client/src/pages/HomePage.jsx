// import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputForm from "../components/InputForm";
import UserList from "../components/UserList";
import ResponsiveNavBar from "../components/Navbar";

const HomePage = () => {
    return (
        <div>
            <ResponsiveNavBar />
            <Container sx={{  marginTop: 6 }}>
                <Box>
                    <InputForm />
                    {/* <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}}>
                        <UserList />
                    </Box> */}
                    <UserList />
                </Box>
            </Container>
        </div>
    );
};

export default HomePage;
