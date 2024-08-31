
type propsType ={
    size:string
}

const CartCountBadge:React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-600 text-white text-[12px] ${size} -right-1 top-0 rounded-full grid place-items-center  w-5 h-5` }>3</div>
  )
}

export default CartCountBadge