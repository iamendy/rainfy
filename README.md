# Rainfy x Gnosis [Techfiesta]

Live Demo - [Loom](https://www.loom.com) <br />
Live Link - [Rainfy](https://rainfy.vercel.app) <br />
Slides - [Slides](https://rainfy.vercel.app)

## ✨ Inspiration

Just like planting a seed that grows into a mighty tree, our app empowers you to start small and watch your savings flourish over time. With Monerium integration, you can save Euros, USD and GBP from our dAPP. Every savings you make is recorded on the blockchain, ensuring the utmost security and transparency. No more hidden fees or surprises – everything is clear and accessible at your fingertips.

## 🍰 What Rainfy does

[Rainfy](https://rainfy.vercel.app) is not just an onchain savings app; we're your financial companion, your motivator, and your partner in achieving your financial goals.

Our features, like setting savings duration,visualizing your progress and early retrieval penalty, will inspire and guide you on your journey to financial well-being.

You also earn Rain tokens when you meet your savings target which allows you to access future features like utility bills payments, onchain loan services and so much more.

![Rainfy Dashboard](/public/img/preview.png)

## 💻 How we built Rainfy

We created 2 smart contracts in Solidity, [**Rainfy.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/Rainfy.sol) and [**RainfyToken.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/RainfyToken.sol).

- The Rainfy handles the piggy bank creation, management and breaking after duration. This contract is deployed on Gnosis Chain -

1. Savings [View on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0xcf2570d8061ce15d0b60406c350288870da64530c3eb7704bee0400bf52e36d8)

2. Break Piggy [View on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0x850f68b0296da6bb4c0fa68f87d20b6dcdd6f49cce4eefd6d8717b6d0901e1fc)

- The RainfyToken is used for rewarding users who successfully save and also serves as a dApp utility token. It is an ERC20 token that users earn when they successfully achieve their savings goal [View on Gnosis Chiado](https://gnosis-chiado.blockscout.com/address/0x5A505E3f96bB4d322aaA9Eb81d82B330DB2dAA85)

For the front end, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Prisma`** and **`TailwindCSS`** .

Rainfy integrates with Monerium which allows easy Euro, USD and GBP onRamp, thereby allowing users to basically save their fiat on-chain.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Deployed our dApp on the Gnosis network which means we will have the best of speed, cost and mobility for our users. <br />
🍥 Had fun, and learnt a whole lot building our solution. <br />

## 📈 What's next for Rainfy

We're excited to have built this dApp. To enable more web3 users have on-demand access to the best savings platform. We plan on:

- Introduce more usecases for Rainfy token as incentives for users to save more.
- Adding services like loan protocols, utility bills settlent, and staking to increase utilities as well as on-chain invesment options.
- Add a liquidity pool that users can easily exchange RAIN Token for xDAI.

Thank you! I hope you enjoyed our dApp which allows regular users to onboard into web3 by enabling secure savings on the blockchain which builds trust and opens up a whole new world of on-chain financial services.

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org) for quick smart contract deployment, or alternatively hardhat:

1. Deploy `Rainfy` on Gnosis by running the necessary Hardhat script

2. Deploy `RainfyToken` by passing the deployed `Rainfy` address.

\***\* Frontend \*\***

3. Update your deployed `Rainfy` address on the `src/connect.ts file.

4. Setup a PostGreSQL instance from [Railway](https://railway.app)

5. Replace the `DATABASE_URL` on the .env file

6. Run `npx prisma migrate dev` to push migrations to the database

7. Run `yarn dev` to start the DApp on your development environment.

8. You can connect your wallet and enjoy a world of limitless possibilities.
