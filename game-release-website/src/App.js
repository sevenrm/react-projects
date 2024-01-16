import React from "react";
import { Container } from "./Layout";
import Header from "./components/Header";
import "./style.css";
import GameCard from "./components/GameCard";
import Carousel from "./components/Carousel";

function App() {
  const latestRelease = ["/images/mario.jpg", "/images/game2.jpg"];

  const games = [
    {
      title: "Game 1",
      releaseDate: "2023-01-01",
      imageUrl: "/images/mario.jpg",
      features: [
        "Immersive Storyline",
        "Multiplayer Mode",
        "High-Quality Graphics",
      ],
      price: 49.99,
      consoleVersions: ["PSS", "Xbox Series X", "PC"],
    },
    {
      title: "Game 2",
      releaseDate: "2023-02-15",
      imageUrl: "/images/game2.jpg",
      features: [
        "Open World Exploration",
        "Co-op Gameplay",
        "Dynamic Enviroments",
      ],
      price: 59.99,
      consoleVersions: ["PS4", "Xbox One", "PC"],
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Carousel images={latestRelease} />
        <h1>Upcoming Game Releases</h1>
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Container>
    </>
  );
}

export default App;
