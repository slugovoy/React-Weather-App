import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PopoverContent from "react-bootstrap/PopoverContent";
import PopoverTitle from "react-bootstrap/PopoverTitle";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Instructions</Popover.Title>
    <Popover.Content>
      <ul>
          <li>Type city name into search box</li>
          <li>Press Return/Enter key</li>
          <li>If you want to specify country, type city name and country, separated by comma.</li>
          <li>Depends on weather condition, background image will change</li>
      </ul>
    </Popover.Content>
  </Popover>
);

const Instructions = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button className="btn" variant="success" size="lg">
      Instructions
    </Button>
  </OverlayTrigger>
);

export default Instructions;
