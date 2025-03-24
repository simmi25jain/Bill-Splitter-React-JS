import React, { use, useEffect, useState } from 'react';
import './Bill.css';

function Bill() {
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [billSplit, setBillSplit] = useState("");
  const [perPersonAmount, setPerPersonAmount] = useState(0)
  const [totalTipBalance, setTotalTipBalance] = useState(0)

  useEffect(() => {
    setCustomTip(tip);
  }, [tip])
  useEffect(() => {
    if (billSplit > 0) {
      setPerPersonAmount((Number(total) + Number(tip)) / Number(billSplit)); //billSplit,total,tip m se koi bhi variable change ho raha h toh setPerPersonAmount function call hoga hamesha
    } else {
      setPerPersonAmount(0);
    }
  }, [billSplit, total, tip]);

  function handleSetTip(e) {
    const text = e.target.innerText;
    setTip(text.slice(0, text.length - 1));
  }
  function handlePrint(e) {
    const calculatedTip = (total * customTip) / 100;
    setTotalTipBalance(calculatedTip);
    // setTipAmount(Number(total));
    // setPerPersonAmount((Number(total) + tip) / billSplit);
  }

  function resetBtn(e) {
    setCustomTip("");
    setTotal(0);
    setBillSplit("");
    setPerPersonAmount(0);
    setTotalTipBalance(0);
  }

  return (
    <div>
      <h1>Bill Splitter</h1>
      <main>
        <div className="bill-input">
          <p className="p1">Bill</p>
          <div className="input-container">
            <span>₹</span>
            <input id="bill-amount" type="number" value={total} onChange={(e) => setTotal(e.target.value)} />
          </div>

          <p className="select-tip">Select Tip</p>
          <div className="tip-container">
            <div className="tip" onClick={handleSetTip} >5%</div>
            <div className="tip" onClick={handleSetTip} >10%</div>
            <div className="tip" onClick={handleSetTip} >15%</div>
            <div className="tip" onClick={handleSetTip} >25%</div>
            <div className="tip" onClick={handleSetTip} >50%</div>
            <div className="tip" onClick={handleSetTip} >75%</div>
          </div>

          <input
            className="custom-tip white-input"
            type="number"
            placeholder="Custom Tip in Percent"
            disabled={tip > 0 ? true : false}
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
          />

          <p className="numberofpeople">Number of People</p>
          <input
            className="number-of-people white-input"
            type="number"
            placeholder="Number of people"
            value={billSplit} onChange={(e) => setBillSplit(e.target.value)}
          />

          <button className="generate-btn" onClick={handlePrint}>Generate Bill</button>
        </div>

        <div className="bill-output">
          <p className="tip-amount">Tip Amount<span>{totalTipBalance}</span></p>
          <p className="total-amount">Total<span>{total}</span></p>
          <p className="each-person-bill">Each Person Bill<span>{perPersonAmount}</span></p>

          {/* <button className="reset-btn" disabled>Reset</button> */}
          <button className="reset-btn" onClick={resetBtn}>Reset</button>
        </div>
      </main>
    </div>
  );
}

export default Bill;

