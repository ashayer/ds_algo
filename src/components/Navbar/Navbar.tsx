import { Button, Grid, IconButton, Link, Typography } from "@mui/material";
import styles from "./navbarStyles";
// import useAuthStore from "../../stores/authStore";
// import { useNavigate } from "react-router-dom";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import axios from "axios";
// import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  // const user = useAuthStore((state) => state.isUser);

  // const setUser = useAuthStore((state) => state.setIsUser);
  // const username = useAuthStore((state) => state.username);
  // const navigate = useNavigate();

  // const logoutUser = async () => {
  //   navigate("/login");
  //   setUser(false, "", "");
  //   localStorage.removeItem("user");
  //   await axios.post("/api/user/logout");
  // };

  return (
    <Grid item container sx={{ ...styles.navBarContainer }} xs={11}>
      <Grid item sx={{ flexGrow: 1 }}>
        <Link component="button" underline="none">
          <Typography variant="h2">
            <strong>DS ALGO</strong>
          </Typography>
        </Link>
      </Grid>
      {true && (
        <>
          <Grid
            item
            sx={{
              ...styles.navBarIsUserBox,
            }}
          ></Grid>
          <Grid item>
            <Button variant="contained">LOG OUT</Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Navbar;
