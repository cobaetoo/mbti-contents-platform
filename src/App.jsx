import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import { useEffect } from "react";
import ReactGA4 from "react-ga4";
import Privacy from "./page/Privacy";
import Blog from "./page/Blog";
import SignUp from "./page/SignUp";
import AuthCallback from "./page/AuthCallback";
import MyPage from "./page/MyPage";

export const base_url = "https://mbti-platform.shop";

function App() {
  useEffect(() => {
    ReactGA4.initialize([
      {
        trackingId: "G-S0V61S368S",
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Thumbnail List Page */}
        <Route path="/" element={<Main />} />
        {/* Test Intro-Quiz-Loading Page */}
        <Route path="/:testParam" element={<Test />} />
        {/* Test Result Page */}
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
        {/* Blog Page */}
        <Route path="/blog/:testParam" element={<Blog />} />
        {/* mbti.com/blog/personalColor */}
        {/* mbti.com/blog */}
        {/* Privacy Page */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/authCallback" element={<AuthCallback />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/:testName
// 3. 결과 페이지 : root/:testName/result/:resultName

// Test Start Button(Intro)
// Copy Test Link Button(Intro, Result)
// Go-to-another Test Button(Result)
// Go-to-Other Tests Button(Intro, Result)

// SPA(Single Page Application ) & CSR(Client Side-Rendering)
// html + Javascript -> (Page 1 -> Metatag 1)
// =>
// page 마다 -> A.html / B.html / C.html, ...
