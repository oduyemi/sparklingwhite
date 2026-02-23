"use client";
import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";

export const QuoteDialog: React.FC = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    setStatus(null);
    setErrorMessage("");
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkovpkel", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="+44..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Choose a Service</Form.Label>
              <Form.Select name="service" required>
                <option value="">Select a service</option>
                <option>House Cleaning</option>
                <option>Apartment Cleaning</option>
                <option>Office Cleaning</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Write your message..."
                required
              />
            </Form.Group>

            {status === "success" && (
              <Alert variant="success">
                ✅ Your quote request has been sent successfully!
              </Alert>
            )}

            {status === "error" && (
              <Alert variant="danger">
                ❌ {errorMessage}
              </Alert>
            )}

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" animation="border" className="me-2" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};