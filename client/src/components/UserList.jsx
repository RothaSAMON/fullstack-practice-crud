// import React from 'react';
import { useGetAllUsersQuery } from "../store/api/userApi";
import UserListItem from "./UserListItem";
import { Grid, useMediaQuery } from "@mui/material";

const UserList = () => {

    //Responsive style
    const isNonMobile = useMediaQuery("(min-width: 700px)");

    // Use the hook to fetch data
    const { data, error, isLoading } = useGetAllUsersQuery();

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const response = data.data.users;
    const renderUsers = response.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserListItem
                name={user.name}
                email={user.email}
                id={user.id}
            />
        </Grid>
    ));

    // Display the list of users
    return (
        <Grid container spacing={4}>
            {renderUsers}
        </Grid>
    );
};

export default UserList;
