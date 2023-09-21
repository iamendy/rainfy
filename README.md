# Rainfy x Gnosis [Techfiesta]

Live Demo - [Loom](https://youtu.be/pw_UZUs1FkY) <br />
Live Link - [Rainfy](https://rainfy.vercel.app) <br />
Slides - [Slides](https://rainfy.vercel.app/RainfySlides.pdf)

## ✨ Inspiration

Just like planting a seed that grows into a mighty tree, [Rainfy](https://rainfy.vercel.app) empowers you to start small and watch your savings flourish over time. With Monerium integration, you can easily save Euros, USD and GBP securely on the Gnosis blockchain through Givvie. Every savings you make is on-chain, ensuring the utmost security and transparency. No more hidden fees or surprises – everything is clear and accessible at your fingertips.

## 🍰 What Rainfy does

[Rainfy](https://rainfy.vercel.app) is not just an onchain savings app; we're your financial companion, your motivator, and your partner in achieving your financial goals.

Our features empowers personal financial habits by:

- Allowing users set their locked savings duration
- Visualize their savings trends
- Implementing early retrieval penalty fee, which helps guide them on your journey to financial well-being.
- A gamified earning model that rewards users in RAIN tokens as they meet your savings goals.

![Rainfy Dashboard](/public/img/dashboard-screen.png)

## 💻 How we built Rainfy

We created 2 smart contracts in Solidity, [**Rainfy.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/Rainfy.sol) and [**RainfyToken.sol**](https://github.com/iamendy/rainfy/blob/main/contracts/RainfyToken.sol).

- The Rainfy handles the piggy bank creation, management and breaking after duration. This contract is deployed on Gnosis Chain and enables

1. Savings [View txn on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0xb20c4fb6af21901533b19c1ac5ce36a7e2775efcc7049e6f44f747f77927d2e0)

2. Break Piggy [View txn on Gnosis Chiado](https://gnosis-chiado.blockscout.com/tx/0x7bea58bee8ba73e866846dd29aa78be8b2ec7cdf5225053f737da67683ce732b)

3. Earn RAIN token. RAIN serves as a dApp utility token. It is an ERC20 token that users earn when they successfully achieve their savings goal [View on Gnosis Chiado](https://gnosis-chiado.blockscout.com/address/0x5A505E3f96bB4d322aaA9Eb81d82B330DB2dAA85?tab=internal_txns)

For the dApp, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Prisma`**, **`TailwindCSS`**, **`PostgresSQL`** and **`Monerium SDK`**.

Rainfy integrates with Monerium which allows easy conversion of fiat Euro, USD and GBP into their stablecoin equivalent. Givvie then enables users to basically save their fiat on-chain and access financial benefits.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Deployed our dApp on the Gnosis network which means we will have the best of speed, cost and mobility for our users. <br />
🍥 Had fun, and learnt a whole lot building our solution. <br />

## 📈 What's next for Rainfy

We're excited to have built this dApp. To enable more web3 users have the best savings platform without hidden and overhead cost offered by traditional banks. We plan on:

- Integrate decentralized loan protocols and utility bills settlement with RAIN token.
- Add a liquidity pool that users can easily exchange RAIN Token for xDAI.
- Implement smart wallet to allow better user experience managing savings as well as gasless transactions.
- Help our users increase their overall financial habits on-chain

Thank you! I hope you enjoyed our dApp which allows regular users to onboard into web3 by enabling secure savings on the blockchain which builds trust and opens up a whole new world of on-chain financial services.

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
