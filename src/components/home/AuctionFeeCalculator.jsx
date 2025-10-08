import React, { useState, useEffect } from "react";

const COPART_TIERS = [
  { min: 0, max: 49.99, fee: 1 },
  { min: 50, max: 99.99, fee: 25 },
  { min: 100, max: 199.99, fee: 50 },
  { min: 200, max: 299.99, fee: 75 },
  { min: 300, max: 349.99, fee: 110 },
  { min: 350, max: 399.99, fee: 125 },
  { min: 400, max: 499.99, fee: 135 },
  { min: 500, max: 599.99, fee: 150 },
  { min: 600, max: 699.99, fee: 160 },
  { min: 700, max: 799.99, fee: 170 },
  { min: 800, max: 899.99, fee: 185 },
  { min: 900, max: 999.99, fee: 200 },
  { min: 1000, max: 1199.99, fee: 225 },
  { min: 1200, max: 1299.99, fee: 240 },
  { min: 1300, max: 1399.99, fee: 250 },
  { min: 1400, max: 1499.99, fee: 260 },
  { min: 1500, max: 1599.99, fee: 275 },
  { min: 1600, max: 1699.99, fee: 285 },
  { min: 1700, max: 1799.99, fee: 295 },
  { min: 1800, max: 1999.99, fee: 305 },
  { min: 2000, max: 2399.99, fee: 325 },
  { min: 2400, max: 2999.99, fee: 350 },
  { min: 3000, max: 3499.99, fee: 400 },
  { min: 3500, max: 3999.99, fee: 425 },
  { min: 4000, max: 4999.99, fee: 450 },
  { min: 5000, max: 5999.99, fee: 475 },
  { min: 6000, max: 7999.99, fee: 500 },
  { min: 8000, max: 9999.99, fee: 525 },
  { min: 10000, max: 14999.99, fee: 550 },
  { min: 15000, max: 19999.99, fee: 575 },
  { min: 20000, max: Infinity, fee: 600 },
];

const IAAI_TIERS = [
  { min: 0, max: 99.99, fee: 25 },
  { min: 100, max: 199.99, fee: 50 },
  { min: 200, max: 299.99, fee: 75 },
  { min: 300, max: 349.99, fee: 110 },
  { min: 350, max: 399.99, fee: 130 },
  { min: 400, max: 499.99, fee: 140 },
  { min: 500, max: 599.99, fee: 150 },
  { min: 600, max: 699.99, fee: 160 },
  { min: 700, max: 799.99, fee: 170 },
  { min: 800, max: 899.99, fee: 180 },
  { min: 900, max: 999.99, fee: 190 },
  { min: 1000, max: 1199.99, fee: 210 },
  { min: 1200, max: 1299.99, fee: 225 },
  { min: 1300, max: 1399.99, fee: 240 },
  { min: 1400, max: 1499.99, fee: 250 },
  { min: 1500, max: 1599.99, fee: 265 },
  { min: 1600, max: 1699.99, fee: 280 },
  { min: 1700, max: 1799.99, fee: 295 },
  { min: 1800, max: 1999.99, fee: 305 },
  { min: 2000, max: 2399.99, fee: 330 },
  { min: 2400, max: 2999.99, fee: 355 },
  { min: 3000, max: 3499.99, fee: 385 },
  { min: 3500, max: 3999.99, fee: 410 },
  { min: 4000, max: 4999.99, fee: 440 },
  { min: 5000, max: 5999.99, fee: 475 },
  { min: 6000, max: 7999.99, fee: 500 },
  { min: 8000, max: 9999.99, fee: 525 },
  { min: 10000, max: 14999.99, fee: 550 },
  { min: 15000, max: Infinity, fee: 575 },
];

const AuctionFeeCalculator = () => {
  const [auctionType, setAuctionType] = useState("Copart");
  const [lotPrice, setLotPrice] = useState(0);
  const [fees, setFees] = useState({
    internetBid: 0,
    feeA: 0,
    broker: 0,
    gate: 95,
    environmental: 15,
    report: 15,
    titlePickup: 20,
  });

  function computeFeeA(price, auction) {
    const tiers = auction === "Copart" ? COPART_TIERS : IAAI_TIERS;
    const tier = tiers.find((t) => price >= t.min && price <= t.max);
    return tier ? tier.fee : 0;
  }

  function computeInternetFee(price) {
    if (price < 100) return 0;
    else if (price < 500) return 39;
    else if (price < 1000) return 49;
    else if (price < 1500) return 59;
    else if (price < 2000) return 69;
    else if (price < 4000) return 79;
    else return 89;
  }

  useEffect(() => {
    const feeA = computeFeeA(lotPrice, auctionType);
    const internetBid = computeInternetFee(lotPrice);
    const broker = auctionType === "IAAI" ? 35 : 0;

    setFees((prev) => ({
      ...prev,
      feeA,
      internetBid,
      broker,
    }));
  }, [lotPrice, auctionType]);

  function calculateTotal() {
    const feeSum = Object.values(fees).reduce((sum, f) => sum + f, 0);
    return { auctionFee: feeSum, totalPrice: parseFloat(lotPrice) + feeSum };
  }

  const { auctionFee, totalPrice } = calculateTotal();

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Auction Fee Calculator</h2>

      <div>
        <label>
          Auction Type:
          <select
            value={auctionType}
            onChange={(e) => setAuctionType(e.target.value)}
          >
            <option value="Copart">Copart</option>
            <option value="IAAI">IAAI</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Lot Price ($):
          <input
            type="number"
            value={lotPrice}
            onChange={(e) => setLotPrice(parseFloat(e.target.value) || 0)}
          />
        </label>
      </div>

      <h4>Fees Breakdown</h4>
      <ul>
        <li>Buyer Fee A: ${fees.feeA}</li>
        <li>Internet Bid Fee: ${fees.internetBid}</li>
        {auctionType === "IAAI" && <li>Broker Fee: ${fees.broker}</li>}
        <li>Gate Fee: ${fees.gate}</li>
        <li>Environmental Fee: ${fees.environmental}</li>
        <li>Report Fee: ${fees.report}</li>
        <li>Title Pickup Fee: ${fees.titlePickup}</li>
      </ul>

      <h4>Total Auction Fee: ${auctionFee}</h4>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default AuctionFeeCalculator;
