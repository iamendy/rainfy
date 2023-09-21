# Rainfy x Gnosis [Techfiesta]

Live Demo - [YouTube Video](https://youtu.be/pw_UZUs1FkY) <br />
Live Link - [Rainfy dApp](https://rainfy.vercel.app) <br />
Slides - [Presentation Slides](https://rainfy.vercel.app/RainfySlides.pdf)

## ✨ Description

[Rainfy](https://rainfy.vercel.app) is a decentralized savings app. Rainfy integrates with [Monerium](https://monerium.dev) which allows easy conversion of fiat Euro, USD and GBP into their stablecoin equivalent. Users can then connect and save their stablecoins securely on the Gnosis blockchain with Rainfy.

Our features empowers personal financial habits by:

- Allowing users set their locked savings duration
- Implementing early retrieval penalty fee, which helps guide them on your journey to financial well-being.
- A gamified earning model that rewards users in RAIN tokens as they meet their savings goals.
- Visualize their savings goals history.

![Rainfy Dashboard](/public/img/dashboard-screen.png)

## 💻 How we built Rainfy

We created and deployed 2 smart contracts in Gnosis Chiado:

1. Rainfy 0x262848dA5f3eA7408d0ecF5E2DAa76e99338A74c - [View source code](https://github.com/iamendy/rainfy/blob/main/contracts/Rainfy.sol) | [View on gnosis-chiado scan](https://gnosis-chiado.blockscout.com/address/0x262848dA5f3eA7408d0ecF5E2DAa76e99338A74c)

2. RainfyToken 0x5A505E3f96bB4d322aaA9Eb81d82B330DB2dAA85 - [View source code](https://github.com/iamendy/rainfy/blob/main/contracts/RainfyToken.sol) | [View on gnosis-chiado scan](https://gnosis-chiado.blockscout.com/address/0x5A505E3f96bB4d322aaA9Eb81d82B330DB2dAA85)

Here are some of the recent transactions on Rainfy:

1. Savings [View txn on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0xb20c4fb6af21901533b19c1ac5ce36a7e2775efcc7049e6f44f747f77927d2e0)

2. Break Piggy [View txn on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0x7bea58bee8ba73e866846dd29aa78be8b2ec7cdf5225053f737da67683ce732b)

3. RAIN Token transfers [View on Gnosis Chiado](https://gnosis-chiado.blockscout.com/address/0x5A505E3f96bB4d322aaA9Eb81d82B330DB2dAA85?tab=internal_txns)

This is an original work by our team. We built our solution using: **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Prisma`**, **`TailwindCSS`**, **`Remix`**, **`PostgresSQL`** and **`Monerium SDK`**.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Deployed our dApp on the Gnosis network which means we will have the best of speed, cost and mobility for our users. <br />
🍥 Had fun, and learnt a whole lot building our solution. <br />

## 📈 What's next for Rainfy

To enable more web3 users have the best savings platform experience without hidden and overhead cost offered by traditional banks. We plan on:

- Integrating decentralized loan protocols and utility bills settlement with RAIN tokens.
- Add a liquidity pool that users can easily exchange RAIN Token for xDAI and GNO
- Implement smart wallet to allow better user experience managing savings as well as gasless transactions.
- Help our users increase their overall financial habits on-chain

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org) for quick smart contract deployment, or alternatively hardhat:

1. Deploy `Rainfy` on Gnosis by running the necessary Hardhat script

2. Deploy `RainfyToken` by passing the deployed `Rainfy` address.

\***\* Frontend \*\***

3. Update your deployed `Rainfy` address on the `src/connect.ts file.

4. Setup a PostGreSQL instance from [Railway](https://railway.app) (for authentication)

5. run `cp .env.example .env`

6. Update `DATABASE_URL` from Railway on the .env file

7. Update your Monerium `NEXT_PUBLIC_MONERIUM_CLIENT_ID` and `NEXT_PUBLIC_MONERIUM_CLIENT_SECRET` on the .env file

8. Run `npx prisma migrate dev` to push migrations to the database

9. Run `yarn dev` to start the DApp on your development environment.

10. You can connect your wallet and enjoy a world of limitless possibilities.
