import React from 'react';
import reindeer_home from './assets/images/welcome_deers.png'


export default function Team() {
  return (
    <div id="team" class="row p-3 text-center">
        <div class="row">
            <h1><b>TEAM MEMBERS</b></h1>
        </div>
        <div class="row">
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>
            </div>
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>         </div>
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>         </div>
        </div>
        <div class="row">
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>         </div>
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>         </div>
            <div class="col">
                <b>Auro</b>
                <p>
                    Personal information of the team member
                </p>
                <img src={reindeer_home} class="img-fluid" width="200" height="200"/>         </div>
        </div>
    </div>
  );
}
