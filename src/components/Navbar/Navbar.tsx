import { useContext, createContext } from "react";
import { Box, Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import styles from "./navbarStyles";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import AccountMenu from "../AccountMenu/AccountMenu";
import { signOut, useSession } from "next-auth/react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ColorModeContext } from "../../pages/_app";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const { data: session } = useSession();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      {session?.user && (
        <Grid item container sx={{ ...styles.navBarContainer }} xs={11}>
          <Grid item>
            <Link href="/home" passHref>
              <MUILink sx={{ textDecoration: "none" }}>
                <Typography variant="h2" color="secondary">
                  DS ALGO
                </Typography>
              </MUILink>
            </Link>
          </Grid>
          {/*spacer, probably unneeded */}
          <Grid item sx={{ flexGrow: 1 }} />
          <Grid item>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Grid>
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
