import { Sidebar,Menu,MenuItem,SubMenu} from "react-pro-sidebar";


function NavBar()
{
    return (
        <Sidebar>
            <Menu>
            <MenuItem><img id="imagen" src="./enlace.png" alt="enlace digital"></img></MenuItem>
            <MenuItem>Contratistas</MenuItem>
            <MenuItem>Pago a Contratistas</MenuItem>
            </Menu>
        </Sidebar>
    );
}

export default NavBar;