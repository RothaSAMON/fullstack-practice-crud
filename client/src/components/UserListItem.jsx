import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Typography, CircularProgress } from "@mui/material";
import { useDeleteUserMutation } from "../store";
import { useNavigate } from "react-router-dom";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AnchorTemporaryDrawer from "../components/Sidebar";
import Badge from "../assets/icons/Badge.svg";

const UserListItem = ({ name, email, id }) => {
    const [deleteUser, { isLoading, isError, isSuccess }] =
        useDeleteUserMutation();
    const navigate = useNavigate(); // Initialize useNavigate here

    const handleDelete = async () => {
        try {
            await deleteUser({ id }).unwrap(); // Use unwrap to handle the promise directly
        } catch (error) {
            console.error("Failed to delete user:", error);
        }
    };

    const handleUpdate = () => {
        navigate(`/edit/${id}`); // Navigate to the edit page
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center", // Centers the card horizontally
                // marginTop: 2, // Margin around the card
                // marginBottom: 2, // Margin around the card
                position: "relative", // Make this container relative for absolute positioning inside
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    maxWidth: 400, // Maximum width of the card
                    width: "100%", // Full width up to the max width
                    p: 2, // Padding inside the card
                    display: "flex",
                    flexDirection: "column",
                    gap: 2, // Gap between elements
                    borderRadius: "8px",
                    position: "relative", // Ensure Paper has relative positioning for children
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        zIndex: 10, // Ensure it's on top of other elements
                    }}
                >
                    {/* Sidebar section */}
                    <AnchorTemporaryDrawer />
                </Box>
                <Box
                    component="img"
                    sx={
                        {
                            // height: 100,
                            // width: 120,
                        }
                    }
                    alt="The house from the offer."
                    src={Badge}
                />
                <Typography variant="h6" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    {email}
                </Typography>

                <Box
                    display="flex"
                    justifyContent="space-between" // Space out buttons
                    mt={2} // Add some margin-top to the button container
                >
                    
                    {/* Button Edit */}
                    <Button
                        onClick={handleUpdate}
                        variant="outlined"
                        sx={{
                            ":hover": {
                                backgroundColor: "primary.main", // Set the background color to blue on hover
                                borderColor: "primary.main", // Optional: Change the border color to match the hover effect
                                color: 'white'
                            },
                            color: "primary", // Inherit text color or set it explicitly
                            borderRadius: 1, // Optional: Custom border radius
                            // transition: "background-color 0.3s ease", // Optional: Smooth transition
                        }}
                    >
                        <EditNoteRoundedIcon />
                    </Button>

                    {/* Button Delete */}
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        color="error"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            <DeleteRoundedIcon fontSize="small" />
                        )}
                    </Button>
                </Box>
                {isError && (
                    <Typography color="error">
                        Failed to delete user.
                    </Typography>
                )}
                {isSuccess && (
                    <Typography color="success">
                        User deleted successfully.
                    </Typography>
                )}
            </Paper>
        </Box>
    );
};

export default UserListItem;
