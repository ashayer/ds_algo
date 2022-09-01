import { Grid } from "@mui/material";

const GridCardItem = (props: any) => {
  return (
    <Grid item sx={{ width: props.width ?? "100%", alignSelf: props.alignSelf }}>
      {props.children}
    </Grid>
  );
};

export default GridCardItem;
