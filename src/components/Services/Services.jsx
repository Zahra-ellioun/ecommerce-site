import React from "react";
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 py-6">
      <div className="container">
        {/* grid container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* item 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 justify-start">
            <FaCarSide className="text-4xl text-primary" />
            <div>
              <p className="capitalize font-bold text-black dark:text-white text-md ">
                free shipping
              </p>
              <p className="capitalize text-sm text-gray-600  ">
                free shipping on all order
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 justify-start">
            <FaCheckCircle className="text-4xl text-primary" />
            <div>
              <p className="capitalize font-bold text-black dark:text-white text-md ">
                safe money
              </p>
              <p className="capitalize text-sm text-gray-600  ">
                30 days money back
              </p>
            </div>
          </div>
          {/* item 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 justify-start">
            <FaWallet className="text-4xl text-primary" />
            <div>
              <p className="capitalize font-bold text-black dark:text-white text-md ">
                secure payment
              </p>
              <p className="capitalize text-sm text-gray-600  ">
                all peyment secure
              </p>
            </div>
          </div>
          {/* item 4 */}
          <div className="flex flex-col sm:flex-row items-start gap-4 justify-start">
            <FaHeadphonesAlt className="text-4xl text-primary" />
            <div>
              <p className="capitalize font-bold text-black dark:text-white text-md ">
                online support 24/7
              </p>
              <p className="capitalize text-sm text-gray-600  ">
                technical support 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
