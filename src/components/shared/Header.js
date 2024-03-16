import { Box, Container,Typography } from "@mui/material";
import Image from "next/image";
import HeadingImage from "@/assets/The-Dragon-News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate();
    return (
      <Box className='w-full my-5'>
        <Container>
          <Image src={HeadingImage} alt="Heading Image" width={500} height={500} className="mx-auto"/>
          <Typography variant='body2' color='gray' textAlign='center' className=' my-2'>Journalism without fear and favour</Typography>
          <Typography  textAlign='center'>{currentDate}</Typography>
        </Container>
      </Box>
    );
};

export default Header;