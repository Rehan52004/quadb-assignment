import React, { useEffect, useState } from "react";

//react components
import {
	Button,
	Col,
	Container,
	Form,
	Modal,
	Row,
	Spinner,
} from "react-bootstrap";

//react router
import { useParams } from "react-router-dom";

const ShowDetails = () => {
	//loader
	const [loader, setLoader] = useState(null);

	//modals
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//params for id
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	//user details
	const initUsers = localStorage.getItem("Users")
		? JSON.parse(localStorage.getItem("Users"))
		: [];
	const [user, setUser] = useState(initUsers);

	//handling form
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	function submitHandler(e) {
		e.preventDefault();
		console.log(name, email);
		if (name && email) {
			setUser([...user, { name, email, bookedMovie: movie }]);
		} else {
			alert("Please fill details");
		}
		setName("");
		setEmail("");
		handleClose();
		alert(
			"Movie Booked Succesfully Go to local storage to seemore details"
		);
	}

	// fetching api for one movie
	async function getData() {
		setLoader(true);
		try {
			const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
			const data = await res.json();
			if (data) {
				setMovie(data);
				setLoader(null);
				console.log(data);
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
		localStorage.setItem("Users", JSON.stringify(user));
	}, [user]);

	return (
		<>
			{!loader && movie ? (
				<Container
					fluid="lg"
					style={{ minHeight: "85vh" }}
					className="pt-0 pt-sm-3 pt-lg-4 mb-3 mb-md-0"
				>
					<Row className="pt-0 pt-sm-3 pt-lg-5 justify-content-center">
						<Col md="4" className="d-flex justify-content-center">
							<div style={{ maxWidth: "20rem" }}>
								<img
									src={
										movie.image
											? movie.image?.original
											: "https://media.istockphoto.com/id/1352945762/vector/no-image-available-like-missing-picture.jpg?s=612x612&w=0&k=20&c=4X-znbt02a8EIdxwDFaxfmKvUhTnLvLMv1i1f3bToog="
									}
									alt="photo"
									style={{
										width: "100%",
										maxHeight: "100%",
									}}
								/>
							</div>
						</Col>
						<Col md="6">
							<h1 style={{ fontWeight: "bold" }} className="mb-3">
								{movie.name}
							</h1>
							{movie?.genres?.map((genre, i) => (
								<span
									key={i}
									style={{
										fontSize: "20px",
										marginRight: "5px",
										borderRadius: "5px",
										backgroundColor: "black",
										color: "white",
										padding: "5px 10px",
									}}
								>
									{genre}
								</span>
							))}
							<div
								className="mt-3"
								dangerouslySetInnerHTML={{
									__html: movie.summary,
								}}
							/>
							<h4 className="mt-3">
								Languages: {movie.language}
							</h4>
							<button
								onClick={handleShow}
								className="mt-4"
								style={{
									backgroundColor: "white",
									color: "black",
									border: "1px solid black",
									borderRadius: "5px",
									padding: "5px",
									display: "inline-block",
								}}
							>
								Buy Ticket
							</button>
						</Col>
					</Row>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Confirmation Details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="d-flex justify-content-between">
								<div>
									<h4>{movie.name}</h4>
									<p>{movie.language}</p>
								</div>

								{/* i use random price for movie because api dont't have price */}
								<h5>Price: ${movie.name?.length}</h5>
							</div>
							<hr />
							<Form onSubmit={submitHandler}>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlInput1"
								>
									<Form.Label>Enter name</Form.Label>
									<Form.Control
										type="text"
										placeholder="John Doe"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</Form.Group>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlInput1"
								>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="email"
										placeholder="jhon@example.com"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</Form.Group>

								<Button
									variant="secondary"
									onClick={handleClose}
									className="me-2"
								>
									Cancle
								</Button>
								<Button variant="primary" type="submit">
									Confirm
								</Button>
							</Form>
						</Modal.Body>
					</Modal>
				</Container>
			) : (
				<div
					style={{ height: "100vh", width: "100%" }}
					className="d-flex justify-content-center align-items-center"
				>
					<Spinner animation="border" />
				</div>
			)}
		</>
	);
};

export default ShowDetails;
