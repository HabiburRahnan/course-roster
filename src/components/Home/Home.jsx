import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { BsBook } from "react-icons/bs";

const Home = () => {
  const [registrationCard, setRegistrationCard] = useState([]);

  useEffect(() => {
    fetch(`../course.json`)
      .then((res) => res.json())
      .then((data) => setRegistrationCard(data));
  }, []);

  return (
    <div>
      {/* main container */}
      <div className="flex ">
        {/* Card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-5">
          {/* card */}

          {registrationCard.map((item) => (
            <div
              key={item.id}
              className="card card-compact  bg-base-100 shadow-xl mt-6 ">
              <img className="rounded-2xl" src={item.image} alt="Image" />
              <div className="card-body">
                <h2 className="card-title ">{item.course_name}</h2>
                <p className="">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                {/* price and credit section */}
                <div className="text-base flex">
                  <p>$ Price:{item.price}</p>
                  <div className="flex items-center gap-2">
                    <BsBook></BsBook>
                    <p>Credit: {item.credit} hrs</p>
                  </div>
                </div>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary w-full">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
