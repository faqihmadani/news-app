import Head from 'next/head'
import { useRouter } from 'next/router';
import CardNews from '../../components/CardNews';
import Paginator from '../../components/Paginator';

const Feeds = ({ articles, pageNumber }) => {
    const handlePrev = (pageNumber, router) => {
        if (pageNumber > 1) {
            router.push(`/feeds/${pageNumber - 1}`)
        }
    }

    return (
        <div>
            <Head>
                <title>today news | Feeds</title>
            </Head>
            <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto '>
                <h1 className="text-3xl font-bold underline">Today Feeds</h1>
                {articles.map((article, index) => {
                    return (
                        <div key={index}>
                            <CardNews article={article} />
                        </div>
                    )
                })}
                <Paginator pageNumber={pageNumber} handlePrev={handlePrev} />
            </div>
        </div>
    );
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.slug

    if (!pageNumber || pageNumber < 1 || pageNumber > 8) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&page=${pageNumber}&apiKey=${process.env.API_KEY}`
    )

    const apiJson = await apiResponse.json()

    const { articles } = apiJson

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}

export default Feeds;