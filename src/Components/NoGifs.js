/**
 * NoGifs.js
 * 
 * Component to display when no gifs are found in a search
 * 
 * Author:  Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 * Created: February 2020
 * 
 */

import React from "react";

const NoGifs = () => (
	<li className="no-gifs">
		<i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
		<h3>Sorry, no GIFs match your search.</h3>
	</li>
);

export default NoGifs;
