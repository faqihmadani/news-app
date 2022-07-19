import moment from 'moment';

const CardNews = ({ article }) => {
    let time = moment(article.publishedAt).startOf('hour').fromNow();
    // let time = moment()

    return (
        <div className="flex border-b border-gray-300 pt-10 pb-16">
            <img className="w-[400px]" src={article.urlToImage} alt={article.title} />
            <div className="flex flex-col ml-5">
                <h1 className="font-medium text-xl">{article.title}</h1>
                <p className="mt-3">{article.description}</p>
                <div className='flex justify-between items-start mt-3'>
                    <div className='pr-5'>
                        <p className='font-light text-gray-600 inline-block'>{time} by </p>
                        <p className='inline-block ml-1 text-blue-600'> {article.author}</p>
                    </div>
                    <button className='whitespace-nowrap bg-blue-400 px-2 py-1'>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default CardNews;