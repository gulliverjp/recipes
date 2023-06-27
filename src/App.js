import "./App.scss";
import { useState } from "react";
import {
  Alert,
  Button,
  Stack,
  Row,
  Col,
  Container,
  Accordion,
  Image,
  Modal,
  Table,
} from "react-bootstrap";
import "./custom.scss";

import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import ciabatta from "./images/ciabatta.jpg";
import unfrosted from "./images/unfrosted_cr.JPEG";
import frosted from "./images/frosted_cr.JPEG";
import unfrostedcrtd from "./images/unfrosted_cr_td.JPEG";
import frostedcrtd from "./images/frosted_cr_td.JPEG";

const imgs = [
  { source: pizza1, label: "pizza", id: "p1" },
  { source: pizza2, label: "pizza", id: "p2" },
  { source: pizza3, label: "pizza", id: "p3" },
  { source: ciabatta, label: "ciabatta", id: "c1" },
  { source: unfrosted, label: "cinnamon rolls", id: "cr1" },
  { source: frosted, label: "cinnamon rolls", id: "cr2" },
  { source: unfrostedcrtd, label: "cinnamon rolls", id: "cr3" },
  { source: frostedcrtd, label: "cinnamon rolls", id: "cr4" },
];

function App() {
  return (
    <Container>
      <Row>
        <div class="p-3 center-block text-center">
          <h1>Jon's Documented Recipes</h1>
        </div>
      </Row>
      <AccordionWrapper />
    </Container>
  );
}

