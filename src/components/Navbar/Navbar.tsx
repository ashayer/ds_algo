import { useContext, createContext } from "react";
import { Box, Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import styles from "./navbarStyles";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import AccountMenu from "../AccountMenu/AccountMenu";
import { signOut, useSession } from "next-auth/react";


const Navbar = () => {
  const { data: session } = useSession();
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
