import React, { useEffect, useState } from "react";
import AffiliateButton from "./AffiliateButton";
import styles from "./affiliateButton.module.css";
import Cookies from "js-cookie";

const TestResultRenderer = ({ renderResultInfo }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [affiliateCookie, setAffiliateCookie] = useState(
    Cookies.get("affiliate") // true or undefined
  );
  const [affiliateButtonOpened, setAffiliateButtonOpened] = useState(
    isOpened && affiliateCookie
  );

  useEffect(() => {
    setAffiliateButtonOpened(isOpened || affiliateCookie);
  }, [isOpened, affiliateCookie]);

  useEffect(() => {
    setAffiliateCookie(Cookies.get("affiliate"));
  }, []);

  return (
    <div>
      <h3>결과는...</h3>
      <div
        className={styles.resultImageDiv}
        style={{ height: affiliateButtonOpened ? "100%" : "15rem" }}
      >
        <img
          style={{ width: "100%" }}
          src={renderResultInfo?.img_src}
          alt={renderResultInfo?.type}
        />
      </div>
      {/* Button Open Condition */}
      {!affiliateButtonOpened && <AffiliateButton setIsOpened={setIsOpened} />}
    </div>
  );
};

export default TestResultRenderer;

// https://link.coupang.com/a/cakuHS
