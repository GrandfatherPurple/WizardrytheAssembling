import React from 'react';


const Card = ({ name, pic, i }) => {
	
	const imageNumberSorter = (pic, i) => {
		if (pic.length === 1) {
			return (
				<div>
					<img alt='face one' width='300rem' src={pic}/>
				</div>)
		};
		if (pic.length === 2) {
			return (
				<div>
					<img alt='face one'  width='300rem' src={pic[0]}/>
					<img alt='face two'  width='300rem' src={pic[1]}/>
				</div>
			)
		}
	}

	return (
		<div className='bg-dark-gray tc dib br3 pa2 ma2 grow bw4 shadow-5'>
			{imageNumberSorter(pic)}
		<div>
			<h2>{name}</h2>
		</div>
	</div>
	)	
}

export default Card;