function AccordionWrapper() {
  const [show, setShow] = useState(undefined);

  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);

  function CreateImageGallery(label) {
    let imageGallery = [];
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].label === label) {
        imageGallery.push(
          <Col xs="auto">
            <Image
              src={imgs[i].source}
              alt=""
              rounded
              width={200}
              onClick={() => handleShow(imgs[i].id)}
            />
            <Modal
              show={show === imgs[i].id}
              onHide={() => setShow(false)}
              size="xl"
            >
              <Modal.Body>
                <Image src={imgs[i].source} alt="" fluid />
              </Modal.Body>
            </Modal>
          </Col>
        );
      }
    }
    return imageGallery;
  }

  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Brian Lagerstrom Sheet Pan Pizza 2.0</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Row>{CreateImageGallery("pizza")}</Row>
          <Row className="my-3">
            <Col xs="fluid">
              <small class="text-muted">
                Rich sheet pan pizza with thick chewy crust.
              </small>
            </Col>
          </Row>
          <Row xs="fluid">
            <Col>
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=OHX9gOMfrK4&ab_channel=BrianLagerstrom"
              >
                <h2 class="text-left">link</h2>
              </a>
            </Col>
          </Row>
          <Row className="my-1 text-center">
            <p>
              <strong>Notes:</strong> use slightly less oil than suggested in
              the video to prevent sticking, otherwise the dough gets very oily.
            </p>
          </Row>
          <Row>
            <Col>
              <Table striped="columns" bordered class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Serving Size</th>
                    <th>Weight Used</th>
                    <th># Servings</th>
                    <th>Cal/Serving</th>
                    <th>Cal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Sauce</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Crushed Tomatoes</td>
                    <td>61</td>
                    <td>794</td>
                    <td>13.01639344</td>
                    <td>20</td>
                    <td>171.6</td>
                  </tr>
                  <tr>
                    <td>sugar</td>
                    <td>13</td>
                    <td>10</td>
                    <td>0.7692307692</td>
                    <td>49</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td>tomato paste</td>
                    <td>33</td>
                    <td>50</td>
                    <td>1.515151515</td>
                    <td>35</td>
                    <td>34.98</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>Dough</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>yeast</td>
                    <td>14</td>
                    <td>7</td>
                    <td>0.5</td>
                    <td>103</td>
                    <td>52</td>
                  </tr>
                  <tr>
                    <td>Bread Flour</td>
                    <td>30</td>
                    <td>425</td>
                    <td>14.16666667</td>
                    <td>110</td>
                    <td>1558</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>Toppings</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Full Fat Mozz</td>
                    <td>30</td>
                    <td>344</td>
                    <td>11.46666667</td>
                    <td>90</td>
                    <td>1032</td>
                  </tr>
                  <tr>
                    <td>Fresh Mozz</td>
                    <td>28</td>
                    <td>112</td>
                    <td>4</td>
                    <td>70</td>
                    <td>280</td>
                  </tr>
                  <tr>
                    <td>Pepperoni</td>
                    <td>28</td>
                    <td>112</td>
                    <td>4</td>
                    <td>120</td>
                    <td>480</td>
                  </tr>
                  <tr>
                    <td>Parmesan</td>
                    <td>28</td>
                    <td>42</td>
                    <td>1.5</td>
                    <td>110</td>
                    <td>165</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>oil</td>
                    <td>12</td>
                    <td>72</td>
                    <td>6</td>
                    <td>130</td>
                    <td>780</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <th>Total </th>
                    <th>Per Slice (12)</th>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>4592</td>
                    <td>383</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>Brian Lagerstrom Ciabatta (Whole Wheat)</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Row>{CreateImageGallery("ciabatta")}</Row>
          <Row className="my-3" xs="auto">
            <Col xs="fluid">
              <small class="text-muted">
                Hoppy and more delicious than it looks.
              </small>
            </Col>
          </Row>
          <Row>
            <Col xs="fluid">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=jA95tUK2RZU&t=69s&ab_channel=BrianLagerstrom"
              >
                <h2 class="text-left">link</h2>
              </a>
            </Col>
          </Row>
          <Row className="my-4">
            <p className="my-1 text-center">
              <strong>Notes:</strong> Be sure to score the dough before baking,
              and moisture/steam is required for a good crust and oven rise.
            </p>
          </Row>
          <Row>
            <Col>
              <Table striped="columns" bordered class="table">
                <thead>
                  <tr class="tableizer-firstrow">
                    <th>Lagerstrom Ciabatta (Whole Wheat)</th>
                    <th>Serving Size</th>
                    <th>Weight Used</th>
                    <th># Servings</th>
                    <th>Cal/Serving</th>
                    <th>Cal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Whole Wheat Flour</td>
                    <td>38</td>
                    <td>495</td>
                    <td>13.02631579</td>
                    <td>140</td>
                    <td>1824</td>
                  </tr>
                  <tr>
                    <td>Oil</td>
                    <td>12</td>
                    <td>6</td>
                    <td>0.5</td>
                    <td>130</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <th>Baked Weight</th>
                    <th>Total Cal</th>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>742</td>
                    <td>1889</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <th>Slice Weight</th>
                    <th>Slice Cal</th>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>30</td>
                    <td>76</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong>Joshua Weissman Cinnamon Rolls</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Row>{CreateImageGallery("cinnamon rolls")}</Row>
          <Row className="my-3" xs="auto">
            <Col xs="auto">
              <small class="text-muted">Makes kitchen smell amazing.</small>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=f6kzypYDLRg&ab_channel=JoshuaWeissman"
              >
                <h2 class="text-left">link</h2>
              </a>
            </Col>
          </Row>
          <Row className="my-1 text-center" xs="auto">
            <p>
              <strong>Notes:</strong> When rolling out dough, make it as
              rectangular as possible. Recipe makes ~16 cinnamon rolls, only 12
              are pictured. Add zest from half of small lemon to glaze. Sub 7g
              vanilla extract for the vanilla bean. 14g more brown sugar instead
              of muscavado. Bake for 10 minutes covered with foil, remaining
              8-10 uncovered.
            </p>
          </Row>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Serving Size</th>
                    <th>Weight Used</th>
                    <th># Servings</th>
                    <th>Cal/Serving</th>
                    <th>Cal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Dough</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>All Purpose Flour</td>
                    <td>30</td>
                    <td>580</td>
                    <td>19.33333333</td>
                    <td>110</td>
                    <td>2127</td>
                  </tr>
                  <tr>
                    <td>granulated sugar</td>
                    <td>8</td>
                    <td>107</td>
                    <td>13.375</td>
                    <td>30</td>
                    <td>401</td>
                  </tr>
                  <tr>
                    <td>butter</td>
                    <td>14</td>
                    <td>84</td>
                    <td>6</td>
                    <td>100</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>whole milk</td>
                    <td>244</td>
                    <td>235</td>
                    <td>0.9631147541</td>
                    <td>149</td>
                    <td>144</td>
                  </tr>
                  <tr>
                    <td>eggs</td>
                    <td>1</td>
                    <td>3</td>
                    <td>3</td>
                    <td>60</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>Filling</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Brown sugar</td>
                    <td>3</td>
                    <td>239</td>
                    <td>79.66666667</td>
                    <td>11</td>
                    <td>876</td>
                  </tr>
                  <tr>
                    <td>butter</td>
                    <td>14</td>
                    <td>84</td>
                    <td>6</td>
                    <td>100</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>Vanilla Cream Cheese Glaze</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>cream cheese</td>
                    <td>29</td>
                    <td>115</td>
                    <td>3.965517241</td>
                    <td>102</td>
                    <td>404</td>
                  </tr>
                  <tr>
                    <td>powdered sugar</td>
                    <td>120</td>
                    <td>90</td>
                    <td>0.75</td>
                    <td>467</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>whole milk</td>
                    <td>224</td>
                    <td>45</td>
                    <td>0.2008928571</td>
                    <td>149</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <th>Total </th>
                    <th>Per Slice</th>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>5712</td>
                    <td>357</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
function RecipeCollapsible() {}
function ImageGallery() {}
function Images() {}
function Description() {}

export default App;
