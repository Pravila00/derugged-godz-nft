import React from 'react';
import { Timeline, Events, TextEvent, themes, createTheme, ImageEvent, YouTubeEvent, UrlButton } from '@merc/react-timeline';

  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#8322DD',
    },
    marker: {
      borderColor: '#8322DD',
    },
    timelineTrack: {
      backgroundColor: '#8322DD',
    },
  });

export default function Roadmap() {
  return (
    <div id="roadmap" class="row text-center">
        <h1><b>ROADMAP</b></h1>
        <Timeline theme={customTheme}>
        <Events>
          <TextEvent date="STAGE 0" 
            text="Get Discord and Twitter Running.
                  Start community growth and work on Art
                  Make our way to take our sit on Solana Blockchain." 
            />

          <TextEvent date="STAGE 1" 
            text="Airdrop and minting 999 Derugged Godz. Everyone submitting a solscan between
            Jan 1st and Jan 4th with a purchase of a Gyaku will get their wallet whitelisted.
            Whitelisted wallets will be able to mint for free." 
            />

          <TextEvent date="STAGE 2" 
            text="Listing in secondary market. A percentage of royalties will be used to improve
            the project." 
            />

          <TextEvent date="STAGE 3" 
            text="DAO Sanctuary, being a holder of a God will make you parte of the Sanctuary.
            Holding a Godz means that you can not be rugged anymore. If you get rugged, we will reimport
            you the amount of Sol you've lost." 
            />

          <TextEvent date="STAGE 4" 
            text="Once we reach a certain amount of funds. Sanctuary will be ready. A place where people who
            got rugged in another project will have a place in our Discord. A percentage of royalties and mint
            funds will be used to help rugged ones." 
            />

          <TextEvent date="STAGE 5" 
            text="This stage will be a poll for the Community. If community decides they want a token, we will launch
            a token, or staking. This sage will be Community choice." 
            />

          <ImageEvent
            date="4/13/19"
            text="You can embed images..."
            src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
            alt="jellyfish swimming"
            credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
          >
            <div>
              <UrlButton href="https://unsplash.com/search/photos/undersea">
                View more undersea photos
              </UrlButton>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
    
  );
}