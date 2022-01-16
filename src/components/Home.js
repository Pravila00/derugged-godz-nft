import React from 'react';
import home_godz from './assets/images/home_godz.png'

export default function Home() {
  return (
    <div id="home" class="row p-3">
        <div class="col text-center">
            <p>
                <b>
                    Welcome to Derugged Godz Sanctuary
                </b>
            </p>
            <p>
                Description of the project
            </p>
        </div>
        <div class="col">
        <img src={home_godz} class="img-fluid" width="600" height="600"/>
        </div>
    </div>
  );
}
