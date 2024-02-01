import React from "react";

//react router
import { Link } from "react-router-dom";

//react icons
import { FaStar } from "react-icons/fa6";

const MovieCard = (props) => {
	const { img, name, id, rating } = props;

	return (
		<>
			<div
				style={{
					maxWidth: "15rem",
					maxHeight: "25rem",
					margin: "0px auto",
				}}
				className="movie-card"
			>
				<Link to={`/show/${id}`} className="nav-link">
					<img
						src={
							img
								? img
								: "https://www.movienewz.com/img/films/poster-holder.jpg"
						}
						alt="image"
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
					<div className="d-flex justify-content-between align-items-center px-1 py-2">
						<p className="mb-0">{name}</p>
						{rating && (
							<div className="d-flex align-items-center">
								<FaStar />
								<p className="mb-0 ms-1">{rating}</p>
							</div>
						)}
					</div>
				</Link>
			</div>
		</>
	);
};

export default MovieCard;
