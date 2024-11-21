import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import PricePage from "./pages/PricePage";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Box } from "@mui/material";

function App() {
    return (
        <Box 
            sx={{ 
                backgroundColor: "#F6F4EB", 
                minHeight: "100vh",
                // color: "white" 
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path="/pricing" element={<PricePage />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;
