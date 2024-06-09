import blueLayout from "../assets/signIn-blue.png";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import light from "../assets/chandelier.png";
import { FcGoogle } from "react-icons/fc";
import { auth, googleAuthProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);

      const token = await result.user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center h-screen">
      <div className="sm:w-[50%] w-full flex justify-center items-center p-4">
        <div className="w-full max-w-lg">
          <div className="absolute top-14 mt-9">
            <img src={logo} alt="logo" className="w-10" />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1 className="text-4xl font-semibold">LOGIN</h1>
            <p className="text-xl text-gray-600 text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend
              feugiat vitae faucibus nibh dolor dui.
            </p>
            <button
              onClick={handleSignInWithGoogle}
              className="bg-blue-500 flex gap-2 cursor-pointer items-center p-1 sm:w-[350px] w-full mt-2"
            >
              <div className="bg-white p-2 rounded-md">
                <FcGoogle className="text-4xl text-white" />
              </div>
              <p className="text-white text-center sm:text-2xl text-lg px-5">
                Sign in using Google
              </p>
            </button>
          </div>
        </div>
      </div>
      <div
        className="sm:w-[50%] w-full h-full bg-cover bg-center bg-no-repeat flex justify-center relative"
        style={{ backgroundImage: `url(${blueLayout})` }}
      >
        <div className="absolute top-2 left-0 right-0 flex justify-center items-end pb-16">
          <img src={light} alt="light" className="w-1/7" />
        </div>
        <div className="absolute top-1/3 transform-translate-y-1/3 left-1/3 transform-translate-x-1/3">
          <img src={user} alt="user" className="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
