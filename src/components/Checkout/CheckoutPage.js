"use client";

import { useMemo, useState } from "react";
import styles from "./CheckoutPage.module.css";
import ArrivalsSection from "@/components/ArrivalsSection/ArrivalsSection";

function money(n) {
  return `$${Number(n || 0).toFixed(2)}`;
}

const summaryItemsDemo = [
  {
    id: "s1",
    title: "Baby toy teddy bear",
    priceOld: 95,
    price: 79,
    image: "/assets/img/products/p1.jpg",
    rating: 4,
    colors: ["#6b5b4d", "#f7c1de", "#78d1ff", "#7fe1d6"],
    sizes: ["S", "M", "X", "XL"],
  },
  {
    id: "s2",
    title: "Smart I watch 2GB",
    priceOld: 58,
    price: 45,
    image: "/assets/img/products/p2.jpg",
    rating: 4,
    colors: ["#eaeaea", "#f7c1de", "#78d1ff"],
    sizes: ["S", "M", "X", "XL"],
  },
];

const newArrivalsDemo = [
  {
    id: "p1",
    name: "Round Neck T-Shirt",
    img: "/assets/img/products/p1.jpg",
    rating: 4,
    oldPrice: 27,
    price: 22,
    badgeLeft: { text: "20%", color: "pink" },
    colors: ["#cdb7ff", "#aaf5d7"],
    sizes: ["S", "M", "X", "XL"],
  },
  {
    id: "p2",
    name: "Full Sleeve Shirt",
    img: "/assets/img/products/p2.jpg",
    rating: 4,
    oldPrice: 12,
    price: 10,
    badgeRight: { text: "SALE", color: "green" },
    colors: ["#64e5ff", "#93a7ff"],
    sizes: ["S", "M"],
  },
  {
    id: "p3",
    name: "Cute Baby Toy's",
    img: "/assets/img/products/p3.jpg",
    rating: 4,
    oldPrice: 40,
    price: 30,
    colors: ["#a9d9ff", "#ff8aa4", "#ffd36a", "#55ffbf"],
    sizes: ["S", "M"],
  },
  {
    id: "p4",
    name: "Jumbo Carry Bag",
    img: "/assets/img/products/p4.jpg",
    rating: 4,
    price: 40,
    badgeRight: { text: "NEW", color: "blue" },
    colors: ["#f4d06f"],
    sizes: ["S", "M"],
  },
];
function Stars({ value = 0 }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className={styles.stars} aria-label={`Rating ${full} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? styles.starOn : styles.starOff}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function CheckoutPage() {
  const [newCustomerOption, setNewCustomerOption] = useState("register");
  const [billingOption, setBillingOption] = useState("new");

  const [deliveryMethod, setDeliveryMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // ✅ coupon toggle state
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const subTotal = useMemo(() => 80, []);
  const delivery = useMemo(() => 80, []);
  const total = useMemo(() => subTotal + delivery, [subTotal, delivery]);

  function placeOrder(e) {
    e.preventDefault();
    alert("PLACE ORDER (demo)");
  }

  function toggleCoupon() {
    setCouponOpen((v) => !v);
  }

  function applyCoupon() {
    if (!couponCode.trim()) return;
    alert(`Applied coupon: ${couponCode}`);
  }

  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* LEFT */}
            <section className={styles.left}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>New Customer</h3>

                <div className={styles.subTitle}>Checkout Options</div>

                <div className={styles.radioRow}>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="newCustomer"
                      checked={newCustomerOption === "register"}
                      onChange={() => setNewCustomerOption("register")}
                    />
                    <span className={styles.radioLabel}>Register Account</span>
                  </label>

                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="newCustomer"
                      checked={newCustomerOption === "guest"}
                      onChange={() => setNewCustomerOption("guest")}
                    />
                    <span className={styles.radioLabel}>Guest Account</span>
                  </label>
                </div>

                <p className={styles.desc}>
                  By creating an account you will be able to shop faster, be up
                  to date on an order’s status, and keep track of the orders you
                  have previously made.
                </p>

                <button className={styles.primaryBtn} type="button">
                  CONTINUE
                </button>

                <hr className={styles.hr} />

                <h3 className={styles.cardTitle2}>Returning Customer</h3>

                <label className={styles.field}>
                  <div className={styles.label}>Email Address</div>
                  <input
                    className={styles.input}
                    placeholder="Enter your email address"
                  />
                </label>

                <label className={styles.field}>
                  <div className={styles.label}>Password</div>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="Enter your password"
                  />
                </label>

                <div className={styles.loginRow}>
                  <button className={styles.primaryBtnSmall} type="button">
                    LOGIN
                  </button>
                  <button className={styles.linkBtn} type="button">
                    Forgot Password?
                  </button>
                </div>
              </div>

              <form className={styles.card} onSubmit={placeOrder}>
                <h3 className={styles.cardTitle}>Billing Details</h3>

                <div className={styles.subTitle}>Checkout Options</div>
                <div className={styles.radioRow}>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="billing"
                      checked={billingOption === "existing"}
                      onChange={() => setBillingOption("existing")}
                    />
                    <span className={styles.radioLabel}>
                      I want to use an existing address
                    </span>
                  </label>

                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="billing"
                      checked={billingOption === "new"}
                      onChange={() => setBillingOption("new")}
                    />
                    <span className={styles.radioLabel}>
                      I want to use new address
                    </span>
                  </label>
                </div>

                <div className={styles.twoCol}>
                  <label className={styles.field}>
                    <div className={styles.label}>
                      First Name<span className={styles.req}>*</span>
                    </div>
                    <input
                      className={styles.input}
                      placeholder="Enter your first name"
                    />
                  </label>

                  <label className={styles.field}>
                    <div className={styles.label}>
                      Last Name<span className={styles.req}>*</span>
                    </div>
                    <input
                      className={styles.input}
                      placeholder="Enter your last name"
                    />
                  </label>
                </div>

                <label className={styles.fieldFull}>
                  <div className={styles.label}>Address</div>
                  <input
                    className={styles.input}
                    placeholder="Address Line 1"
                  />
                </label>

                <div className={styles.twoCol}>
                  <label className={styles.field}>
                    <div className={styles.label}>
                      City<span className={styles.req}>*</span>
                    </div>
                    <select className={styles.select} defaultValue="">
                      <option value="" disabled>
                        City
                      </option>
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Ha Noi</option>
                    </select>
                  </label>

                  <label className={styles.field}>
                    <div className={styles.label}>Post Code</div>
                    <input className={styles.input} placeholder="Post Code" />
                  </label>
                </div>

                <div className={styles.twoCol}>
                  <label className={styles.field}>
                    <div className={styles.label}>
                      Country<span className={styles.req}>*</span>
                    </div>
                    <select className={styles.select} defaultValue="">
                      <option value="" disabled>
                        Country
                      </option>
                      <option>United States</option>
                      <option>Vietnam</option>
                      <option>Japan</option>
                    </select>
                  </label>

                  <label className={styles.field}>
                    <div className={styles.label}>Region State</div>
                    <select className={styles.select} defaultValue="">
                      <option value="" disabled>
                        Region/State
                      </option>
                      <option>California</option>
                      <option>Texas</option>
                      <option>Ha Noi</option>
                    </select>
                  </label>
                </div>

                <div className={styles.placeRow}>
                  <button className={styles.placeBtn} type="submit">
                    PLACE ORDER
                  </button>
                </div>
              </form>
            </section>

            {/* RIGHT */}
            <aside className={styles.right}>
              {/* Summary */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Summary</h3>

                <div className={styles.sideLine}>
                  <span className={styles.sideLabel}>Sub-Total</span>
                  <span className={styles.sideValue}>{money(subTotal)}</span>
                </div>

                <div className={styles.sideLine}>
                  <span className={styles.sideLabel}>Delivery Charges</span>
                  <span className={styles.sideValue}>{money(delivery)}</span>
                </div>

                {/* ✅ Apply coupon toggle + animated panel */}
                <div className={styles.sideLine}>
                  <span className={styles.sideLabel}>Coupon Discount</span>
                  <button
                    className={styles.couponLink}
                    type="button"
                    onClick={toggleCoupon}
                    aria-expanded={couponOpen}
                    aria-controls="coupon-panel"
                  >
                    Apply Coupon
                  </button>
                </div>

                <div
                  id="coupon-panel"
                  className={`${styles.couponPanel} ${
                    couponOpen ? styles.couponPanelOpen : ""
                  }`}
                >
                  <div className={styles.couponInner}>
                    <input
                      className={styles.couponInput}
                      placeholder="Enter Your Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      className={styles.couponBtn}
                      type="button"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className={styles.sideTotal}>
                  <span className={styles.sideTotalLabel}>Total Amount</span>
                  <span className={styles.sideTotalValue}>{money(total)}</span>
                </div>

                <div className={styles.miniList}>
                  {summaryItemsDemo.map((p) => (
                    <div key={p.id} className={styles.miniItem}>
                      <div className={styles.miniThumb}>
                        <img src={p.image} alt={p.title} />
                      </div>

                      <div className={styles.miniInfo}>
                        <div className={styles.miniTitle}>{p.title}</div>
                        <Stars value={p.rating} />

                        <div className={styles.miniPriceRow}>
                          <span className={styles.miniOld}>
                            {money(p.priceOld)}
                          </span>
                          <span className={styles.miniNew}>
                            {money(p.price)}
                          </span>
                        </div>

                        <div className={styles.swatches}>
                          {p.colors.map((c, idx) => (
                            <span
                              key={idx}
                              className={styles.swatch}
                              style={{ background: c }}
                            />
                          ))}
                        </div>

                        <div className={styles.sizes}>
                          {p.sizes.map((s) => (
                            <span key={s} className={styles.sizeTag}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery method */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>DELIVERY METHOD</h3>
                <p className={styles.sideDesc}>
                  Please select the preferred shipping method to use on this
                  order.
                </p>

                <div className={styles.deliveryGrid}>
                  <label className={styles.deliveryOption}>
                    <div className={styles.deliveryHead}>Free Shipping</div>
                    <div className={styles.deliveryRow}>
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryMethod === "free"}
                        onChange={() => setDeliveryMethod("free")}
                      />
                      <span className={styles.deliveryText}>Rate - $0.00</span>
                    </div>
                  </label>

                  <label className={styles.deliveryOption}>
                    <div className={styles.deliveryHead}>Flat Rate</div>
                    <div className={styles.deliveryRow}>
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryMethod === "flat"}
                        onChange={() => setDeliveryMethod("flat")}
                      />
                      <span className={styles.deliveryText}>Rate - $5.00</span>
                    </div>
                  </label>
                </div>

                <div className={styles.sideSubHead}>
                  Add Comments About Your Order
                </div>
                <textarea className={styles.textarea} placeholder="Comments" />
              </div>

              {/* Payment method */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>PAYMENT METHOD</h3>
                <p className={styles.sideDesc}>
                  Please select the preferred payment method to use on this
                  order.
                </p>

                <label className={styles.payRadio}>
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span>Cash On Delivery</span>
                </label>

                <div className={styles.sideSubHead}>
                  Add Comments About Your Order
                </div>
                <textarea className={styles.textarea} placeholder="Comments" />

                <label className={styles.terms}>
                  <input type="checkbox" />
                  <span>
                    I have read and agree to the <b>Terms &amp; Conditions</b>
                  </span>
                </label>
              </div>

              {/* Payment logos */}
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>PAYMENT METHOD</h3>

                <div className={styles.payLogos}>
                  <img src="/assets/img/pay/visa.png" alt="Visa" />
                  <img src="/assets/img/pay/paypal.png" alt="PayPal" />
                  <img src="/assets/img/pay/maestro.png" alt="Maestro" />
                  <img src="/assets/img/pay/mastercard.png" alt="MasterCard" />
                  <img src="/assets/img/pay/visa2.png" alt="Visa" />
                  <img src="/assets/img/pay/amex.png" alt="American Express" />
                </div>

                <div className={styles.payDivider} />

                <div className={styles.secure}>
                  <img
                    src="/assets/img/pay/secure.png"
                    alt="Secure safe shopping"
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ArrivalsSection
        title="New Arrivals"
        subtitle="Browse The Collection of Top Products"
        products={newArrivalsDemo}
        footer={{ label: "Shop All Collection", href: "/shop" }}
        paddingTop={40}
        paddingBottom={60}
        gap={30}
      />
    </>
  );
}
