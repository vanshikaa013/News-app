import React, { useContext, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import ThemeContext from "../providers/theme/ThemeContext";
import fetchNews from "../providers/News/NewsAction";
import NewsContext from "../providers/News/NewsContext";
import { toast } from "react-toastify";
import Slider from "../components/Slider";
import Add from "../components/Add";
const Home = () => {
  const { allNews, dispatch } = useContext(NewsContext);
  const { dark } = useContext(ThemeContext);

  const getNews = async (Topic) => {
    const data = await fetchNews(Topic);
    dispatch({
      type: "Get_News",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  if (!allNews || allNews?.length ===0) {
    toast.error("Kindly Search Valid News!!");
    getNews("Indore");
  }


  return (
    <div
      className={dark ? "container-fluid bg-dark dark-mode" : "container-fluid"}
    >
      <marquee className="text-light bg-secondary p-2">
      Indore&nbsp;Girl&nbsp;Missing&nbsp;From&nbsp;NIT&nbsp;Trichy:&nbsp;इंदौर&nbsp;की&nbsp;रहने&nbsp;वाली&nbsp;ओजस्वी&nbsp;गुप्ता&nbsp;एनआईटी&nbsp;त्रिची&nbsp;से&nbsp;लापता&nbsp;है।&nbsp;15&nbsp;दिन&nbsp;से&nbsp;ज्यादा&nbsp;वक्त&nbsp;बीत&nbsp;गए&nbsp;हैं&nbsp;ओजस्वी&nbsp;गुप्ता&nbsp;का&nbsp;कुछ&nbsp;पता&nbsp;नहीं&nbsp;चला&nbsp;है।&nbsp;उसके&nbsp;रूम&nbsp;से&nbsp;एक&nbsp;लेटर&nbsp;मिला&nbsp;है,&nbsp;जिसमें&nbsp;लिखा&nbsp;है&nbsp;कि&nbsp;पुरुषों&nbsp;के&nbsp;दबदबे&nbsp;वाली&nbsp;दुनिया&nbsp;की&nbsp;सच्चाई
      </marquee>

      <h1
        className={
          dark
            ? "text-center text-light bold-text mt-4"
            : " text-center text-dark bold-text mt-3"
        }
        style={{ fontWeight: "700" }}
      >
        Top News
      </h1>

      <Slider/>

      <div id="box" className="row g-3 my-2">
        <div className="col-sm-12 col-md-8">
          {!allNews ? (
            <h1 className="text-center display-4 text-secondary">Loading...</h1>
          ) : (
            allNews?.map((news, index) => <NewsCard   key={index} news={news} />)
          )}
        </div>

        <div className="col-sm-12 col-md-4">
          <WeatherCard />
          <Add/>
        </div>
      </div>
    </div>
  );
};

export default Home;
