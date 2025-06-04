const Footer = ({color}) => {
  const isColor = color === "light";
  return (
    <div>
        <div className={`${isColor ? "text-black" : "text-white"}`}><hr /></div>
        <div className="flex justify-between max-w-[1200px] mx-auto py-9 text-white">
            <span className={`${isColor ? "text-black" : "text-white"} text-3xl font-medium text-center`}>BillMate</span>
            <span className={`${isColor ? "text-black" : "text-white"} text-3xl font-medium text-center`}>All rights reserved @2025</span>
        </div>

    </div>
  )
}

export default Footer