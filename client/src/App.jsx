import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
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
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

export default App;
