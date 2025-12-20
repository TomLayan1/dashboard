import { X, House, Mail, Phone } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
type EditInfoPropType = {
  setEdit: Dispatch<SetStateAction<boolean>>
}
export default function EditInfo({ setEdit }: EditInfoPropType) {
  return(
    <div className="w-full h-full bg-[#000000ae] backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center">
      <div className="w-[600px] bg-[#3e3e3ea1] p-6 rounded-xl">
        <div className="w-full flex items-center justify-between mb-6">
          <p className="text-[18px] font-bold">Edit Personal Info</p>
          <button
            onClick={() => setEdit(false)}
            className="cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <form>
          <div className="mb-4">
            <p className="text-[15px] mb-1.5">Phone Number</p>
            <div className="flex items-center gap-2.5 w-full border border-[#b81c1c] px-1 rounded-md">
              <div className="bg-[#3e3e3ecf] p-2 rounded-md">
                <Phone size={18} />
              </div>
              <input
                className="w-full py-2 text-[15px] outline-0 rounded-md"
                placeholder="New Phone Number"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[15px] mb-1.5">Email</p>
            <div className="flex items-center gap-2.5 w-full border border-[#b81c1c] px-1 rounded-md">
              <div className="bg-[#3e3e3ecf] p-2 rounded-md">
                <Mail size={18} />
              </div>
              <input
                className="w-full py-2 text-[15px] outline-0 rounded-md"
                placeholder="New Email Address"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[15px] mb-1.5">Address</p>
            <div className="flex items-center gap-2.5 w-full border border-[#b81c1c] px-1 rounded-md">
              <div className="bg-[#3e3e3ecf] p-2 rounded-md">
                <House size={18} />
              </div>
              <input
                className="w-full py-2 text-[15px] outline-0 rounded-md"
                placeholder="New Address"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}