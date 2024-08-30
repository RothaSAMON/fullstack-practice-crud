import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEditUserMutation, useGetSingleUserQuery } from "../store";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch the user data based on the id from URL parameters
    const {
        data: user,
        isLoading: isUserLoading,
        isError: isUserError,
    } = useGetSingleUserQuery({ id });

    const [editUser, { isLoading: isEditLoading, isError: isEditError }] =
        useEditUserMutation();
    console.log(user);

    
    // State to manage form input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name || ""); // Ensure default value
            setEmail(user.email || ""); // Ensure default value
        }
    }, [user]);

    const handleSave = async () => {
        try {
            await editUser({ id, name, email }).unwrap();
            navigate("/"); // Redirect to home page after successful edit
        } catch (error) {
            console.error("Failed to edit user:", error);
        }
    };

    if (isUserLoading) return <CircularProgress />;
    if (isUserError)
        return <Typography color="error">Failed to load user data.</Typography>;

    return (
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
            <Typography variant="h5" gutterBottom>
                Edit User Details
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
            </Box>

            <Box display="flex" justifyContent="space-between" mt={3}>
                <Link to="/">
                    <Button variant="text">Cancel</Button>
                </Link>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={isEditLoading} // Disable while saving
                >
                    {isEditLoading ? <CircularProgress size={24} /> : "Save"}
                </Button>
            </Box>

            {isEditError && (
                <Typography color="error">Failed to save changes.</Typography>
            )}
        </Container>
    );
};

export default EditPage;
