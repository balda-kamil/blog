import { Card } from "react-bootstrap";
import Image from 'next/image'

const CardListItem = () => {

  const SRC = 'https://via.placeholder.com/150'

  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            loader={() => SRC}
            src={SRC}
            className="rounded-circle"
            height={50}
            width={50}
            alt="avatar"
            layout="fixed"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              Placeholder Author
            </Card.Title>
            <Card.Text className="card-date">Placeholder Date</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">Placeholder Title</Card.Title>
          <Card.Text>Placehodler Subtitle</Card.Text>
        </Card.Body>
      </div>
      <a href="#" className="card-button">
        Read More
      </a>
    </Card>
  );
};

export default CardListItem