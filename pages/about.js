import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>today news | About</title>
                <link rel="shortcut icon" href="./favicon.png" />
            </Head>
            <div className="md:pt-28 pt-32 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                <h1 className="text-gray-900 text-3xl text-center font-sans font-medium">About News App</h1>
                <p className="text-md text-center mt-2">
                    This website is made by Faqih Madani using Next JS, Tailwind CSS, and <a className="underline" target="_blank" href="https://newsapi.org/"> News API</a>.
                </p>
            </div>
            <p>

            </p>
        </div>
    );
}

export default About;