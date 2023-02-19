import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CardStyled = styled.div`
	position: relative;
	width: 30%;
	height: 340px;
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	transition: box-shadow 0.2s ease-in-out;

	@media screen and (max-width: 1230px) {
		width: 45%;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
	}
	@media screen and (max-width: 500px) {
		height: 200px;
	}

	.gallery_card {
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: beige;
	}

	&::after {
		content: '';
		z-index: 10;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 0.5) 100%
		);
	}

	&:hover {
		box-shadow: 0 2px 8px rgb(0, 0, 0);
	}
	&:hover img {
		transform: scale(1.1);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: transform 0.2s ease-in-out;
		will-change: transform;
	}
	h3 {
		z-index: 20;
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;
		font-weight: 500;
		font-size: clamp(12px, 3vw, 18px);
		color: $color-primary;
	}
`;

export default function Card({id, title, cover}) {
	return (
		<CardStyled>
			<Link to={`/lodging/${id}`} className='gallery_card'>
				<img src={cover} alt={title} />
				<h3>{title}</h3>
			</Link>
		</CardStyled>
	);
}
