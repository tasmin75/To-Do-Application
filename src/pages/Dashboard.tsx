import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  type TodoItem = {
    title: string;
    description: string;
  };

  const [data, setData] = useState<TodoItem[]>([]);

  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  if (!user) {
    console.error("User data not found in localStorage.");
    navigate("/signin");
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchData = () => {
    const storedData = JSON.parse(localStorage.getItem("data") || "[]");
    setData(storedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputData);

    const inputValues = JSON.parse(localStorage.getItem("data") || "[]");

    const data = {
      title: inputData.title,
      description: inputData.description,
    };
    inputValues.push(data);

    localStorage.setItem("data", JSON.stringify(inputValues));
    setInputData({
      title: "",
      description: "",
    });
    fetchData();
  };

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center h-screen">
      <div className="sm:w-[50%] w-full flex justify-center items-center p-4">
        <div className="w-full max-w-lg">
          <div className="absolute top-14 mt-3">
            <img src={logo} alt="logo" className="w-6 sm:w-10" />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center mt-16">
            <h1 className="sm:text-4xl text-2xl font-semibold">TODO</h1>
            <p className="sm:text-xl text-base text-gray-600 text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend
              feugiat vitae faucibus nibh dolor dui.
            </p>

            <form
              onSubmit={handleSubmitData}
              className="flex flex-col gap-6 w-2/3 items-center"
            >
              <div className="w-full flex gap-2">
                <input
                  value={inputData.title}
                  required
                  name="title"
                  onChange={handleOnChangeInput}
                  type="text"
                  placeholder="Title"
                  className="p-2 py-3 w-full border border-gray-300 rounded-md outline-none"
                />
              </div>
              <div className="w-full flex gap-2">
                <input
                  value={inputData.description}
                  required
                  name="description"
                  onChange={handleOnChangeInput}
                  type="text"
                  placeholder="Description"
                  className="p-2 py-3 w-full border border-gray-300 rounded-md outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 sm:text-xl text-lg sm:w-[300px] text-white p-2 w-full mt-2"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-1 h-[90vh] sm:block hidden"></div>
      <div className="sm:w-[50%] w-full">
        <button
          onClick={handleLogOut}
          className="absolute top-9 right-9 bg-red-800 text-white border-2 p-1.5 font-semibold cursor-pointer"
        >
          Logout
        </button>
        <TodoList data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Dashboard;
