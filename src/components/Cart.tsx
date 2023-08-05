import {useAppSelector } from "../redux/hooks";
import { IProduct } from "../types/GlobalTypes";
import CartCard from "./CartCard";

function Cart() {
    const {books} = useAppSelector((state) => state.cart)
  
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-20 gap-x-8 gap-y-8 ">
            {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
            {books?.map((product: IProduct, i: number) => (
              <CartCard product={product} key={i}></CartCard>
            ))}
          </div>
    </div>
  )
}

export default Cart
