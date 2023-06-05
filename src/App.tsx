import { useState } from "react";
import { Coupon, CouponProps } from "./components";

function getDatePlusTenDays() {
  var currentDate = new Date(); // Get the current date
  currentDate.setDate(currentDate.getDate() + 9); // Add 10 days to the current date

  // Extract the year, month, and day from the date
  var year = currentDate.getFullYear();
  var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-based
  var day = ("0" + currentDate.getDate()).slice(-2);

  var formattedDate = year + "-" + month + "-" + day; // Format the date as "YYYY-MM-DD"

  return new Date(formattedDate);
}

const coupons: CouponProps[] = [
  {
    title: "Save 50%",
    description: "minimium 3 orders",
    image:
      "https://static.vecteezy.com/system/resources/previews/011/016/165/original/realistic-3d-gift-box-cutout-free-png.png",
    expire_at: getDatePlusTenDays(),
    backgroundColor: "#ffffff",
    used_at: new Date(),
    tag: ["new account"],
  },
  {
    title: "Save 20 THB",
    description: "minimium 500 THB",
    image:
      "https://static.vecteezy.com/system/resources/previews/008/854/705/original/3d-coin-for-finance-or-business-illustration-png.png",
    expire_at: getDatePlusTenDays(),
    used_at: new Date(),
  },
  {
    title: "Free Shipping",
    description: "minimium 1200 THB",
    image:
      "https://cdn3d.iconscout.com/3d/premium/thumb/truck-6847901-5606997.png",
    expire_at: getDatePlusTenDays(),
    used_at: "",
  },
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 8,
          width: "400px",
        }}
      >
        {coupons.map((coupon, index) => (
          <div
            style={{
              marginBottom: 12,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Coupon key={index} {...coupon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
