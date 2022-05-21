import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--#E65909 bg-washed-blue'
				type='search' 
				placeholder='enter card name' 
				onChange={searchChange}
				onClick={searchChange}
			/>
		</div>
	);
}

export default SearchBox;