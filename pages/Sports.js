import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "../components/cards/cards.css";
import p2 from "../components/cards/p2.jpg";
import axios from "axios";
import DownloadBar from "../components/DownloadBar";
function Sports() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // Fetching API Query From API source.
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=64ec037d980f43f1836e820896d21bd5"
      )
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
      {/* App Dwnload Bar. */}
      <DownloadBar />
      {/* Mapping the API Data to the card. */}
      {newsData.map((data, index) => (
        <Card className="card-main-cont1" key={index}>
          <div className="card-main-cont1-div1">
            <Card.Img src={data.urlToImage !== null ? data.urlToImage : p2} />
          </div>
          <div>
            <Card.Body className="card-main-cont1-card-body">
              <Card.Title>{data.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <b>Short</b> by {data.author}/ {data.publishedAt}
              </Card.Subtitle>
              <Card.Text className="mt-4">{data.description}</Card.Text>
              <Button className="mt-4" href={data.url} target="_blank">
                Read more at {data.source.name}
              </Button>
            </Card.Body>
          </div>
        </Card>
      ))}
    </>
  );
}

export default Sports;
