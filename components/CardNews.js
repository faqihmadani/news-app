import moment from 'moment';

const CardNews = ({ article }) => {
    let time = moment(article.publishedAt).startOf('hour').fromNow();

    return (
        <div className="flex flex-col md:flex-row border-b border-gray-300 pt-10 pb-16">
            <img className="w-[400px] max-h-[300px]" src={article.urlToImage} alt={article.title} />
            <div className="flex flex-col mt-5 md:ml-5 md:mt-0">
                <h1 className="font-semibold text-xl">{article.title}</h1>
                <p className="mt-3">{article.description}</p>
                <div className='pr-5 mt-3'>
                    <p className='font-light text-gray-600 inline-block'>{time} by </p>
                    <p className='inline-block ml-1 text-blue-600'> {article.author}</p>
                </div>
                <div className='flex justify-between items-start mt-3'>
                    <a href={article.url} target="_blank" className='whitespace-nowrap bg-blue-200 px-2 py-1 rounded mt-5 hover:shadow-md transition-shadow duration-150'>Read More</a>
                </div>
            </div>
        </div>
    );
}

export default CardNews;