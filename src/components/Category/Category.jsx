import React from "react";
import earphone from "../../assets/Category/earphone.png";
import watch from "../../assets/Category/watch.png";
import gaming from "../../assets/Category/gaming.png";
import macbook from "../../assets/Category/macbook.png";
import speaker from "../../assets/Category/speaker.png";
import vr from "../../assets/Category/vr.png";
import { Button } from "../index";

const Category = () => {
  return (
    <div className=" py-6">
      <div className="container">
        {/* grid for category container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* item 1 */}
          <div className="rounded-3xl bg-gradient-to-br from-black to-black/70 h-80">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-end">
              {/* text */}
              <div className="pl-5 py-10 space-y-1">
                <p className="text-gray-300">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
              {/* img */}

              <img
                src={earphone}
                alt=""
                className="h-80 sm:h-72 lg:h-64 xl:h-72 object-cover absolute right-0 bottom-0"
              />
            </div>
          </div>
          {/* grid item 2 */}
          <div className="rounded-3xl bg-gradient-to-br from-brandYellow to-brandYellow/70 h-80">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-end">
              {/* text */}
              <div className="pl-6 py-5 space-y-1">
                <p className="text-white">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3">Gadget</p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
              {/* img */}

              <img
                src={watch}
                alt=""
                className="h-72 sm:h-52 object-cover absolute -right-12 top-6"
              />
            </div>
          </div>
          {/* grid item 3 */}
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/70 h-80 sm:col-span-2">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-end">
              {/* text */}
              <div className="pl-6 py-5 space-y-1">
                <p className="text-gray-300">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3">
                  Earphone
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
              {/* img */}

              <img
                src={macbook}
                alt=""
                className="h-72  lg:h-72 object-cover absolute right-0 top-6"
              />
            </div>
          </div>
          {/* grid item 4 */}
          <div className="rounded-3xl bg-gradient-to-br from-gray-400 to-gray-400/50 h-80 sm:col-span-2">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-end">
              {/* text */}
              <div className="pl-6 py-5 space-y-1">
                <p className="text-gray-300">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3">Gaming</p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
              {/* img */}

              <img
                src={gaming}
                alt=""
                className="h-64  lg:h-64 object-cover absolute right-2 top-6"
              />
            </div>
          </div>
          {/* grid item 5 */}
          <div className="rounded-3xl bg-gradient-to-br from-brandGreen to-brandGreen/70 h-80">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-start xl:items-center 2xl:items-end">
              {/* text */}
              <div className="pl-6 py-5 space-y-1">
                <p className="text-gray-300">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3 sm:pb-20 md:pb-3 lg:pb-32 xl:pb-3">
                  VR
                </p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
              {/* img */}

              <img
                src={vr}
                alt=""
                className="h-72 sm:h-52 lg:h-40 xl:h-52 object-cover absolute right-2 bottom-0"
              />
            </div>
          </div>
          {/* grid item 6 */}
          <div className="rounded-3xl bg-gradient-to-br from-brandBlue to-brandBlue/70 h-80">
            {/* content flex */}
            <div className="h-full relative flex items-center sm:items-end">
              {/* text */}
              <div className="pl-6 py-5 space-y-1">
                <p className="text-gray-300">Enjoy</p>
                <p className="text-white font-bold text-2xl">With</p>
                <p className="text-white/50 font-bold text-4xl pb-3">Speaker</p>
                <Button
                  text={"Browse"}
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
              {/* img */}

              <img
                src={speaker}
                alt=""
                className="h-72 sm:h-48 lg:h-40 xl:h-48 object-cover absolute right-0 top-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
