import {
    Box,
    Button,
    Container,
    Typography,
    TextField,
    CircularProgress,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEditUserMutation, useGetSingleUserQuery } from "../store";
import Navbar from "../components/Navbar";

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch the user data based on the id from URL parameters
    const {
        data: user,
        isLoading: isUserLoading,
        isError: isUserError,
        refetch,
    } = useGetSingleUserQuery({ id });

    const [editUser, { isLoading: isEditLoading, isError: isEditError }] =
        useEditUserMutation();

    // Refs to manage form input
    const nameRef = useRef("");
    const emailRef = useRef("");

    useEffect(() => {
        //GOOD practice in Nested data
        if (user?.data?.user) {
            nameRef.current.value = user.data.user.name;
            emailRef.current.value = user.data.user.email;
        }
        refetch();
        //Adding refetch to the dependency array, the useEffect hook will be re-run whenever either user or refetch changes, ensuring that the input fields are updated correctly.
    }, [user, refetch]);
    console.log(user?.data?.user);

    //BAD practice in Nested data
    // useEffect(() => {
    //     if (user && user.data && user.data.user) {
    //         nameRef.current = user.data.user.name || ""; // Ensure default value
    //         emailRef.current = user.data.user.email || ""; // Ensure default value
    //     }
    // }, [user]);

    const handleSave = async () => {
        try {
            await editUser({
                id,
                name: nameRef.current.value,
                email: emailRef.current.value,
            }).unwrap();
            console.log(nameRef);

            navigate("/"); // Redirect to home page after successful edit
        } catch (error) {
            console.error("Failed to edit user:", error);
        }
    };

    if (isUserLoading) return <CircularProgress />;
    if (isUserError)
        return <Typography color="error">Failed to load user data.</Typography>;

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
                <Typography variant="h5" fontFamily={"cursive"} gutterBottom>
                    Edit User Details
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="Name" inputRef={nameRef} fullWidth />
                    <TextField label="Email" inputRef={emailRef} fullWidth />
                </Box>

                <Box display="flex" justifyContent="space-between" mt={3}>
                    <Link to="/">
                        <Button
                            variant="text"
                            sx={{
                                borderRadius: "32px",
                            }}
                        >
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        disabled={isEditLoading} // Disable while saving
                        sx={{
                            borderRadius: "32px",
                        }}
                    >
                        {isEditLoading ? (
                            <CircularProgress size={24} />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </Box>

                {isEditError && (
                    <Typography color="error">
                        Failed to save changes.
                    </Typography>
                )}
            </Container>
        </Box>
    );
};

export default EditPage;
