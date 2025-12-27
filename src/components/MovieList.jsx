import MovieCard from './MovieCard';

export const MovieList = ({title}) => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-red-500 pb-5'> {title}</h1>
            <div className='gap-5 flex flex-wrap justify-center'>
                <MovieCard title = {"Bahubali"}/>
                <MovieCard title = {"Super Nani"}/>
                <MovieCard title = {"Spiderman"}/>
                
            </div>

        </div>
    )
}