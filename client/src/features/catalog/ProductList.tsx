import { Product } from "../../app/models/product";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Box>
  );
}
