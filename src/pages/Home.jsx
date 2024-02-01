import React, { useEffect, useState } from "react";

//react bootstrap components
import { Col, Container, Row } from "react-bootstrap";

//components
import MovieCard from "../components/MovieCard";

const Home = () => {
	const [movies, setMovies] = useState([]);

	//fetching api
	async function getData() {
		try {
			const response = await fetch(
				"https://api.tvmaze.com/search/shows?q=all"
			);
			const data = await response.json();
			setMovies(data);
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Container fluid="lg" className="my-3">
				<Row>
					{movies.map((movie) => (
						<Col
							sm="6"
							md="4"
							xxl="3"
							key={movie.show.id}
							className="my-2 my-sm-4"
						>
							<MovieCard
								img={movie.show.image?.medium}
								name={movie.show.name}
								id={movie.show.id}
								rating={movie.show.rating.average}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Home;
