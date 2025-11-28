 import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
         const res = await axios.get(`http://localhost:5000/auth/api/verify/${token}`);

         localStorage.setItem("token", res.data.token);

         navigate("/menu2"); // auto-redirect

      } catch (err) {
        alert(" Invalid or expired verification link.");
        navigate("/login");
      }
    };
    verify();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Verifying your email...</p>
    </div>
  );
}