import moment from 'moment';
import { useRouter } from "next/router";

const CategoryMenu = ({ category, posts, route }) => {
    const router = useRouter()

    return (
        <div className="my-10">
            <div className='mb-5 pb-5 border-b-2 border-gray-600 pt-5'>
                <a onClick={() => router.push(`/category/${route}`)} className="text-3xl font-bold hover:cursor-pointer hover:underline ">{category}</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-16 md:gap-y-10">
                {posts.map((post, index) => {
                    let time = moment(post.publishedAt).startOf('hour').fromNow();
                    return (
                        <div key={index} className="flex flex-col">
                            <img className="w-[400px] h-[250px]" src={post.urlToImage} alt={post.title} />
                            <div className="flex flex-col mt-5">
                                <a href={post.url} rel="noreferrer" target="_blank" className="hover:underline font-semibold text-xl">{post.title}</a>
                                <p className="mt-3">{post.description}</p>
                                <div className='pr-5 mt-3'>
                                    <p className='font-light text-gray-600 inline-block'>{time} by </p>
                                    <p className='inline-block ml-1 text-blue-600'> {post.author}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CategoryMenu;