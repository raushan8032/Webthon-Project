import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">K72</h1>

      <IconButton className="menuButton">
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </div>
  );
}

export default Navbar;