# Next.js Starter

A lightweight and minimal starter for building web applications with Next.js.

## Pic3

## Getting Started

1. Clone the repository: `git clone git@github.com:qq919006380/Pic3.git`
2. Install the dependencies: `npm install` or `yarn install`
3. Create a `.env.local` file. Set NEXT_PUBLIC_INFURA_API=<infura api key> NEXT_PUBLIC_CHAIN_ID=<the chain id interacted> in .env.local
4. Start the development server: `npm run dev` or `yarn dev`

The starter is now running on http://localhost:3000.

## Features

- Next.js 13
- ESLint and Prettier for code formatting
- Wagmi
- Rainbowkit
- Notistack
- NextNProgress

## Pic vs. Traditional Web2 Image Hosts

- Decentralized: IPFS distributes images globally, eliminating reliance on a single server.

- Permanence: Images on IPFS are permanent, accessible as long as one node hosts them.

- Verifiability: Every image on IPFS has a unique CID, ensuring
  the image's authenticity.

- Distributed: IPFS hosting can handle high traffic, free from single server limitations.

- Privacy: With images spread across the IPFS network, usershave greater privacy control.

- Open Source: IPFS is fully open-source,allowing for restrictions.


## Workflow
1. upload content via IPFS connector tools like nft.storage to obtain a CID. 
2. The CID is then transformed into encrypted code using a compression encryption algorithm. 
3. This encrypted code is uploaded to the blockchain via a contract.