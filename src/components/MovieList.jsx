import MovieCard from './MovieCard';

export const MovieList = () => {
    return (
        <div>
            <div className='gap-5 flex flex-wrap justify-center'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </div>
    )
}