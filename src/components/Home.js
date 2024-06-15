import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";

import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    // For link to edit page
    const setID = (id, name, age) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
    };

    // Using useNavigation for redirecting to page
    let navToPage = useNavigate();

    // Delete Operation
    const handleDelete = (id) => {
        // Find the item's index in memory
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);
        let item = array[index];

        // confirm of window
        const deleteConfirmed = window.confirm(
            "Are you sure you want to delete?\n-Name:" +
                item.Name +
                "\n-Age:" +
                item.Age
        );
        if (!deleteConfirmed) {
            return;
        }

        //delete one entry with index in array
        array.splice(index, 1);

        navToPage("/");
    };

    return (
        <div style={{ margin: "5rem" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th hidden>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td hidden>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>
                                    {/* Button for Update*/}
                                    <Link to={"/edit"}>
                                        <Button
                                            onClick={(e) => {
                                                setID(
                                                    item.id,
                                                    item.Name,
                                                    item.Age
                                                );
                                            }}
                                            variant="secondary"
                                            size="sm"
                                            className="me-1"
                                        >
                                            Update
                                        </Button>
                                    </Link>
                                    {/* Button for Delete*/}
                                    <Button
                                        onClick={(e) => handleDelete(item.id)}
                                        variant="danger"
                                        size="sm"
                                        className="me-1"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            {/* Link to Create page */}
            <Link className="d-grid gap-2" to="/create">
                {/* Button of Create*/}
                <Button variant="warning" size="sm">
                    Create
                </Button>
            </Link>
        </div>
    );
};

export default Home;
