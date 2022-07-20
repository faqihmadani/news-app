import { useRouter } from 'next/router'

const Paginator = ({ pageNumber, handleNext, handlePrev }) => {
    const router = useRouter();

    return (
        <div className="flex items-center justify-center mt-5">
            <button onClick={() => handlePrev(pageNumber, router)} className={`mr-10 border-r px-10 border-gray-400 ${pageNumber === 1 ? ' disabled:text-gray-400 ' : ''}`} disabled={pageNumber === 1}>Prev Page</button>
            {pageNumber}
            <button className="ml-10 border-l px-10 border-gray-400">Next Page</button>
        </div>
    );
}

export default Paginator;