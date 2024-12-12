import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import {addProduct} from '../../redux/slices/productsListsSlice'
export default function ProductCard({product}) {
  const dispatch = useDispatch();



  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://via.placeholder.com/600/771796"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.Description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          price: {product.Price}₪
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          category: {product.Category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">❤️</Button>
        <Button size="small" onClick={()=>dispatch(addProduct(product))}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}

