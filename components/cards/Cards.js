import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./cards.css";
import p2 from "./p2.jpg";
import axios from "axios";
import DownloadBar from "../DownloadBar";
function Cards() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    // Fetching API Query From API source.
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64ec037d980f43f1836e820896d21bd5"
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
            <Card.Body className="card-main-cont1-card-body container-fluid">
              <Card.Title className="card-main-cont1-card-body-title">
                {data.title}
              </Card.Title>
              <Card.Subtitle className=" card-main-cont1-card-body-subtitle mb-2 text-muted">
                <b>Short</b> by {data.author}/ {data.publishedAt}
              </Card.Subtitle>
              <Card.Text className="card-main-cont1-card-body-text">
                {data.description}
              </Card.Text>
              <div>
              Read more at 
              <Button
                className="card-main-cont1-card-body-button"
                href={data.url}
                target="_blank"
              >
                <b>{data.source.name}</b>
              </Button>
              </div>
            
            </Card.Body>
          </div>
        </Card>
      ))}
    </>
  );
}

export default Cards;
