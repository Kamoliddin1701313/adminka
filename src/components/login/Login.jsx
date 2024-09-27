import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [phone, setPhone] = useState();
  const [parol, setParol] = useState();
  const navigate = useNavigate();

  const registration = (event) => {
    event.preventDefault();
    console.log(phone, parol);

    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        phone_number: phone,
        password: parol,
      }),
    })
      .then((response) => response.json())
      .then((element) => {
        if (element?.success === true) {
          localStorage.setItem(
            "token",
            element?.data?.tokens?.accessToken?.token
          );
          toast.success(element?.message);
          navigate("/dashboard");
        } else {
          toast.error(element.message);
        }
      });
  };

  useEffect(() => {
    // registration();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto h-screen flex items-center justify-center">
      <form className="w-3/5 mx-auto bg-gray-200 h-[60vh] rounded-[30px] flex gap-3 flex-col items-center justify-center">
        <h1 className="text-[36px] text-green-600 font-semibold">Login in</h1>
        <input
          onChange={(e) => setPhone(e.target.value)}
          className="w-3/4 py-3 rounded-[12px] px-5 border-[1px] border-green-600 outline-none"
          type="text"
          required
          placeholder="Phone-number"
        />
        <input
          onChange={(e) => setParol(e.target.value)}
          className="w-3/4 py-3 rounded-[12px] px-5 border-[1px] border-green-600 outline-none"
          type="text"
          required
          placeholder="Parol"
        />
        <button
          type="submit"
          onClick={registration}
          className="mx-auto py-3 px-5 bg-green-600 rounded-[12px] text-white font-semibold"
        >
          Login qilish
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
