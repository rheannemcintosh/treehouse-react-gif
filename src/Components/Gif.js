/**
 * Gif.js
 * 
 * Component to display the gif as a list item and image
 * 
 * Author:  Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 * Created: February 2020
 * 
 */

import React from "react";

const Gif = (props) => (
	<li className="gif-wrap">
    	<img src={props.url} alt={props.slug} />
  	</li>
);

export default Gif;
