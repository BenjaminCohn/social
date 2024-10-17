"use client"

import { updateProfile } from "@/lib/actions"
import { User } from "@prisma/client"
import Image from "next/image"
import { useActionState, useState } from "react"
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from "next/navigation"
import UpdateButton from "./UpdateButton"

const UpdateUser = ({user} : {user: User}) =>{
    
    const [open, setOpen]= useState(false)
    const [cover, setCover]= useState<any>(false)
    
    const [state, formAction] = useActionState(updateProfile, {succes: false,error:false})
    const router = useRouter()



    const handleCLose = ()=>{
        setOpen(false)
        state.succes && router.refresh()
    }



    return ( 
        <div className="">
            <span className="text-blue-500 text-xs cursor-pointer" onClick={()=>setOpen(true)}>
                Update
            </span>
                {open && (<div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
                    <form action={(formData) => formAction({formData, cover: cover?.secure_url || "" })} className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 md:w-1/2 xl:w-1/3 relative">
                    {/* TITLE */}
                    <h1>Update Profile</h1>
                    <div className="mt-4 text-xs text-gray-500">
                        Use the navbar profile to change the avatar or username.
                    </div>
                    {/* COVER UPLOAD*/}
                    <CldUploadWidget uploadPreset="social" onSuccess={(result) => setCover(result.info)}>
                        {({ open }) => {
                        return ( 
                            <div className="flex flex-col gap-4 my-4"onClick={() => open()}>
                            <label htmlFor="flex flex-col gap-4 my-4">Cover Picture</label>
                            <div className="flex items-center gap-2 cursor-pointer" >
                            <Image src={user.cover || "/noCover.png"} alt="" width={48} height={48}  className="w-12 h-8 rounded-md object-cover"/>
                            <span className="text-xs underline text-gray-500">Change</span>
                        </div>
                        </div>
                        );
                    }}
                    </CldUploadWidget>
                    
                   
                    {/* WRAPPER */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500" >
                                First name
                            </label>
                            <input type="text" placeholder={user.name || "John" } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
                            name="name"/>
                        </div> 
                        <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                surname
                            </label>
                            <input type="text" placeholder={user.surname || "doe" } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
                            name="surname"/>
                        </div> 
                    </div>

                    {/* {INPUT} */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Description
                            </label>
                            <input type="text" placeholder={user.description || "Enjoy the life" } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
                            name="description"/>
                        </div> 
                    </div>

                    {/* {INPUT} */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                City
                            </label>
                            <input type="text" placeholder={user.city|| "Paris" } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
                            name="city"/>
                        </div> 
                    </div>

                    {/* {INPUT} */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                School
                            </label>
                            <input type="text" placeholder={user.school || "MIT" } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm" 
                            name="school" />
                        </div> 
                    </div>

                    {/* {INPUT} */}
                    <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Work
                            </label>
                            <input type="text" placeholder={user.work || "Apple Inc." } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="work" />
                        </div> 
                    </div>

                     {/* {INPUT} */}
                     <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="" className="text-xs text-gray-500">
                                Website
                            </label>
                            <input type="text" placeholder={user.website || "..." } className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
                            name="website"
                            />
                        </div> 
                    </div>
                    </div>
                    <UpdateButton />
                        {state.succes && <span className="text-green-500">Profile has been updated !</span>}
                        {state.error && <span className="text-red-700">Something went wrong !</span>}
                        <div className="absolute w-4 h-4 bg-red-700 text-white text-xs right-2 top-3 cursor-pointer items-center" onClick={handleCLose}>
                            X
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default UpdateUser