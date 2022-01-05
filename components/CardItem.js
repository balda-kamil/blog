import { Card } from "react-bootstrap";
import Image from 'next/image'

const CardItem = ({title, subtitle}) => {

  const SRC = 'https://via.placeholder.com/150'
  return (
    <Card className={`fj-card`}>
    <div className="card-body-wrapper">
      <Card.Header className="d-flex flex-row">
        <Image
          loader={() => SRC}
          src={SRC}
          className="rounded-circle"
          height={50}
          width={50}
          alt="avatar"
          />
        <div>
          <Card.Title className="font-weight-bold mb-1">
            Placeholder Author
          </Card.Title>
          <Card.Text className="card-date">Placeholder Date</Card.Text>
        </div>
      </Card.Header>
      <div className="view overlay">
        <Card.Img src="https://via.placeholder.com/250" alt="Card image cap" />
      </div>
      <Card.Body>
        <Card.Title className="card-main-title">{title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
    </div>
    <a className="card-button">Read More</a>
  </Card>
);
}

export default CardItem