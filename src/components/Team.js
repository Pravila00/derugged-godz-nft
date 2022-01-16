import React from 'react';
import auro from './assets/images/auro.png'
import avi from './assets/images/avi.png'
import lloyd from './assets/images/lloyd.png'

export default function Team() {
  return (
    <div id="team" class="row p-3 text-center">
        <div class="row">
            <h1><b>TEAM MEMBERS</b></h1>
        </div>
        <div class="row">
            <div class="col">
                <b>Avi</b>
                <p>
                    Team Lead
                </p>
                <img src={avi} class="img-fluid" width="200" height="200"/>
            </div>
            <div class="col">
                <b>Auro</b>
                <p>
                    Dev
                </p>
                <img src={auro} class="img-fluid" width="200" height="200"/>         </div>
            <div class="col">
                <b>lloyd</b>
                <p>
                    Artist
                </p>
                <img src={lloyd} class="img-fluid" width="200" height="200"/>         </div>
        </div>
    </div>
  );
}
