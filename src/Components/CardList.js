import React from 'react';
import Card from './Card';



const CardList = ({ cards }) => {
	const sorter = ( card ) => {
		if ('image_uris' in card){
			let i = 0;
			let tempArray = [];
			tempArray[i] = card.image_uris.normal;
			console.log('1 face pass');
			return tempArray;
		}
		if ('card_faces' in card){
			let tempArray = [];
			let i = 0;
			for (i in card.card_faces){
				tempArray[i] = card.card_faces[i].image_uris.normal
			};
			console.log('2 face pass');
			return (tempArray);	
		}
		else {console.log('error')}
	}
	return (
		<div>
			{
				cards.map((card, i) => {
					return (
						<Card 
							key={i} 
							name={cards[i].name}
							pic={sorter(cards[i])}
						/>
					);
				})
			}
		</div>
	);
}
export default CardList;