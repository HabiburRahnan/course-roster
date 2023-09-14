import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { BsBook } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [registrationCard, setRegistrationCard] = useState([]);
  const [allCredit, setAllCredit] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  useEffect(() => {
    fetch(`../course.json`)
      .then((res) => res.json())
      .then((data) => setRegistrationCard(data));
  }, []);

  const handleSelectItem = (item) => {
    const isExist = allCredit.find((list) => list.id == item.id);
    console.log(isExist);
    let count = item.credit;
    if (isExist) {
      //   return alert("all ready bok");
      return toast.error("This didn't work.");
    } else {
      allCredit.forEach((list) => {
        count += list.credit;
      });

      const totalRemaining = 20 - count;

      if (count > 20) {
        alert("hour ses r hbr na");
      } else {
        setTotalHour(count);
        setRemaining(totalRemaining);
        setAllCredit([...allCredit, item]);
      }
    }
  };

  console.log(allCredit);
  return (
    <div>
      {/* main container */}
      <div className="flex justify-around ">
        {/* Card container */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-5">
          {/* card */}

          {registrationCard.map((item) => (
            <div
              key={item.id}
              className="card card-compact   bg-base-100 shadow-xl mt-6 ">
              <img className="rounded-2xl" src={item.image} alt="Image" />
              <div className="card-body">
                <h2 className="card-title ">{item.course_name}</h2>
                <p className="">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                {/* price and credit section */}
                <div className="text-lg flex">
                  <p>$ Price:{item.price}</p>
                  <div className="flex items-center gap-2">
                    <BsBook></BsBook>
                    <p>Credit: {item.credit} hrs</p>
                  </div>
                </div>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => handleSelectItem(item)}
                    className="btn btn-primary w-full">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <Cart
            remaining={remaining}
            totalHour={totalHour}
            allCredit={allCredit}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
