import { Button } from '@mui/material'
import {FC} from 'react'
import { toast } from 'react-toastify';

const Cart: FC = () => {
    const showToast = () => {
        toast.success("ยินดีต้อนรับครับผม");
      };
  return (
    <div>Cart page
        <div>
        <div className="flex justify-center mt-4">
        <Button
          onClick={showToast}
          variant="contained"
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          คลิก ME
        </Button>
      </div>
        </div>
    </div>
  )
}

export default Cart