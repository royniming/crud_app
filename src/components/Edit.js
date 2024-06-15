import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    // Using useNavigation for redirecting to page
    let navToPage = useNavigate();

    // Find the item's index in memory
    let index = array
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);

    // Function for creating a post/entry
    const handleUpdate = (e) => {
        e.preventDefault(); // prevent reload
        if (name === "" || age === "") {
            alert("invalid input");
            return;
        }

        //update the item in memory
        let item = array[index];
        item.Name = name;
        item.Age = age;

        navToPage("/");
    };

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setAge(localStorage.getItem("age"));
    }, []);

    return (
        <div>
            <h5>Edit</h5>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Input of Name*/}
                <Form.Group as={Row} className="mb-1" controlId="formBasicName">
                    <Form.Label column sm={1} className="text-start fw-bold">
                        Name
                    </Form.Label>
                    <Col sm={11}>
                        <Form.Control
                            value={name}
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
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            placeholder="Age"
                            required
                        />
                    </Col>
                </Form.Group>

                {/* Button of Submit*/}
                <Button
                    onClick={(e) => handleUpdate(e)}
                    variant="primary"
                    type="submit"
                    size="sm"
                >
                    Update
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

export default Edit;
