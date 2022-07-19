// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head'
import Image from 'next/image'
import Slider from "react-slick";


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
        <Slider {...settings}>
          {articles.map((article, index) => {
            if (index <= 5) {
              return (
                <div key={index}>
                  <div className="flex justify-center items-center">
                    <div className="md:w-[800px] md:h-[400px] ">
                      <img className="object-cover object-center" src={article.urlToImage} alt={article.title} />
                    </div>
                  </div>
                  <div className="md:h-[150px] pt-5 sm:pt-10 flex justify-center items-center">
                    <h1 className="md:w-[600px] text-center text-lg md:text-xl font-semibold">{article.title}</h1>
                  </div>
                </div>
              )
            }
          })}
        </Slider>
        <div className="mt-10">
          {articles.map((article, index) => {
            if (index > 5) {
              return (
                <div key={index}>
                  <h1>{article.title}</h1>
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

