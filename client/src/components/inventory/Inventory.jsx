import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState,useEffect} from "react";
import TableCow from "./TableCow";
import InventoryTable from "./InventoryTable";

const Inventory = () => {
  const [userData, setUserData] = useState("");
  const [milkd, setMilkd] = useState({
    cname: "",
    cphone: "",
    milk: "",
    liter: "",

  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMilkd({ ...milkd, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const { cname, cphone, milk, liter } = milkd;


    async function dummyFunc() {
      const res = await fetch("/inventoryTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cname,
          cphone,
          milk,
          liter,
        }),
   
      });
      console.log("res")
      const data = await res.json();
      // console.log(data)
      if (data.status === 422 || !data) {
        window.alert("Invalid Insertion");
        console.log("Invalid Insertion");
      } else {
        window.alert("Insertion Success");
        console.log("Insertion Success");
      }
    }
    dummyFunc();
    //    console.log("Dummy");

  };

  return (
    <React.Fragment>
      {/* <InventoryTable/> */}
      <Row className="align-items-center">
        <Col>
          <Form method="POST" >
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="text" name="cname" value={milkd.name} onChange={handleInputs} placeholder="Enter name" size="lg" />
              <Form.Control type="String" name="cphone" value={milkd.cphone} onChange={handleInputs} placeholder="Enter Number" size="lg" />
            </Form.Group>
          </Form>
        </Col>
        <Col className="mb-3" >
          <Form.Control size="lg" name="liter" defaultValue="250" as="select" aria-label="Default select example"
            value={milkd.liter} onChange={handleInputs} >
            <option>Select Liter</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="750">750</option>
            <option value="1000">1000</option>

          </Form.Control>
          <Form.Control size="lg" name="milk" as="select" aria-label="Default select example"
            value={milkd.milk} onChange={handleInputs} >
            <option>Select Milk</option>
            <option value="cow">cow</option>
            <option value="buffalo">buffalo</option>
          </Form.Control>
        </Col>
        <Col className="mb-2" >
          <Button onClick={postData} className="mb-2">
            Submit
          </Button>
        </Col>
      </Row>

      <div className="container">
        <div className="row">
          <div className="col"><TableCow /></div>
          <div className="col"><InventoryTable /></div>
        </div>
      </div>

    </React.Fragment>
  );

};


export default Inventory;