import { useState } from "react";

const Header = () => {
    const [id, setId] = useState('')
    const [idData, setIdData] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(id)
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_SYdWRgtZ6wZIo7zuht2coAZS6lhx9&ipAddress=${id}`)
        const data = await res.json()
        const idDos = [ data.location.lat,  data.location.lng]
        setIdData({idDos})
        console.log("cordenadas agarradas de la data",idData, idDos, id)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setId(e.target.value)

    }
    return (
        <div className="relative bg-deep-purple-accent-700">
            <div className="px-8 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Do it faster, make it better
                        <br className="md:block" />
                        more than ever with the best {' '}
                        <span className="relative inline-block px-2">
                            <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                            <span className="relative text-teal-900"> IP Address Tracker</span>
                        </span>
                    </h2>
                    <form onSubmit={handleSubmit}
                        className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                        <input
                            placeholder="IP address or domain"
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                            onChange={handleChange}

                        />
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Search
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header