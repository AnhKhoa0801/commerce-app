import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", url: "/catalog" },
  { title: "about", url: "/about" },
  { title: "contact", url: "/contact" },
];

const rightLinks = [
  { title: "login", url: "/login" },
  { title: "register", url: "/register" },
];

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

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

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            re-store
          </Typography>

          <Switch checked={darkMode} onChange={handleThemeChange} />
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
    </AppBar>
  );
}
