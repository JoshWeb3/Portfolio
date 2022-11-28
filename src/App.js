import "./styles.css";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

import ethcomp from "./assets/ethcompsmall.gif";
import slot from "./assets/slot.webp";
import vault from "./assets/vault.webp";

import sprout from "./assets/sprout.png";
import coffee from "./assets/coffee.jpg";
import ticket from "./assets/ticket.png";

export default function App() {
  return (
    <div className="background">
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>

      <Container maxWidth="sm">
        <div className="splashBox">
          <h1> Joshua P </h1>
          <img src={ethcomp} />

          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="white"
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFzSxdzOme30wAAAYS7v0AAQIz45FtOkE7sqC7MiSv4h7VqZ201T9OMRkvvT7eSFqJdG6drPL0S2ViEzudPEKv-F55brRaI6iaSo5te4WCieuxOrX2wwV1vsV67L1F_w4PhVSE=&original_referer=https://www.linkedin.com/pub/dir/+/Porporino/us-70-Greater-New-York-City-Area&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjoshua-porporino-%25E2%259B%2593-878328198%3Ftrk%3Dpeople-guest_people_search-card/"
            >
              <LinkedInIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              LinkedIn
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="white"
              href="https://twitter.com/Xdream_eth/"
            >
              <TwitterIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Twitter
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="white"
              href="https://github.com/joshweb3/"
            >
              <GitHubIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Github
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="white"
              href="https://web3msu.org/"
            >
              <LinkIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Web3MSU
            </Link>
          </Breadcrumbs>
        </div>
        <div className="containerBox">
          <h2>👨🏻‍💻 About Me </h2>
          <div className="blue">
            {" "}
            🌲 Currently exploring the EVM dark forest.
          </div>
          <br />
          <div className="blue">
            🎓 Studying Information Technology at Montclair State.
          </div>
          <br />
          <div className="blue">💼 Smart contract developer. </div>
          <br />
          <div className="blue">
            {" "}
            🌱 Enthusiast in DeFi and tokenized real life assets.{" "}
          </div>
          <br />
          <br />
          <h2>🛠 Tech Stack </h2>

          <div className="blue">
            💻 Solidity | Python | Bash | Java | C++ | C | Swift{" "}
          </div>
          <br />
          <div className="blue">
            🌐 HTML | CSS | JavaScript | React.js | Next.js | Bootstrap |
            MaterialUI{" "}
          </div>
          <br />

          <div className="blue">🛢 MySQL | GraphQL</div>
          <br />
          <div className="blue">
            🔧 Visual Studio code | Hardhat | Git | Linux{" "}
          </div>
          <br />
          <div className="blue">🖥 Illustrator | Photoshop | Figma </div>
          <br />
          <br />
        </div>

        <br />

        <div className="containerBox">
          <h3> Some of my projects </h3>

          <br />
          <a
            className="noDecoration"
            href="https://github.com/JoshWeb3/eth-to-am3crv-vault-strategy/"
          >
            <div className="center">
              <img src={vault} className="projectPic" />
              <div className="projectDescription">
                <h4> DeFi Vaults </h4>
                Smart contracts that execute investment strategies on behalf of
                its users.
                <br />
                Uses various decentralized finance protocols like Uniswap, AAVE,
                and Curve Finance.
              </div>
            </div>
          </a>
          <br />
          <a
            className="noDecoration"
            href="https://github.com/JoshWeb3/VRF-slot-machine"
          >
            <div className="center">
              <img src={slot} className="projectPic" />
              <div className="projectDescription">
                <h4> Blockchain Casino Games </h4>
                Cryptocurrency Slot Machine gambling game that can be played
                with a variety of digital assets. <br />
                Uses Oracle Chainlink’s VRFv2 (Verifiably Random Function) to
                produce verifiably random games.
              </div>
            </div>
          </a>
          <br />
          <a
            className="noDecoration"
            href="https://github.com/JoshWeb3/CatgirlCafeV2-Decentralized-Exchange"
          >
            <div className="center">
              <img src={coffee} className="projectPic" />
              <div className="projectDescription">
                <h4> CGC Decentralized Exchange </h4>A rough Uniswap V1 clone
                that is anime catgirl cafe themed. Can support an unlimited
                amount of pools. Swap fees go to feline rescue charities.
              </div>
            </div>
          </a>
          <br />
          <a
            className="noDecoration"
            href="https://github.com/JoshWeb3/TicketJam-NJIT-Hackathon-2022"
          >
            <div className="center">
              <img src={ticket} className="projectPic" />
              <div className="projectDescription">
                <h4> TicketJam </h4>A smart contract protocol which facilitates
                all financial processes for paid admission events. Organizers
                can use it to easily plan events. It allows customers to quickly
                purchase and transfer tickets without fear of fraud and
                eliminates the high fees ticket companies charge.
              </div>
            </div>
          </a>
          <br />
          <a
            className="noDecoration"
            href="https://github.com/JoshWeb3/Government-Carbon-Credit-System"
          >
            <div className="center">
              <img src={sprout} className="projectPic" />
              <div className="projectDescription">
                <h4> Carbon Credit System </h4>
                An easy and secure way for governments to credit carbon tax
                credit to business owners and individuals
              </div>
            </div>
          </a>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}
