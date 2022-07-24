import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()

    return (
        <div className=" md:pt-28 pt-32 flex flex-col items-center  ">
            <h1 className="text-center text-3xl font-bold mb-5">404 Not Found</h1>
            <a onClick={() => router.push('/')} className={`text-center hover:underline mt-5 md:mt-0 hover:cursor-pointer transition-all duration-100 ease-in-out`}>Back To Home</a>

        </div>
    );
}

export default NotFound;