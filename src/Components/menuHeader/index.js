import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import ListMenu from "../../ListMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function MenuListComposition({ direction }) {
  const [openMenu, setOpenMenu] = React.useState(null); // Track which menu is open
  const [hover, setHover] = React.useState([]); // Track hover state for each menu
  const anchorRefs = React.useRef([]); // Store refs for each menu item

  const handleToggle = (index) => {
    setOpenMenu((prevOpen) => (prevOpen === index ? null : index)); // Toggle submenu
  };

  const handleClose = (event) => {
    if (anchorRefs.current.some((ref) => ref && ref.contains(event.target))) {
      return;
    }
    setOpenMenu(null);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(null);
    } else if (event.key === "Escape") {
      setOpenMenu(null);
    }
  }

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (anchorRefs.current.every((ref) => !ref?.contains(event.target))) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHover((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setHover((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  return (
    <Stack direction={direction} spacing={2}>
      {ListMenu.map((item, index) => (
        <div key={index}>
          <Link
            to={item.to || "#"}
            onClick={(e) => !item.to && e.preventDefault()}
          >
            <Button
              ref={(el) => (anchorRefs.current[index] = el)}
              aria-controls={
                openMenu === index ? "composition-menu" : undefined
              }
              aria-expanded={openMenu === index ? "true" : undefined}
              aria-haspopup="true"
              onClick={() => handleToggle(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              sx={{
                color: "white",
                backgroundColor: hover[index] ? "aqua" : "transparent", // Hover effect
                transition: "background-color 0.3s ease",
              }}
            >
              {item.title}
              {item.subMenu ? (
                openMenu === index ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )
              ) : (
                ""
              )}
            </Button>
          </Link>

          {/* Render submenu if it exists */}
          {item.subMenu && (
            <Popper
              open={openMenu === index}
              anchorEl={anchorRefs.current[index]}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: "left top",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={openMenu === index}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {item.subMenu.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            component={Link}
                            to={subItem.to}
                            onClick={handleClose}
                          >
                            {subItem.title}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          )}
        </div>
      ))}
    </Stack>
  );
}

export default MenuListComposition;
