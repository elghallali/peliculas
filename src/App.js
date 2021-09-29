import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json';
import Pagination from './Pagination';
import { useState } from 'react';
function App() {
	const [actualPage, setActualPage] = useState(1);
	const TOTAL_FOR_PAGE = 5;
	const getTotalPages = () => {
		let size = moviesJson.length;
		return Math.ceil(size / TOTAL_FOR_PAGE);
	}
	let movies = moviesJson;

	const loadMovies = () => {
		movies = movies.slice(
			(actualPage - 1) * TOTAL_FOR_PAGE,
			(actualPage) * TOTAL_FOR_PAGE);
	}

	loadMovies();
	
	return (
    	<div>
			<PageWrapper>
				{movies.map(movie => 
				<Movie title={movie.title} classification={movie.classification} actors={movie.actors} 
					director={movie.director} date={movie.date} duration={movie.duration} img={movie.img}>
						{movie.description}
				</Movie>
				)}
				<Pagination page={actualPage} total={getTotalPages()} onChange={(page) => 
				setActualPage(page)
				} />			
			</PageWrapper>
    	</div>
	);
}

export default App;
