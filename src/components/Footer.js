import React from 'react';
import twitter from './assets/images/twitter.png'
import discord from './assets/images/discord.png'

export default function Home() {
  return (
    <footer>
            <div class="row col text-center">
                <p>
                    &copy; 2021 MagicalDeers Powered by <a class="link-secondary" href="https://solana.com/">Solana</a>
                </p>
                <p>
                    <a href="#">
                        <img src={twitter} class="img-fluid" width="50" height="50"/></a>
                    <a href="#">
                        <img src={discord} class="img-fluid" width="50" height="50"/></a>
                </p>
            </div>
    </footer>    
  );
}
