import { Form, Button } from "react-bootstrap/";

export function SearchBar() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search for a restaurant..."
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-dark">Search</Button>
    </Form>
  );
}
