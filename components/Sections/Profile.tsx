import React from 'react'
import Image from "next/image";
import {contactList, profilePicUrl} from "@/constants";

const Profile = () => {
    return (
        <div className="w-full h-full col-flex-center">
            <div className="col-flex-center mb-3 ">
                <div className="row-flex-center gap-2 mb-4 ">
                    <a href={contactList[5].link} target="_blank">
                        <Image
                               className="w-6 aspect-square  rounded-full hover:scale-110 transition-all  "
                               src={contactList[5].image} alt={contactList[5].contact}>
                        </Image>
                    </a>
                    <div className="rounded-full w-16 aspect-square bg-gradient-to-br from-purple-700 via-blue-300 to-green-600 col-flex-center mt-4 smooth-expand">
                        <Image className="rounded-full w-15 aspect-square" src={profilePicUrl} alt="Profile" />
                    </div>
                    <a  href={contactList[4].link} target="_blank">
                        <Image
                            className="w-6 aspect-square  rounded-full hover:scale-110 transition-all"
                            src={contactList[4].image} alt={contactList[4].contact}>
                        </Image>
                    </a>
                </div>

                <h3 className="text-sm font-semibold text-white">BlackDav</h3>
            </div>
            <div className="row-flex-center gap-3 mt-2">
                {contactList.map((item, index) => (
                    (index <= 3 && <a key={index} href={item.link} target="_blank">
                        <Image key={index}
                               className="w-7 aspect-square  rounded-full hover:scale-110 transition-all  "
                               src={item.image} alt={item.contact}>
                        </Image>
                        </a>
                        )
                ))}


            </div>


        </div>
         )
}
export default Profile
