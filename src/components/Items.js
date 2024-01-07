import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from '../assets/news.jpg';
import "./items.css";

const Items = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  author,
  source,
}) => {
  let localTime = new Date(publishedAt).toLocaleTimeString();
  let localDate = new Date(publishedAt).toLocaleDateString();

  return (
    <Card className="news-card">
      <Card.Header className="card-header">{source}</Card.Header>
      <Card.Img
        className="news-img img-fluid"
        variant="top"
        src={urlToImage ? urlToImage : img}
        alt="image from source"
      />
      <Card.Body>
        <Card.Title><b>{title}</b></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {author ? `Author: ${author}` : "Author: Unknown"}
        </Card.Subtitle>
        <Card.Text className="text-start mt-3">{description}</Card.Text>
        <a href={url} target="_blank" rel="noreferrer">
          <Button
            className="mt-3"
            onClick={() => {
              window.location.href = url;
            }}
            variant="dark"
          >
            <b>Read More</b>
          </Button>
        </a>
      </Card.Body>

      <Card.Footer className="bg-success card-footer text-white">
        Published on: {localDate} at {localTime}
      </Card.Footer>
    </Card>
  );
};

export default Items;
