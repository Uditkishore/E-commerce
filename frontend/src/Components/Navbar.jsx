import React from "react";
import { Stack, Link } from "@mui/material";
export const Navbar = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Link>Shop</Link>
        <Link>About</Link>
        <Link>Location Locator</Link>
      </Stack>
    </>
  );
};
