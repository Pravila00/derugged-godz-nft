import React from 'react';

export default function Faq() {
  return (
    <div id="faq" class="row p-3">
        <div class="row text-center">
            <h1><b>FAQ</b></h1>
            <br/>
            <div class="row text-center p-3">
                <div class="col"></div>
                <div class="col">
                    <a class="btn btn-outline-light" data-bs-toggle="collapse" href="#wen_mint" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <b>Wen mint?</b>
                    </a>
                </div>
                <div class="col"></div>
            </div>
            <div class="collapse" id="wen_mint">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
            

            <div class="row text-center p-3">
                <div class="col"></div>
                <div class="col">
                    <a class="btn btn-outline-light" data-bs-toggle="collapse" href="#mint_price" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <b>Mint price</b>
                    </a>
                </div>
                <div class="col"></div>
            </div>
            <div class="collapse" id="mint_price">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
            

            <div class="row text-center p-3">
                <div class="col"></div>
                <div class="col">
                    <a class="btn btn-outline-light" data-bs-toggle="collapse" href="#supply" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <b>Supply</b>
                    </a>
                </div>
                <div class="col"></div>
            </div>
            <div class="collapse" id="supply">
                <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div>
        </div>
    </div>
  );
}
