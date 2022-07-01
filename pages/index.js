
import NextLink from 'next/link'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography ,container,Link} from "@material-ui/core"

import Layout from "../components/Layout"
import data from '../utils/data'
export default function Home() {
  return (
    <Layout>
  <div>
      <h1>Products</h1>
    <Grid container spacing={3}>
      {data.products.map((product)=>
      <Grid  item key={product.name} md={4}>
        <Card >
        <NextLink href={`/product/${product.slug}`}  passHref>
          
          <CardActionArea>
            <CardMedia
             component='img'
             image={product.image}
             title={product.name}

             >
       
            </CardMedia>
              <CardContent>
                <Typography>{product.name}</Typography>
              </CardContent>
           
          </CardActionArea>
        
      </NextLink>
     <CardActions>
     <Typography>${product.price}</Typography>
     </CardActions>
     <Button size='small' color="primary">Add to Cart</Button>
        </Card>
        </Grid>
      
      )}
    </Grid>
    </div>
    </Layout>
  
  )
}
