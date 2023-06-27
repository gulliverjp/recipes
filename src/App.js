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

import { imgs } from "./imgDeclarations.js";
import { tableProps } from "./bsComponentProps";
import { ciabattaTable, pizzaTable, cinnabonTable } from "./tables";

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
            <Col class="text-center" xs="fluid">
              <small class="text-muted">
                Rich sheet pan pizza with thick chewy crust.
              </small>
            </Col>
          </Row>
          <Row xs="fluid">
            <Col className="text-center">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=OHX9gOMfrK4&ab_channel=BrianLagerstrom"
              >
                <h2>link</h2>
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
            <Col xs={12}>{pizzaTable()}</Col>
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
            <Col className="text-center">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=jA95tUK2RZU&t=69s&ab_channel=BrianLagerstrom"
              >
                <h2>link</h2>
              </a>
            </Col>
          </Row>
          <Row>
            <p className="my-1 text-center">
              <strong>Notes:</strong> Be sure to score the dough before baking,
              and moisture/steam is required for a good crust and oven rise.
            </p>
          </Row>
          <Row>
            <Col xs={12}>{ciabattaTable}</Col>
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
            <Col className="text-center">
              <a
                target="_blank"
                class="link-underline-opacity-0 link-info"
                href="https://www.youtube.com/watch?v=f6kzypYDLRg&ab_channel=JoshuaWeissman"
              >
                <h2>link</h2>
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
            <Col xs={12}>{cinnabonTable()}</Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
