import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ title, price, imageUrl, description }) => {
  return (
    <Card sx={{ width: 350, height: 300 }}>
      <CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
