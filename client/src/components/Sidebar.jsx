import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import verifyMe from "../assets/icons/VerifyME-Logo.svg";
import ShortTextRoundedIcon from '@mui/icons-material/ShortTextRounded';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const [activeItem, setActiveItem] = React.useState(null); // Track active item

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState({ right: open });
    };

    const handleListItemClick = (index) => {
        setActiveItem(index);
    };

    const list = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                    padding: 2, // Add some padding if needed
                }}
            >
                <Box
                    component="img"
                    sx={{
                        width: 120,
                    }}
                    alt="The house from the offer."
                    src={verifyMe}
                />
            </Box>
            <List>
                {["Dashboard", "My Backpack", "Profile"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            selected={activeItem === index + 4} // Offset by 4 to handle different sections
                            onClick={() => handleListItemClick(index + 4)}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="inbox-content"
                        id="inbox-header"
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Management" />
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {["Badge Management", "Earner Management"].map(
                                (text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            selected={activeItem === index}
                                            onClick={() =>
                                                handleListItemClick(index)
                                            }
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="send-email-content"
                        id="send-email-header"
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {["Change Password", "Report"].map(
                                (text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            selected={activeItem === index + 2} // Offset by 2 for unique selection
                                            onClick={() =>
                                                handleListItemClick(index + 2)
                                            }
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            )}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)} color="black">
                <ShortTextRoundedIcon />
            </Button>
            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}
