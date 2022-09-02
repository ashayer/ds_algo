import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import styles from "./navbarStyles";
// import useAuthStore from "../../stores/authStore";
// import { useNavigate } from "react-router-dom";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import axios from "axios";
// import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import AccountMenu from "../AccountMenu/AccountMenu";
import { signOut, useSession } from "next-auth/react";

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

  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      {session?.user && (
        <Grid item container sx={{ ...styles.navBarContainer }} xs={11}>
          <Grid item>
            <Link href="/home" passHref>
              <MUILink sx={{ textDecoration: "none" }}>
                <Typography variant="h2">DS ALGO</Typography>
              </MUILink>
            </Link>
          </Grid>
          {/*spacer, probably unneeded */}
          <Grid item sx={{ flexGrow: 1 }} />
          {session && (
            <Grid item>
              <AccountMenu />
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default Navbar;
