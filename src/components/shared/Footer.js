import { Box, Button, Container, Typography } from '@mui/material';
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

const NavItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/category",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Post",
    pathName: "/post",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

const Footer = () => {
    return (
      <Box className="bg-black px-2 py-10">
        <Container>
          <Box
          className='w-full text-center'
            sx={{
              " & svg ": {
                color: "white",
              },
            }}
          >
          
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
           
          </Box>
          <Box className="w-full text-center">
            {NavItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
                </Box>
                <Typography variant='body2' color='gray' textAlign='center'> @2024 The News Portal. Design by Arzena</Typography>
        </Container>
      </Box>
    );
};

export default Footer;