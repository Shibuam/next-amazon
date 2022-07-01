import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import NextLink from "next/link";
import { Link, Grid,List, ListItem, Typography,Card,Button} from "@material-ui/core";

import data from "../../utils/data";
import Layout from "../../components/Layout";

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  console.log(product);
  if (!product) {
    return;
    <div>invalid product</div>;
  }

  return (
    <Layout title={product.name}>
      <NextLink href="/" passHref>
        <Link>
          <h1>Back to Product</h1>
        </Link>
      </NextLink>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Image
           src={product.image}
           height={340}
           width={340}
           layout='responsive'
            >

          </Image>
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
          <ListItem>  <Typography component='h1' variant="h1"> Name:{product.name}</Typography></ListItem>
           <Typography> <ListItem>Category:{product.category}</ListItem></Typography>
            <ListItem><Typography>Brand:{product.brand}</Typography></ListItem>
            <ListItem><Typography>Rating:{product.rating} Stars ({product.numReviews} Reviews)</Typography></ListItem>
            <ListItem><Typography>Description:{product.description}</Typography></ListItem>
          </List>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
        <List>
          <Grid container>
            <Grid item xs={6} >
              <ListItem> <Typography>Price:</Typography></ListItem>
             
            </Grid>
            <Grid item xs={6} >
            <ListItem> <Typography>${product.price}</Typography></ListItem>
</Grid>
<Grid item xs={6} >
              <ListItem> <Typography>Status:</Typography></ListItem>
             
            </Grid>
            <Grid item xs={6} >
            <ListItem> <Typography>{product.countInStock>0?'Available':"Unavailable"}</Typography></ListItem>
</Grid>
<ListItem>
<Button fullWidth variant="contained"   color="primary">Add to Cart</Button>
</ListItem>


          </Grid>
        </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
