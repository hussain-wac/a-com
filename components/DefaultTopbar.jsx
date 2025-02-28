import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function DefaultTopbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E88E5" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
        A-com
        </Typography>

        {/* Icons Section */}
        <Box display="flex" alignItems="center" gap={3}>
          <Button component={Link} href="/about" sx={{ color: "white" }}>
            About
          </Button>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button component={Link} href="/signup" sx={{ color: "white" }}>
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DefaultTopbar;
