import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'https://dummyjson.com/products'; // API URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" />
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error fetching products: {error}</Alert>;
  }

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Cards
              title={product.title}
              price={`Rs ${product.price}`} 
              imageUrl={product.thumbnail} 
              location={product.location || "Location not specified"}
              date={new Date(product.createdAt).toLocaleDateString() || "N/A"} 
              link={`https://dummyjson.com/products/${product.id}`} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
