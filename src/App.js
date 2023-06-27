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
          <Col sm="auto">
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
          <Row className="my-4" xs="6">
            <Col xs="1">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=OHX9gOMfrK4&ab_channel=BrianLagerstrom"
              >
                <h2 class="text-end">link</h2>
              </a>
            </Col>
            <Col xs="auto">
              <small class="text-muted">
                Rich sheet pan pizza with thick chewy crust.
              </small>
            </Col>
          </Row>
          <Row className="my-4" xs={2}>
            <p>
              <strong>Notes:</strong> use slightly less oil than suggested in
              the video to prevent sticking, otherwise the dough gets very oily.
            </p>
          </Row>
          <Row>
            <Col>
              <Image
                src={require("./images/pizzass.jpg")}
                alt=""
                rounded
                xs="auto"
              />
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
          <Row className="my-4" xs="6">
            <Col xs="1">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=jA95tUK2RZU&t=69s&ab_channel=BrianLagerstrom"
              >
                <h2 class="text-end">link</h2>
              </a>
            </Col>
            <Col xs="auto">
              <small class="text-muted">
                Hoppy and more delicious than it looks.
              </small>
            </Col>
          </Row>
          <Row className="my-4" xs={2}>
            <p>
              <strong>Notes:</strong> Be sure to score the dough before baking,
              and moisture/steam is required for a good crust and oven rise.
            </p>
          </Row>
          <Row>
            <Col>
              <Image
                src={require("./images/ciabattass.jpg")}
                alt=""
                rounded
                xs="auto"
              />
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
          <Row className="my-4" xs="6">
            <Col xs="1">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=f6kzypYDLRg&ab_channel=JoshuaWeissman"
              >
                <h2 class="text-end">link</h2>
              </a>
            </Col>
            <Col xs="auto">
              <small class="text-muted">Makes kitchen smell amazing.</small>
            </Col>
          </Row>
          <Row className="my-4" xs={2}>
            <p>
              <strong>Notes:</strong> When rolling out dough, make it as
              rectangular as possible. Recipe makes ~16 cinnamon rolls, only 12
              are pictured. Add zest from half of small lemon to glaze. Sub 7g
              vanilla extract for the vanilla bean. 14g more brown sugar instead
              of muscavado. Bake for 10 minutes covered with foil, remaining
              8-10 uncovered.
            </p>
          </Row>
          <Row xs="auto">
            <Col>
              <Image
                src={require("./images/cinnamonroll.jpg")}
                alt=""
                rounded
              />
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
