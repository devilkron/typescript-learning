import React from "react";
import { Button } from "@mui/material";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useNavContext } from "../context/Navcontext";
interface BasketProps {
  width?: number;
}

const Basket: React.FC<BasketProps> = ({ width = 200 }) => {
    const { setSelectedKey } = useNavContext();
    const navigate = useNavigate()

  const handleClick = () => {
    setSelectedKey('cart');
    navigate('/Cart');
  };
  return (
    <div className={`fixed bottom-5 right-5 z-50 `} style={{ width }}>
      <Button onClick={handleClick} variant="contained" className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" fullWidth>
      <ShoppingCartIcon/> ตะกร้าสินค้า
      </Button>


    </div>
  );
};

export default Basket;
