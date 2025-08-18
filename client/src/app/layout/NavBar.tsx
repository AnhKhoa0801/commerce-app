import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleDarkMode } from "./uiSlice";

const midLinks = [
  { title: "catalog", url: "/catalog" },
  { title: "about", url: "/about" },
  { title: "contact", url: "/contact" },
];

const rightLinks = [
  { title: "login", url: "/login" },
  { title: "register", url: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function NavBar() {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { darkMode } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4" component={NavLink} to="/" sx={navStyles}>
            re-store
          </Typography>
          <IconButton
            onClick={() => {
              dispatch(toggleDarkMode());
            }}
            color="inherit"
          >
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map((link) => (
            <ListItem
              component={NavLink}
              to={link.url}
              key={link.url}
              sx={navStyles}
            >
              <Typography>{link.title.toLowerCase()}</Typography>
            </ListItem>
          ))}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map((link) => (
              <ListItem
                component={NavLink}
                to={link.url}
                key={link.url}
                sx={navStyles}
              >
                <Typography>{link.title.toLowerCase()}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
