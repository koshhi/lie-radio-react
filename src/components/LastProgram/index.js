import React from 'react';

const LastProgram = () => (
    <div key="{program.id}" className='program'>
        <img src="http://localhost:8888/wp-content/uploads/2018/05/camille-orgel-551599-unsplash-1024x683.jpg" alt="alt text" />

        <div className='program__content'>
            <div className="program__info">
                <ul className='program__tags'>
                    <li>Tag 1</li>
                    <li>Tag 2</li>
                    <li>Tag 2</li>
                </ul>
                <h2>TÍTULO DEL PROGRAMA</h2>
                <p>Drones punkis, guitarreos wave y ríos de kraut teñidos en distintas proporciones de índigo. Claros y oscuros seleccionados por Boni G. Miranda.</p>
            </div>
            <div className="program__actions">
                boton
                player-button
            </div>
        </div>
    </div>
)

export default LastProgram;