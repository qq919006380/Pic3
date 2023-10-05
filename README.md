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

 ## 与传统的web2 图床的区别
 - 去中心化: IPFS是一个去中心化的协议，它将图像分布在全球范围内的IPFS节点上。与传统的图床不同，图像不会集中存储在单一的服务器上，这增加了数据的冗余性和可靠性。

- 永久性: 图像存储在IPFS上是永久的，只要有至少一个IPFS节点在网络上存储该图像，它就可以永远访问。这与传统图床可能会删除图像的做法不同。

- 可验证性: 每个存储在IPFS上的图像都有一个唯一的CID（Content Identifier），这个CID可用于验证图像的完整性和一致性。用户可以确保所访问的图像与原始上传的图像一致。

- 分布式: IPFS图床是分布式的，这意味着它可以处理大量的请求和流量，而不会因为单一服务器的瓶颈而变慢或宕机。

- 隐私: 使用IPFS图床，用户可以更好地掌握其图像的隐私。因为图像分布在IPFS网络上的多个节点，所以用户可以更好地控制其图像的可见性。

- 开源: IPFS是一个开源协议，它的工具和库也是开源的，这意味着你可以自由地使用、定制和扩展它，而不受专有服务的限制。

## 流程
1. 用户通过ipfs连接器如nft.storage 上传到ipfs 来获取到cid
2. 使用cid通过AES加密算法生成密码文本
3. 把密码文通过合约上传到区块链，