import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async() => {
    const {data: allCategories} = await getAllCategories()
    console.log(allCategories);
    return (
      <Box className="mt-5 px-5 py-2 bg-gray-100">
        <Typography variant="h6">Categories</Typography>
        <Divider />
        <Stack rowGap={1} className="mt-3">
          {allCategories.map((category) => (
            <Button key={category.id} variant="outlined">
              <Link href={`/category/news?category=${category.title.toLowerCase()}`}>
                {category.title}
              </Link>
            </Button>
          ))}
        </Stack>
      </Box>
    );
};

export default CategoryList;