import { FC } from 'react';
import { toast } from 'react-toastify';

const Cart: FC = () => {
  const showToast = () => {
    const userConfirmed = window.confirm("คุณต้องการยืนยันการสั่งซื้อหรือไม่?");

    if (userConfirmed) {
      toast.success("สั่งซื้อเรียบร้อย");
    }
  };

  return (
    <div className="p-6 bg-yellow-400 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Shipping</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border border-zinc-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-zinc-300 rounded" />
          <input type="text" placeholder="Address" className="w-full p-2 border border-zinc-300 rounded" />
          <input type="text" placeholder="City" className="w-full p-2 border border-zinc-300 rounded" />
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="State" className="flex-1 p-2 border border-zinc-300 rounded" />
            <input type="text" placeholder="Zip" className="flex-1 p-2 border border-zinc-300 rounded" />
          </div>
          <button
            type="button"
            onClick={showToast}
            className="w-full p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-all"
          >
            Confirm
          </button>
        </form>
      </div>
      <div className="flex-1 p-4 border-l border-zinc-300">
        <div className="flex items-center justify-between mb-4">
          <img src="https://placehold.co/50x50" alt="Two Piece Bunny Prints" className="rounded" />
          <div className="flex flex-col items-start ml-4">
            <span>Two Piece Bunny Prints</span>
            <span>$458.99</span>
            <select className="border border-zinc-300 rounded mt-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <img src="https://placehold.co/50x50" alt="Mesh Irregular Slim" className="rounded" />
          <div className="flex flex-col items-start ml-4">
            <span>Mesh Irregular Slim</span>
            <span>$328.56</span>
            <select className="border border-zinc-300 rounded mt-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <img src="https://placehold.co/50x50" alt="Sweet Lolita Dress" className="rounded" />
          <div className="flex flex-col items-start ml-4">
            <span>Sweet Lolita Dress</span>
            <span>$387.89</span>
            <select className="border border-zinc-300 rounded mt-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
