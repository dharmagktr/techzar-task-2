import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Form from 'react-bootstrap/Form';



function Products() {

  const [allItems, setAllItems] = useState([]);
  const [items, setItems] = useState(allItems);
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    axios.get("https://6710cf6aa85f4164ef2f68d1.mockapi.io/seelan")
      .then((response) => {
        console.log(response.data);
        setAllItems(response.data);
        setItems(response.data);
      })
    console.log(items);
  }, [])

  const FilterChange = () => {
    console.log("filterChange");

    const value = e.target.value;
    setFilter(value);
    if (value == all) {
      setItems(allItems)
    } else {
      FilterFunction(value)
    }
  }

  const FilterFunction = (params) => {
    let FiltersData = allItems.filter(
      (b) => b.categories == params
    );
    setItems(FiltersData);
  }

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    if (value == "all") {
      setItems(allItems)
    } else {
      NewFunction(value)
    }
  }


  const NewFunction = (params) => {
    let FilterData = allItems.filter(
      (a) => a.modal == params
    );
    setItems(FilterData);
  }

  return (
    <div>
      <div>
        <h1 className='text-center display-3 fw-bold text-success'>Mobile <span className='text-primary'>Shopping</span></h1>
        <div className='row my-5 px-5'>
          <div className='col-md-3'>
            <div className='px-3'>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col lg={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="all">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="apple"
                          name="filter"
                          value="apple"
                          checked={filter == "apple"}
                          onChange={FilterChange}>Apple</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="oppo">Oppo</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="vivo">Vivo</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={6}>
                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault0"
                            name="filter"
                            value="all"
                            checked={filter === "all"}
                            onChange={handleFilterChange}
                          />
                          <label class="form-check-label" for="flexCheckDefault0">
                            All
                          </label>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="apple">
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="filter"
                            value="iphone-15"
                            checked={filter === "iphone-15"}
                            onChange={handleFilterChange}
                          />
                          <label class="form-check-label" for="flexCheckDefault">
                            iPhone 15
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault1"
                            name="filter"
                            value="iphone-1"
                            checked={filter === "iphone-1"}
                            onChange={handleFilterChange}
                          />

                          <label class="form-check-label" for="flexCheckDefault1">
                            iPhone 16 Pro
                          </label>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="oppo">
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"

                            id="flexCheckDefault2"
                            name="filter"
                            value="oppo-a-17"
                            checked={filter === "oppo-a-17"}
                            onChange={handleFilterChange}
                          />
                          <label class="form-check-label" for="flexCheckDefault2">
                            Oppo 15A
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault3"
                            name="filter"
                            value="oppo-a55"
                            checked={filter === "oppo-a55"}
                            onChange={handleFilterChange}
                          />
                          <label class="form-check-label" for="flexCheckDefault3">
                            Oppo 55A
                          </label>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="vivo">
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault4"
                            name="filter"
                            value="vivo-v-9"
                            checked={filter === "vivo-v-9"}
                            onChange={handleFilterChange}
                          />

                          <label class="form-check-label" for="flexCheckDefault4">
                            Vivo v-9
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault5"
                            name="filter"
                            value="vivo-y"
                            checked={filter === "vivo-y"}
                            onChange={handleFilterChange}
                          />
                          <label class="form-check-label" for="flexCheckDefault5">
                            Vivo x-100
                          </label>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
          <div className='col-md-9'>
            <div className='container mt-4 mt-md-0'>
              <div className='row'>
                {items.map((mapData) =>
                  <div className='col-6 col-md-4'>
                    <div className='card shadow py-2 m-2' style={{ width: "100%" }}>
                      <div className='d-flex justify-content-center'>
                        <div>
                          <img height="100" width="100" src={mapData.imageData} />
                          <div className='mt-4 '>Brand : <span className='fw-bold'>{mapData.categories}</span> </div>
                          <div className='mt-2' >Modal : <span className='fw-bold'>{mapData.modal}</span></div>
                          <div className='mt-2'>Price : <span className='fw-bold'>{mapData.price}</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products