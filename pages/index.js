// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head'
import Image from 'next/image'
import Slider from "react-slick";
import CardNews from "../components/CardNews";


export default function Home({ articles }) {

  var settings = {
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="flex-1">
      <Head>
        <title>today news | Home</title>
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <div className='w-9/12 mx-auto '>
        <h1 className="text-xl lg:text-3xl font-bold mb-5">Trending News</h1>
        <Slider {...settings}>
          {articles.map((article, index) => {
            if (index <= 5) {
              return (
                <div key={index}>
                  <div className="flex max-h-[500px] overflow-y-clip justify-center items-center relative bg-black rounded-lg">
                    <img className="object-cover h-[300px] lg:h-[500px] rounded-lg" src={article.urlToImage} alt={article.title} />
                    <div className="flex flex-row justify-center items-end absolute bottom-0 w-full ">
                      <h1 className=" w-full text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium sm:font-semibold bg-gradient-to-t from-black to-transparen text-white pb-5 px-5 xl:px-[250px] rounded-lg shadow-md">{article.title}</h1>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </Slider>
        <div className="mt-24 flex flex-col space-y-10">
          {articles.map((article, index) => {
            if (index > 5) {
              return (
                <div key={index}>
                  <CardNews article={article} />
                </div>
              )
            }
          }
          )}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${process.env.API_KEY}`
  )
  const apiJson = await apiResponse.json()
  const { articles } = apiJson

  return {
    props: {
      articles,
    }
  }
}

