import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../SingleContent/SingleContent";
import "./Trending.css";
import CustomPagination from "../../shareFIle/Pagination/CustomPagination.js";

const Trending = () => {
  const [content, setContent] = useState([]);
 const [page, setPage] = useState(1);

  //------ for fecth trending api

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
     console.log(data);
    //  content.log(data.results.page)
    setContent(data.results);
  };

  

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);


  return (
    <div>
      <span className="pageTitle">Today Trending</span>
      <div className="trending">
        {content && content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage}  />
    </div>
  );
};

export default Trending;
