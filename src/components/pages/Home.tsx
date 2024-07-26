import { FC, useState } from "react";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import image1 from "../../assets/caseIP.jpg";
import image2 from "../../assets/chargeIP.jpg";
import image3 from "../../assets/headsetLG.jpg";
// import '../../index.css'
import Magnifier from "../Magnifier";
import Basket from "../Basket";

interface Product {
  img: string;
  desc: string;
  cal: string;
}

const products: Product[] = [
  { img: image1, desc: "เคสมือถือ", cal: "สินค้าคุณภาพดี หลากหลายสีสัน" },
  { img: image2, desc: "สายชาร์จ", cal: "สายชาร์จ TYPE-C ชาร์จเร็ว ทนทาน" },
  { img: image3, desc: "หูฟัง", cal: "หูฟัง Logitech เสียงดี เบสหนัก" },
];

const Home: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const Additem = () => {
    toast.success("เพิ่มไปยังตะกร้าแล้วครับ");
  };

  const handleClickOpen = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <div className="bg-amber-500 rounded-md text-center w-full">
          <Marquee speed={100}>
            <h1 className="text-white text-lg">
              ยินดีต้อนรับสู่ร้าน Korn Mobile จำหน่ายสินค้า Accessories
              โทรศัพท์มือถือ ไอแพด และแลปท็อป
            </h1>
          </Marquee>
        </div>
      </div>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(product)}>
                <CardMedia
                  component="img"
                  height={140}
                  image={product.img}
                  alt={product.desc}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.desc}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.cal}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box display="flex" flexGrow={1} justifyContent="space-between">
                  <Button
                    onClick={() => Additem()}
                    size="small"
                    color="primary"
                  >
                    ADD TO BAG
                  </Button>
                  <Button size="small">More...</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for showing the enlarged image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.desc}</DialogTitle>
            <DialogContent>
              <Magnifier imageSrc={selectedProduct.img} zoomFactor={2} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                ปิด
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Basket width={200} />
    </div>
  );
};

export default Home;
