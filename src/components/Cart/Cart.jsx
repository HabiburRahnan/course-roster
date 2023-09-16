/* eslint-disable react/prop-types */
const Cart = ({ allCredit, remaining, totalHour }) => {
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold my-4">
          Credit Hour Remaining: {remaining} hrs
        </h3>
        <h3 className="text-2xl font-bold my-4">Course Name</h3>
        {allCredit.map((item) => (
          <li key={item.id} className="list-decimal ml-6 text-lg font-medium">
            {item.course_name}
          </li>
        ))}
        <h3 className="text-xl font-semibold my-4">
          Total Credit Hour:{totalHour} hrs
        </h3>
      </div>
    </div>
  );
};

export default Cart;
