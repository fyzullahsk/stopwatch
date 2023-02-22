import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Stopwatch</h1>
      <Row>
        <Col>
          <h2 className="display-2">{formatTime(time)}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {isRunning ? (
            <Button variant="danger" className="mx-2" onClick={stopStopwatch}>
              Stop
            </Button>
          ) : (
            <Button variant="success" className="mx-2" onClick={startStopwatch}>
              Start
            </Button>
          )}
          {!isRunning && (
            <Button variant="warning" className="mx-2" onClick={resetStopwatch}>
              Reset
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Stopwatch;
