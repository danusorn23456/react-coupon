import React, { CSSProperties, HTMLAttributes } from "react";
import "./index.css";

export interface CouponProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  backgroundColor?: string;
  fontColor?: string;
  image?: string;
  expire_at?: Date;
  used_at?: Date | "";
  usedLabel?: (date: Date) => any;
  expireLabel?: (days: number) => any;
  tag?: string[];
}

function Coupon({
  title,
  description,
  backgroundColor = "#FFFFFF",
  fontColor = "#393939",
  usedLabel = (date: Date) => `used by ${date.toDateString()}`,
  expireLabel = (days: number) =>
    days ? `Valid for ${days} days from now` : `expired`,
  expire_at,
  used_at,
  image,
  tag,
  ...rest
}: CouponProps) {
  function getRemainingDays(couponExpirationDate?: Date) {
    if (!couponExpirationDate) {
      return 0;
    }

    var currentDate = new Date(); // Get the current date

    // Convert the coupon expiration date string to a Date object
    var expirationDate = new Date(couponExpirationDate);

    // Calculate the time difference in milliseconds between the expiration date and the current date
    var timeDifference = expirationDate.getTime() - currentDate.getTime();

    // Convert the time difference to days
    var remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return +remainingDays as number;
  }

  const remaining = getRemainingDays(expire_at);

  return (
    <div
      {...rest}
      className="r-coupon"
      style={
        { "--r-coupon-background-color": backgroundColor } as CSSProperties
      }
    >
      <div className="r-coupon-media">
        <img className="r-coupon-image" src={image} alt={`coupon-${title}`} />
      </div>
      <div className="r-coupon-dashed"></div>
      <div className="r-coupon-content">
        <div className="r-coupon-header" style={{ color: fontColor }}>
          <h3 className="r-coupon-title">{title}</h3>
          <p className="r-coupon-description">{description}</p>
        </div>
        <div className="r-coupon-tags" style={{ color: fontColor }}>
          {tag?.map((tag, index) => (
            <p className="r-coupon-tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <p className="r-coupon-date" style={{ color: fontColor }}>
          {used_at ? usedLabel(used_at) : expireLabel(remaining)}
        </p>
      </div>
    </div>
  );
}

export { Coupon };
