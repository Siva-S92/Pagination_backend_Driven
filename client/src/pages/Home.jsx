import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { message } from "antd";
import CardItem from "../component/Card";
import Pagination from "@mui/material/Pagination";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalpage, setTotalPages] = useState(1)
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetchApi();
  },[page, search]);

  const fetchApi = async () => {
    const formData = {
      page,
      search,
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/get-contents`,
        formData
      );
      if (res.data.success) {
        setTotalPages(res.data.totalPages);
        setApiData(res.data.data);
      }
    } catch (error) {
      console.log(error.message);
      message.error(error);
    }
  };
  return (
    <>
      <Header />
      <section>
        <div className="w-[75%] mx-auto flex justify-between items-center py-4 px-2">
          <h1 className="text-center font-semibold">Contents...</h1>
          <div className="flex justify-between items-center border-2 rounded w-[200px] h-[35px] hover:border-red-500">
            <input
              className="pl-1 w-[80%] h-full outline-none"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="border rounded-r bg-red-500 w-[20%] h-full content-center text-center cursor-pointer">
              <SearchIcon />
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center">
          {apiData &&
            apiData.map((element, index) => (
              <div key={index}>
                <CardItem element={element} />
              </div>
            ))}
        </div>
      </section>

      <div className="flex justify-center">
        <Pagination
          count={totalpage}
          color="secondary"
          showFirstButton={true}
          showLastButton={true}
          onChange={(_, page) => {
            console.log(page);
            if (page !== null) {
              setPage(page);
            }
          }}
        />
      </div>
    </>
  );
}

export default Home;
