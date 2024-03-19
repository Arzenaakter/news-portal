import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import TopNews from "@/assets/top-news.png";
import TopNews2 from "@/assets/top-news2.png";


const LatestNews = () => {
    return (
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={TopNews} alt="Top News" width={800} />
            </CardMedia>
            <CardContent>
              <p className="bg-red-600 text-white px-2 py-1 rounded my-5 w-28 text-center">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
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
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="mt-5"
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={TopNews2} alt="Top News" width={800} />
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 text-white px-2 py-1 rounded my-5 w-28 text-center">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Bitcoin climbs as Elon Musk says Tesla likely to accept it
                    again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    Arzena Akter - Mar 16 2024
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
};

export default LatestNews;