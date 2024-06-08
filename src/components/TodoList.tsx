import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiMore2Fill } from "react-icons/ri";
import { FaCheck, FaStar } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

interface TodoItem {
  title: string;
  description: string;
  status?: string;
}

type dataProps = {
  data: TodoItem[];
  setData: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

const TodoList= ({ data, setData }: dataProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [filterOption, setFilterOption] = useState<string>("all");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMoreClick = (index: number) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };

  const handleStatusChange = (index: number, status: string) => {
    const updatedData = [...data];
    updatedData[index].status = status;
    setData(updatedData);
    setSelectedItemIndex(null);
  };

  const filteredData = data.filter((item) => {
    if (filterOption === "all") {
      return true;
    } else {
      return item.status === filterOption;
    }
  }).filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl p-6 mt-8 mx-auto sm:absolute sm:top-9 static sm:ml-10 ml-0">
      <h1 className="sm:text-3xl text-2xl font-semibold sm:mb-10 mb-4">Todo List</h1>
      <div className="flex justify-between items-center sm:mb-[7rem] mb-4">
        <div className="flex items-center border border-gray-300 rounded-md p-1 px-3 sm:w-1/3 w-full">
          <input
            type="text"
            className="p-1 w-full rounded-md outline-none text-black"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoSearchOutline className="text-gray-800 text-xl" />
        </div>
        <select
          className="p-2 border border-gray-300 rounded-md outline-none ml-4 sm:w-1/5 w-full"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="all">Filtered By</option>
          <option value="completed">Completed</option>
          <option value="favourite">Favorite</option>
          <option value="deleted">Deleted</option>
        </select>
      </div>
      <div className="flex flex-col mt-4 p-2">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-between items-center mt-4 p-3 border-b-2 border-slate-200 w-full"
            >
              <div>
                <h1 className="text-base font-semibold">{item.title}</h1>
                <p className="text-gray-800 text-base">{item.description}</p>
              </div>
              <div className="flex items-center">
                {item.status === "completed" && (
                  <FaCheck className="text-green-600 mr-2" />
                )}
                {item.status === "favourite" && (
                  <FaStar className="text-yellow-500 mr-2" />
                )}
                {item.status === "deleted" && (
                  <TiDeleteOutline className="text-red-600 mr-2 text-2xl" />
                )}
                <RiMore2Fill
                  className="text-xl text-gray-800 cursor-pointer"
                  onClick={() => handleMoreClick(index)}
                />
                {selectedItemIndex === index && (
                  <div className="absolute top-10 right-0 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <ul className="flex flex-col p-2">
                      <li
                        className="text-start cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => handleStatusChange(index, "completed")}
                      >
                        Completed
                      </li>
                      <li
                        className="text-start cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => handleStatusChange(index, "favourite")}
                      >
                        Favourite
                      </li>
                      <li
                        className="text-start cursor-pointer p-2 hover:bg-gray-100"
                        onClick={() => handleStatusChange(index, "deleted")}
                      >
                        Deleted
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No todo items found.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
