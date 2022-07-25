import Head from "next/head";
import { useRouter } from "next/router";
import CardNews from "../../components/CardNews";


const Search = ({ articles, keyword }) => {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>today news | Search</title>
                <link rel="shortcut icon" href="favicon.png" />
            </Head>
            <div className='w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto '>
                <div className="md:pt-28 pt-32 mb-10">
                    <a onClick={() => router.push('/')} className={`text-center flex items-center hover:underline  hover:cursor-pointer transition-all duration-100 ease-in-out`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                        Back To Home
                    </a>
                </div>
                <h1 className="text-3xl font-bold ">🔍 Search for &quot;{keyword.replaceAll('+', ' ')}&quot;</h1>
                {articles.length != 0 ?
                    articles.map((article, index) => {
                        return (
                            <div key={index}>
                                <CardNews article={article} />
                            </div>
                        )
                    }) :
                    <div>
                        <h1 className="text-xl font-medium text-center md:pt-28 pt-32">&quot;{keyword.replaceAll('+', ' ')}&quot; not found</h1>
                    </div>}
            </div>
        </div>
    );
}

export const getServerSideProps = async (pageContext) => {
    const keyword = pageContext.query.slug

    if (!keyword) {
        return {
            props: {
                articles: [],
                keyword: ''
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${process.env.API_KEY}`
    )
    const apiJson = await apiResponse.json()
    const { articles } = apiJson

    return {
        props: {
            articles,
            keyword,
        }
    }
}
export default Search;