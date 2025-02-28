import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function DefaultTopbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E88E5" }}>
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        {/* Logo Section */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
        >
          A-com
        </Typography>

        {/* Icons and Buttons Section */}
        <div>
          <Button component={Link} href="/about" sx={{ color: "white", mr: 2 }}>
            About
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button component={Link} href="/signup" sx={{ color: "white", ml: 2 }}>
            Signup
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default DefaultTopbar;
