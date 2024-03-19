import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideTop from "@/assets/side-top-news.png";


const SideBar = () => {
    return (
      <Box className='my-5'>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={sideTop} alt="Top News" width={800} />
            </CardMedia>
            <CardContent>
              <p className="bg-red-600 text-white px-2 py-1 rounded my-5 w-28 text-center">
                Technology
              </p>
              <Typography gutterBottom>
                Bitcoin climbs as Elon Musk says Tesla likely to accept it again
              </Typography>
              <Typography gutterBottom className="my-3">
                Arzena Akter - Mar 16 2024
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout........
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    );
};

export default SideBar;