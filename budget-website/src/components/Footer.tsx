import { images } from "@/assets/images"

const Footer = () => {
  return (
    <>
      <div
        className="flex fixed bottom-0 items-center text-center justify-center bg-slate-500 left-1/2 -translate-x-1/2 w-[80%] mb-2 rounded-md py-2 text-white"
      >
        Created with      <img src={images.react} />
      </div>
    </>
  )
}

export default Footer