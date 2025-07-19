"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export const QuoteDialog: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Get A Quote
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request A Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="quoteName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="quotePhone" className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="+44..." />
            </Form.Group>

            <Form.Group controlId="quoteService" className="mb-3">
              <Form.Label>Choose a Service</Form.Label>
              <Form.Select>
                <option>House Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Office Cleaning</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="quoteComment" className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
