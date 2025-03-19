import { Vortex } from "@/components/ui/vortex"

export default function VortexDemo() {
  return (
    <div className="w-full mx-0 rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-0 md:px-0 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center flex items-center gap-2">
          Wanna Get in Touch? <span>📩</span>
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Make your financial dreams come true. Get in touch with me today.
        </p>
      </Vortex>
    </div>
  )
}
