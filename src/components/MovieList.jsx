import MovieCard from './MovieCard';

const movies = [
    {title: "Dear Comrade", image: "https://preview.redd.it/5-years-for-dear-comrade-v0-i3g6eqmr8ted1.jpeg?width=1080&crop=smart&auto=webp&s=b6d86f5a33367abfcbc86cbf012ebde17ab33c62"},
    {title: "Ms Dhoni", image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00047082-rldyyvxemj-landscape.jpg"},
    {title: "Dangal", image: "https://resizing.flixster.com/pgk7SHTEFR3NbWDlGMl4etn9rj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVkNWFlYmQxLTkyYzktNGZiYi1iN2JiLTU1MGRlNTM4ZDc0My53ZWJw"}
]

export const MovieList = ({title}) => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-red-500 pb-5'> {title}</h1>
            <div className='gap-5 flex flex-wrap justify-center'>
                {movies.map((item, index)=> <MovieCard key = {index}  // index is from 0 to array's length i.e here movie arrays
                title = {item.title}
                image = {item.image}
                />)}
            </div>
        </div>
    )
}