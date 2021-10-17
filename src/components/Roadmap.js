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
          <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

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

          <YouTubeEvent
            date="6/18/19"
            id="6UnRHtwHGSE"
            name="General Tso's Chicken recipe"
            text="... and YouTube videos!"
          />
        </Events>
      </Timeline>
    </div>
    
  );
}