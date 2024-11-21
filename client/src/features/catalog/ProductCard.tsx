import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "secondary.main" },
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain" , bgcolor:"primary.light"}}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          ${product.price.toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">add to cart</Button>
        <Button size="small">view</Button>
      </CardActions>
    </Card>
  );
}
