import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 300,
        borderRadius: 2,
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <CardMedia
        sx={{
          height: 240,
          backgroundSize: "cover",
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{ color: "secondary.main", textTransform: "uppercase" }}
          gutterBottom
          variant="h6"
        >
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">
          view
        </Button>
      </CardActions>
    </Card>
  );
}
