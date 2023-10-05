// Landing page
import { useEffect } from "react";
import PropTypes from "prop-types";
import { ABI, CHAIN_MAP } from "../config/constant";

function HomePage(props) {
  
  return (
    <div className="bg-gradient-to-b from-indigo-800 to-purple-900 text-white min-h-screen">
      <header className="py-10 text-center">
        <h1 className="block sm:inline bg-gradient-to-r from-highlight to-dark text-transparent bg-clip-text">
          Welcome to Web3
        </h1>
        <p className="mt-4 text-lg">Explore the Decentralized Future</p>
      </header>

      <main className="container mx-auto">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="block sm:inline bg-gradient-to-r from-highlight to-dark text-transparent bg-clip-text">
            Why Choose Web3?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Decentralization</h3>
              <p>
                Web3 technology removes the need for centralized authorities,
                creating a more democratic and resilient digital world.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p>
                Blockchain-based systems provide enhanced security and
                transparency, reducing the risk of data breaches.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Privacy</h3>
              <p>
                Web3 empowers users to have greater control over their data and
                online privacy.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>
                Web3 is open-source, fostering innovation and allowing for
                creative solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Explore the Web3 World
          </h2>
          <p className="text-lg">
            Web3 offers exciting opportunities and applications, including
            cryptocurrencies, decentralized finance (DeFi), NFTs, and
            decentralized apps (dApps). Join the Web3 revolution and discover
            endless possibilities.
          </p>
        </section>
      </main>

      <footer className="bg-indigo-900 text-white text-center py-4">
        <p>&copy; 2023 Web3 Promotion</p>
      </footer>
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
