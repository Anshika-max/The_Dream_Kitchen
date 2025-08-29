import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

export default function ManageUsers() {
  const { allUsers, fetchAllUsers } = useAuth();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      await fetchAllUsers();
      setLoading(false);
    };
    loadUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/admin_dash" className="p-6">
              <HomeIcon sx={{ fontSize: 50, color: "black" }} />
            </Link>
      <Typography variant="h4" gutterBottom align="center">
        Manage Users
      </Typography>

      {loading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead style={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Username</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Location</b></TableCell>
                <TableCell><b>Role</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.length > 0 ? (
                allUsers.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.location}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

