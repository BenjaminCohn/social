import Image from "next/image"

const Ad = ({size}:{size:"sm" | "md" |"lg"}) =>{
    return ( 
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="Ads" width={16} height={16} className=""></Image>
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4" }`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                     <Image src="/work.jpg" alt="Ads" fill className="rounded-lg object-cover"></Image>
                </div>
                <div className="flex items-center gap-4">
                    <Image src="/you2.jpg" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover" />
                <span className="text-blue-500 font-medium"></span>
                </div>
                    <p className={size === "sm" ? "text-xs" : "text-sm"}> 
                    {size === "sm" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit .Totam ex cum harum ad nulla molestiae vitae blanditiis sequi eos. Nam voluptatum pariatur magni iste. Provident cumque incidunt odit rem? Voluptatibus.." : size === "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit .Totam ex cum harum ad nulla molestiae vitae blanditiis sequi eos. Nam voluptatum pariatur magni iste. Provident cumque incidunt odit rem? Voluptatibus.." : ""}
                    </p>
                    <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn more</button>
            </div>
        </div>
    )
}

export default Ad

