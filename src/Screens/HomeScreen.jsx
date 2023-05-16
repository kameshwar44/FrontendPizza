import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../Components/Pizza";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  console.log(pizzas);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <Row>
          {pizzas.map((pizza) => (
            <Col md={4} key={pizza.name}>
              <Pizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomeScreen;
