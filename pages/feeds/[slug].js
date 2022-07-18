const Feeds = (articles, pageNumber) => {
    //console.log(articles, pageNumber);
    return (
        <div>
            <h1>slug</h1>
        </div>
    );
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.slug

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.API_KEY}`
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