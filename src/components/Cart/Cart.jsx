/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const Cart = ({ allCredit }) => {
  return (
    <div>
      <div>
        <h3 className="font-semibold my-4">Credit Hour Remaining: </h3>
        <h3 className="text-xl font-bold my-4">Course Name: </h3>
        {allCredit.map((item) => (
          <li className="list-decimal ml-6 text-lg font-medium" key={item.id}>{item.course_name}</li>
        ))}
        <h3 className="text-xl font-semibold my-4">Total Credit Hour: </h3>
      </div>
    </div>
  );
};

export default Cart;
