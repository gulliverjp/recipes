import { tableProps } from "./bsComponentProps";
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

export function pizzaTable() {
  return (
    <Table {...tableProps}>
      <thead>
        <tr>
          <th></th>
          <th>Serving Size (g)</th>
          <th>Weight Used (g)</th>
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
  );
}

export function ciabattaTable() {
  return (
    <Table striped="columns" bordered class="table" responsive>
      <thead>
        <tr class="tableizer-firstrow">
          <th>Lagerstrom Ciabatta (Whole Wheat)</th>
          <th>Serving Size (g)</th>
          <th>Weight Used (g)</th>
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
  );
}

export function cinnabonTable() {
  return (
    <Table striped="columns" bordered class="table" responsive>
      <thead>
        <tr>
          <th></th>
          <th>Serving Size (g)</th>
          <th>Weight Used (g)</th>
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
  );
}
