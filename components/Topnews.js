const Topnews = ({ articles }) => {
    console.log(articles);
    return (
        <div>
            Halo
            {/* {articles.map((article, index) => (
                <div key={index}>
                    <h1>{article.title}</h1>
                </div>
            ))} */}
        </div>
    );
}

export default Topnews;

export const getServerSideProps = async () => {
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${process.env.API_KEY}`
    )
    const apiJson = await apiResponse.json()
    const { articles } = apiJson

    return {
        props: {
            articles,
        }
    }
}
