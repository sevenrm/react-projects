import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e1e1e1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const ReleaseDate = styled.p`
  color: #666;
`;

const Details = styled.div`
  padding: 15px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Feature = styled.li`
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: rgb(107, 97, 197);
`;

const ConsoleVersions = styled.p`
  color: #777;
`;

const GameCard = ({
  title,
  releaseDate,
  imageUrl,
  features,
  price,
  consoleVersions,
}) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Details>
        <Title>{title}</Title>
        <ReleaseDate>Release Date: {releaseDate}</ReleaseDate>
        <FeatureList>
          {features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </FeatureList>
        <Price>{`Price: ${price}`}</Price>
        <ConsoleVersions>{`Available on: ${consoleVersions.join(
          ", "
        )}`}</ConsoleVersions>
      </Details>
    </Card>
  );
};

export default GameCard;
