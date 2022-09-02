import React from "react";
import { Grid, Typography } from "@mui/material";

//! replace sx with something mui styles thing
export const InPlace = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          In-place means that the algorithm can sort the input without using auxiliary data
          structures and instead directly changes the input list. Typically an in-place sorting
          algorithm will always have a space complexity of O(1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export const OutOfPlace = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Out-of-place means that the algorithm requires an auxillary data structure, or simply
          extra space to run that is not constant. Common space complexities for out-of-place
          algorithms are either O(n) or O(logn).
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Quadratic = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Quadratic means that the time it take to sort is proportional to the square of the size of
          the list. A time complexity of O(n&#178;) is quadratic.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Linearithmic = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Linearithmic means that the time it take to sort is proportional to n(logn) where n is the
          size of the list. This means that the time it takes to run the algorithm is slower than
          quadratic.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Stable = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography gutterBottom>
          A stable algorithm will keep the the elements of the same value in the same original
          order. Consider the example below.
        </Typography>
        <Typography>Imagine we are sorting the tuples below by the LETTER only.</Typography>
        <Typography gutterBottom>(A, 1), (C, 2), (B, 1),(C, 1)</Typography>
        <Typography>
          A stable algorithm will always give us (A, 1), (B, 1), (C, 2),(C, 1) since we care only
          about the letter. An unstable algorithm may switch the position of (C,2) (C, 1).
        </Typography>
      </Grid>
    </Grid>
  );
};

export const UnStable = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography gutterBottom>
          An unstable algorithm will change the order of the elements with the same value. Consider
          the example below.
        </Typography>
        <Typography>Imagine we are sorting the tuples below by the LETTER only.</Typography>
        <Typography gutterBottom>(A, 1), (C, 2), (C, 3), (B, 1),(C, 1)</Typography>
        <Typography>
          An unstable algorithm can give us (A, 1), (B, 1), (C, 1),(C, 2) (C, 3) which changes the
          original of those tuples.
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
          Time complexity refers to the time it takes for an algorithm to run. For sorting
          algorithms the input can change in size, therefore the time complexity of an algorithm is
          usually described by its WORST performing time given an arbitrarily infinite size.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const Space = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Space complexity refers to the amount of memory required to run a certain algorithm. For
          in-place algorithms this is typically O(1), meaning it memory usage is constant regardless
          of the input.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const BigO = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Big O notation is a mathematical notation that refers to the performance of an algorithm
          under an upper asymptotic condition. In the case of sorting algorithms it refers to the
          behavior of the algorithm if the input was in theory infinitely large.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const NestedForLoop = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          A nested for loop is a common pattern used in programming. Any sorting algorithm with this
          will typically have a quadratic time complexity.
        </Typography>
      </Grid>
    </Grid>
  );
};

export const DnC = () => {
  return (
    <Grid container sx={{ maxWidth: "600px", p: 3 }}>
      <Grid item md={12}>
        <Typography>
          Divide and conquer refers to a computer science algorithmic pattern in which recursion is
          used to break down a problem into smaller sub-problems that are more easily solved. The
          solutions to the smaller problems are then combined to give the solution to the original
          larger problem.
        </Typography>
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
