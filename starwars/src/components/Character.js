import React from 'react';

const Character = props => {
  return (
    <div className="character">
      <h2>{props.character.name}</h2>
      <h3>{props.character.homeworld.name}</h3>
      <ul>
        <li><strong>Birth Date: </strong>{props.character.birth_year}</li>
        <li><strong>Gender: </strong>{props.character.gender}</li>
        <li><strong>Skin Color: </strong>{props.character.skin_color}</li>
        <li><strong>Eye Color: </strong>{props.character.eye_color}</li>
      </ul>
    </div>
    
  );
}

export default Character;