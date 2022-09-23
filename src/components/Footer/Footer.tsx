import { Grid, Typography, Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        backgroundColor: "#121212",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        p: 5,
      }}
    >
      <Grid item>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Created by Arandeep Hayer
        </Typography>
      </Grid>
      <Grid item>
        <Link target="_blank" href="https://github.com/ashayer" rel="noopener">
          <IconButton color="inherit">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/arandeep/" rel="noopener">
          <IconButton color="inherit">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
