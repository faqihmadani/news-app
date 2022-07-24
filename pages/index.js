// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head'
import Image from 'next/image'
import Slider from "react-slick";
import CardNews from "../components/CardNews";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Home({ articles }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)


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
    <div>
      <Head>
        <title>today news | Home</title>
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <div className='w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto '>
        <h1 className="text-3xl font-bold mb-5 md:pt-28 pt-32 ">🔥 Trending News</h1>
        <div className="w-10/12 md:w-auto mx-auto">
          <Slider {...settings}>
            {articles.map((article, index) => {
              if (index <= 5) {
                return (
                  <div key={index}>
                    <div className="flex max-h-[500px] overflow-y-clip justify-center items-center relative bg-black rounded-lg">
                      <img className="object-cover h-[300px] lg:h-[500px] rounded-lg" src={article.urlToImage} alt={article.title} />
                      <div className="flex flex-row justify-center items-end absolute bottom-0 w-full ">
                        <a href={article.url} rel="noreferrer" target="_blank" className="hover:underline w-full text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium sm:font-semibold bg-gradient-to-t from-black to-transparen text-white pb-5 px-5 xl:px-[250px] rounded-lg shadow-md">{article.title}</a>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </Slider>
        </div>
        <div className="mt-20 flex flex-col space-y-10">
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
        <div className="flex justify-center mt-5">
          <a onClick={() => router.push('/feeds/1')} className="text-xl py-2 px-7 border border-gray-300 hover:bg-gray-300  rounded hover:cursor-pointer">See More</a>
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

