"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { verifyCaptcha } from "@/api/actions/verifyCaptcha";

const SITE_KEY = process.env.RECAPTCHA_SITE_KEY
  ? process.env.RECAPTCHA_SITE_KEY
  : "";

const CaptchaModule = () => {
  const reCaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    console.log(verifyCaptcha(token));
  }
  return (
    <>
      <ReCAPTCHA
        sitekey={"6LfOa64oAAAAAMJdvElOaDsH5jgkG79tQ-aRpaT3"}
        ref={reCaptchaRef}
        onChange={handleCaptchaSubmission}
      />
    </>
  );
};
export default CaptchaModule;
