import React from "react";
import { Grid, Typography } from "@mui/material";

export const Abstract = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          An abstract data structure refers to the behavior of a data structure. It is more of a
          conceptual definition that a data structure created in the real-world. For example, an
          array can behave like many other data structures if you only have operations on that array
          respective to the data structure.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Time = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          The time complexity of a data structure refers the time it takes to complete an operation
          using that structure. Typically these operations are to search, access, and insert/delete
          an element.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const FIFO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          First-in-First-Out commonly shortened to FIFO, refers to the behavior of the order of the
          elements. The first element is the FIRST element to be removed from the data structure
          using the respective remove method. The most recent element added will be the last to be
          removed.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const LIFO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Last-in-First-Out commonly shortened to LIFO, refers to the behavior of the order of the
          elements. The first element is the LAST to be removed from the data structure using the
          respective removed method. The most recent element added will be the first to be removed.
          While the first one added will be last.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Methods = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          The methods of a data structure are the operations available to use to alter/view the data
          structure. Typically these operations are simply to delete or add an item. Other
          operations available are to view elements at certain pointers or to check if the data
          structure is empty.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Static = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Static just means that the structure has a limited amount of elements that can be stored.
          This allows for methods to check if the structure is empty/full.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Indexing = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography gutterBottom>
          Indexing refers to the ability of a data structure to provide access to any element in the
          structure given an index. Typically list are zero indexed, meaning the first element has
          an index of 0.
        </Typography>
        <Typography gutterBottom>Consider the example below with an array of [7,2,5].</Typography>
        <Typography gutterBottom>You can access each element with its respective index.</Typography>
        <Typography gutterBottom>array[0] = 7</Typography>
        <Typography gutterBottom>array[1] = 2</Typography>
        <Typography>array[2] = 5</Typography>
      </Grid>
    </Grid>
  );
};

export const Recursion = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography gutterBottom>
          Recursion refers to the behavior of a function, which that function calls itself after a
          series of steps until a condition is met.
        </Typography>
        <Typography>
          Recursion is typically used when the same series of steps need to be executed repeatedly
          that update values used in the next recursive call.
        </Typography>
      </Grid>
    </Grid>
  );
};
