import React from 'react';
import twitter from './assets/images/twitter.png'
import discord from './assets/images/discord.png'

export default function Home() {
  return (
    <footer>
            <div class="row col text-center">
                <p>
                    &copy; 2022 Derugged Godz Sanctuary powered by <a class="link-secondary" href="https://solana.com/">Solana</a>
                </p>
                <p>
                    <a href="https://twitter.com/derruged_godz">
                        <img src={twitter} class="img-fluid" width="50" height="50"/></a>
                    <a href="https://discord.gg/Pd8ynZEX">
                        <img src={discord} class="img-fluid" width="50" height="50"/></a>
                </p>
            </div>
    </footer>    
  );
}
