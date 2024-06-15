import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // Using useNavigation for redirecting to page
    let navToPage = useNavigate();

    // Function for creating a post/entry
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent reload
        if (name === "" || age === "") {
            alert("invalid input");
            return;
        }

        let uid = uuid().slice(0, 8); //unique id
        let a = name,
            b = age;
        array.push({ id: uid, Name: a, Age: b });
        navToPage("/");
    };

    return (
        <div>
            <h5>Create</h5>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Input of Name*/}
                <Form.Group as={Row} className="mb-1" controlId="formBasicName">
                    <Form.Label column sm={1} className="text-start fw-bold">
                        Name
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter Name"
                            required
                        />
                    </Col>
                </Form.Group>

                {/* Input of Age*/}
                <Form.Group as={Row} className="mb-1" controlId="formBasicAge">
                    <Form.Label column sm={1} className="text-start fw-bold">
                        Age
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            placeholder="Age"
                            required
                        />
                    </Col>
                </Form.Group>

                {/* Button of Submit*/}
                <Button
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                    variant="primary"
                    type="submit"
                    size="sm"
                >
                    Submit
                </Button>

                {/* Link of back to home page*/}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="sm">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Create;
