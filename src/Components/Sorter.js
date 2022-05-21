import React from 'react';

// Noooooo idea if this works but idk 17:54 5.18.22
const Sorter = ( card, key ) => {
	if ('image_uris' in card){
		console.log('single-sided passing')
		return card.image_uris.normal
	}
	if ('card_faces' in card){
		let tempArray = [];
		let i = 0;
		for (i in card.card_faces){
			tempArray[i] = card.card_faces[i].image_uris.normal
		};
		console.log('double-sided passing')
		return (tempArray[0], tempArray[1]);	
	}
	else {console.log('error')}
}



export default Sorter;