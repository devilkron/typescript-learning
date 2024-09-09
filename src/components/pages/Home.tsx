import { FC, useEffect, useState } from "react";
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
// import image1 from "../../assets/caseIP.jpg";
// import image2 from "../../assets/chargeIP.jpg";
// import image3 from "../../assets/headsetLG.jpg";
// import '../../index.css'
import Magnifier from "../Magnifier";
import Basket from "../Basket";
import axios from "axios";

// interface Product {
//   img: string;
//   desc: string;
//   cal: string;
// }
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ใช้ string แทน Date เพื่อเก็บข้อมูลวันเวลา
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}


// const products: Product[] = [
//   { img: image1, desc: "เคสมือถือ", cal: "สินค้าคุณภาพดี หลากหลายสีสัน" },
//   { img: image2, desc: "สายชาร์จ", cal: "สายชาร์จ TYPE-C ชาร์จเร็ว ทนทาน" },
//   { img: image3, desc: "หูฟัง", cal: "หูฟัง Logitech เสียงดี เบสหนัก" },
// ];

const Home: FC = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState<Product[]>([])
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
  useEffect(() => {
const drummy = async () => {
  try{
    const rs = await axios.get('https://dummyjson.com/products/search?q=phone')
    setItem(rs.data.products)
    // console.log(rs.data)
  }catch(err){
    console.log(err)
  }
}
drummy()
  },[]) 
// console.log(item)
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

      <div className="flex justify-center items-center py-10">
  <div className="relative w-full max-w-md">
    <input type="text" placeholder="Search..." className="w-full py-3 pl-4 pr-4 rounded-full bg-white border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
  </div>
</div>

      <Grid container spacing={3}>
        {item.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea onClick={() => handleClickOpen(product)}>
                <CardMedia
                  component="img"
                  height={150}                  
                  image={product.images[0]}
                  alt={product.title}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
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
            <DialogTitle>{selectedProduct.title}</DialogTitle>
            <DialogContent>
              <Magnifier imageSrc={selectedProduct.images[0]} zoomFactor={2} />
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
