import React from "react";
import styles from "./affiliateButton.module.css";
import Cookies from "js-cookie";

export const cookieTime = (1 / 24) * 2;

const AffiliateButton = ({ setIsOpened }) => {
  const onButtonClick = () => {
    setIsOpened(true);
    Cookies.set("affiliate", true, {
      expires: cookieTime,
      path: "",
      secure: true,
    });
  };

  return (
    <a
      href="https://link.coupang.com/a/cakuHS"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className={styles.coverDiv}>
        <button onClick={onButtonClick} className={styles.coverButton}>
          버튼 누르고 결과 보기
        </button>
      </div>
    </a>
  );
};

export default AffiliateButton;
