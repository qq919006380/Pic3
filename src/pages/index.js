// Landing page
import { useEffect } from "react";
import PropTypes from "prop-types";
import { ABI, CHAIN_MAP } from "../config/constant";
function HomePage(props) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Textual Introduction */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight transform hover:scale-105 transition-transform">
              Pic: Decentralized Blockchain Image Hosting
            </h1>
            <p className="text-lg font-medium">
              Serverless, prioritizing user privacy.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold underline">
                Pic vs. Traditional Web2 Image Hosts
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li className="hover:text-blue-500 transition-colors">
                  Decentralized: IPFS distributes images globally, eliminating
                  reliance on a single server.
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  Permanence: Images on IPFS are permanent, accessible as long
                  as one node hosts them.
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  Verifiability: Every image on IPFS has a unique CID, ensuring
                  the image's authenticity.
                </li>
                <li className="hover:text-blue-500 transition-colors">
                  Distributed: IPFS hosting can handle high traffic, free from
                  single server limitations.
                </li>

                <li className="hover:text-blue-500 transition-colors">
                  Privacy: With images spread across the IPFS network, users
                  have greater privacy control.
                </li>

                <li className="hover:text-blue-500 transition-colors">
                  Open Source: IPFS is fully open-source, allowing for
                  customization without restrictions.
                </li>
              </ul>
            </div>
          </div>

          {/* Right: GIF Introduction */}
          <div>
            <div className="p-4 shadow-lg rounded-lg bg-gradient-to-br from-blue-100 to-indigo-200 animate-pulse">
              <img
                src="/image/preview.jpg"
                alt="preview"
                className=" rounded-lg shadow-inner hover:shadow-xl transition-shadow"
              />
            </div>
            <div class="space-x-3 mt-3">
              <a
                href="/upload"
                class="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-all duration-300"
              >
                Go to upload
              </a>
              <a
                target="_blank"
                href="https://github.com/qq919006380/Pic3"
                class="inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400 transition-all duration-300"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 class="text-2xl font-bold mb-4">Workflow</h1>
          <div class="space-x-4 space-y-4">
            <div class="p-5 inline-block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p class="text-gray-700">1.  upload content via IPFS connector tools like nft.storage to obtain a CID.</p>
            </div>

            <div class="p-5 inline-block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p class="text-gray-700">2. The CID is then transformed into encrypted code using a compression encryption algorithm.</p>
            </div>

            <div class="p-5 inline-block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p class="text-gray-700">
                3. This encrypted code is uploaded to the blockchain via a contract.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  name: PropTypes.string,
};

export async function getStaticProps() {
  const abi = ABI;
  return {
    props: {
      abi,
    },
  };
}

export default HomePage;
