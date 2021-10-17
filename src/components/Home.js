import React from 'react';
import reindeer_home from './assets/images/welcome_deers.png'

export default function Home() {
  return (
    <div id="home" class="row p-3">
        <div class="col">
            <p>
                <b>
                    Welcome to MagicalDeers!
                </b>
            </p>
            <p>
                hermano esto es un textacto
                de la informacion de los Renos
                aqui ponemos lo que queramos
                sabes en plan illo lo que quieras
            </p>
        </div>
        <div class="col">
        <img src={reindeer_home} class="img-fluid" width="600" height="600"/>
        </div>
    </div>
  );
}
