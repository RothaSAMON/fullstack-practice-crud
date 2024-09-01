import {
    Box,
    Typography,
    Link,
    Container,
    Grid,
    Divider,
    List,
    ListItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import verifyMe from "../assets/icons/VerifyME-Logo.svg";

const Footer = () => {
    const linkItemStyle = {
        color: "text.secondary",
        textDecoration: "none",
        fontFamily: "default",
        marginTop: "28px",
    };

    return (
        <Box sx={{ bgcolor: "#f5f5f5", py: 2 }}>
            <Container maxWidth="lg" sx={{ maxWidth: "1600px", py: 1, mb: 3 }}>
                <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Grid item xs={12} md={3}>
                        <Box
                            component="img"
                            sx={{
                                width: 120,
                            }}
                            alt="The house from the offer."
                            src={verifyMe}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{marginLeft: "20px"}}>
                            VerifyME by TechA is a digital credential network.
                            We help the people speak a common language of
                            verified knowledge, skills, and abilities.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontStyle: "Monospace" }}
                        >
                            Learn More
                        </Typography>

                        <List>
                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>About Us</Link>
                            </ListItem>

                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>Support</Link>
                            </ListItem>

                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>Careers</Link>
                            </ListItem>

                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>For Developers</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontStyle: "Monospace" }}
                        >
                            Other Solutions
                        </Typography>
                        <List>
                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>Tech A Workforce</Link>
                            </ListItem>

                            <ListItem
                                sx={{
                                    padding: "0px",
                                }}
                            >
                                <Link sx={linkItemStyle}>Help</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontStyle: "Monospace" }}
                        >
                            Social Media
                        </Typography>

                        <List sx={{display: "flex", gap: 2}}>
                            <Link sx={linkItemStyle}>
                                <FacebookIcon fontSize="large"/>
                            </Link>

                            <Link sx={linkItemStyle}>
                                <InstagramIcon fontSize="large"/>
                            </Link>

                            <Link sx={linkItemStyle}>
                                <TwitterIcon fontSize="large"/>
                            </Link>
                        </List>
                    </Grid>
                </Grid>
            </Container>

            <Divider />

            <Box sx={{ bgcolor: "inherit", color: "inherit", py: 1, mt: 2 }}>
                <Container maxWidth="lg" sx={{ maxWidth: "1600px" }}>
                    <Typography
                        variant="body2"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "text.secondary",
                        }}
                    >
                        © Copyright - Tech A
                        <List
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                            }}
                        >
                            <Link
                                sx={{
                                    color: "text.secondary",
                                    textDecoration: "none",
                                }}
                            >
                                Terms of Use
                            </Link>

                            <Link
                                sx={{
                                    color: "text.secondary",
                                    textDecoration: "none",
                                }}
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                sx={{
                                    color: "text.secondary",
                                    textDecoration: "none",
                                }}
                            >
                                Cookies
                            </Link>
                        </List>
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
