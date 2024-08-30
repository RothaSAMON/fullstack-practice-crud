import React from 'react';
import { useGetAllUsersQuery } from '../store/api/userApi';
import UserListItem from './UserListItem';
import { Box } from '@mui/material';
const UserList = () => {
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
  const response = data.data.users
  const renderUsers = response.map( user => {
    return <UserListItem key={user.id} name={user.name} email={user.email} id={user.id} />
  })

  // Display the list of users
  return (
    <Box >
      {renderUsers}
    </Box>
  );
};

export default UserList;
