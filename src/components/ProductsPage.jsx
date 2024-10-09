import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const ProductList = ({ apiUrl }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))  
      .catch((error) => console.error('Error fetching products:', error));
  }, [apiUrl]);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description.substring(0, 100)}...</Card.Text>
                <Card.Text><strong>${product.price}</strong></Card.Text>
                <Card.Text className="text-muted">
                  Stock: {product.stock} - {product.availabilityStatus}
                </Card.Text>
                <Card.Text className="text-warning">
                  Rating: {product.rating} ({product.discountPercentage}% off)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ProductsPage = () => {
  const apiUrl = 'https://dummyjson.com/products'; // API URL

  return (
    <div>
      <h1>Products</h1>
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default ProductsPage;
