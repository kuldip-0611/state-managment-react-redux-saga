import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ item }) {
    return (
        <div className='col col-md-12 col-lg-3 col-xl-2 m-3'>
            <Card style={{ 'height': '36rem' }} >
                <Card.Img style={{ height: '300px', objectFit: 'contain' }} variant="top" src={item && item.thumbnail} />
                <Card.Body>
                    <Card.Title>{item && item.title}</Card.Title>
                    <Card.Text>
                        category : {item && item.category}
                    </Card.Text>
                    <Card.Text>
                        price : {item && item.price}
                    </Card.Text>
                    <Button variant="primary">BUY NOW</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;