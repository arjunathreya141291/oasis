import "./App.css";
import Banner from "./banner.png";
import Featured from "./bodea-featured.png";
import Flag from "./Flag.png";
import Footer from "./footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Pop from "./Pop";

import {
  Container,
  Nav,
  Breadcrumb,
  Button,
  Badge,
  Dropdown,
  OverlayTrigger,
  Popover,
  FormControl,
  InputGroup,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import { SearchTermContext, SearchTermProvider } from "./context/searchterm";

function App() {
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Search...</Popover.Header> */}
      <Popover.Body>
        <Pop />
        {/* <Pop /> */}
      </Popover.Body>
    </Popover>
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <div className="firstBar">
        <div className="firstBar-container">
          <div className="shipping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.203"
              height="16"
              viewBox="0 0 16.203 16"
            >
              <g
                id="icon_-_ship"
                data-name="icon - ship"
                transform="translate(-15)"
              >
                <rect
                  id="Canvas"
                  width="16"
                  height="16"
                  transform="translate(15)"
                  fill="rgba(255,19,220,0)"
                />
                <g id="ship" transform="translate(15.802 3.074)">
                  <path
                    id="Stroke-4"
                    d="M21.844,27.554a1.6,1.6,0,0,1-1.6,1.6,1.6,1.6,0,1,1,0-3.207A1.6,1.6,0,0,1,21.844,27.554Z"
                    transform="translate(-16.198 -19.268)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-6"
                    d="M29.757,27.554a1.6,1.6,0,0,1-1.6,1.6,1.6,1.6,0,1,1,0-3.207A1.6,1.6,0,0,1,29.757,27.554Z"
                    transform="translate(-17.061 -19.268)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-8"
                    d="M20.377,20.587H15.9"
                    transform="translate(-15.9 -17.981)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-12"
                    d="M18.359,24.825H16.088"
                    transform="translate(-15.921 -19.449)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-14"
                    d="M22.237,27.75H26.08"
                    transform="translate(-16.591 -19.464)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-16"
                    d="M16.463,27.75H18.4"
                    transform="translate(-15.961 -19.464)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-1"
                    d="M16.538,18.45h8.887v4.243h4.21l1.236,1.2v3.441H28.833"
                    transform="translate(-15.97 -18.45)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Stroke-3"
                    d="M26.475,19.2h2.673l1.437,3.408"
                    transform="translate(-17.053 -18.532)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>{" "}
            &nbsp; Free shipping worldwide over $150 &nbsp;| &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                id="icon_-_ship"
                data-name="icon - ship"
                transform="translate(0.024)"
              >
                <rect
                  id="Canvas"
                  width="16"
                  height="16"
                  transform="translate(-0.024)"
                  fill="rgba(255,19,220,0)"
                />
                <g id="return" transform="translate(3.328 3.352)">
                  <path
                    id="Path_38191"
                    data-name="Path 38191"
                    d="M899.935,1383.662l-2-2,2-2"
                    transform="translate(-897.938 -1379.668)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Path_38192"
                    data-name="Path 38192"
                    d="M897.938,1382.668h5.325a3.994,3.994,0,1,1,0,7.988h-5.325"
                    transform="translate(-897.938 -1380.671)"
                    fill="none"
                    stroke="#353839"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>
            &nbsp; Free and easy returns
          </div>
          <div className="store">
            Contact &nbsp; | &nbsp; Select store{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g id="chevron" transform="translate(0 0.001)">
                <g id="icon-Chevron">
                  <rect
                    id="Frame"
                    width="16"
                    height="16"
                    transform="translate(0 -0.001)"
                    fill="#f0f"
                    opacity="0"
                  />
                  <g
                    id="Group_141210"
                    data-name="Group 141210"
                    transform="translate(4.96 6.552)"
                  >
                    <line
                      id="Line_633"
                      data-name="Line 633"
                      y2="4.237"
                      transform="translate(0 0.001) rotate(-45)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_634"
                      data-name="Line 634"
                      x1="4.237"
                      transform="translate(2.996 2.996) rotate(-45)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
            &nbsp; | &nbsp; English, USD &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                id="Group_141208"
                data-name="Group 141208"
                transform="translate(0)"
              >
                <circle
                  id="Ellipse_289"
                  data-name="Ellipse 289"
                  cx="8"
                  cy="8"
                  r="8"
                  transform="translate(0)"
                  fill="#f0f0f0"
                />
                <g
                  id="Group_141207"
                  data-name="Group 141207"
                  transform="translate(0.27 1.927)"
                >
                  <path
                    id="Path_38317"
                    data-name="Path 38317"
                    d="M244.87,191.262h8.179a7.846,7.846,0,0,0-.27-2.045H244.87Z"
                    transform="translate(-237.643 -185.128)"
                    fill="#d80027"
                  />
                  <path
                    id="Path_38318"
                    data-name="Path 38318"
                    d="M244.87,57.7H251.9a7.879,7.879,0,0,0-1.809-2.045h-5.22Z"
                    transform="translate(-237.643 -55.652)"
                    fill="#d80027"
                  />
                  <path
                    id="Path_38319"
                    data-name="Path 38319"
                    d="M101.523,458.052a7.8,7.8,0,0,0,4.879-1.7H96.644A7.8,7.8,0,0,0,101.523,458.052Z"
                    transform="translate(-93.955 -444.08)"
                    fill="#d80027"
                  />
                  <path
                    id="Path_38320"
                    data-name="Path 38320"
                    d="M9.7,324.827H23.074a7.791,7.791,0,0,0,.88-2.045H8.819A7.791,7.791,0,0,0,9.7,324.827Z"
                    transform="translate(-8.819 -314.603)"
                    fill="#d80027"
                  />
                </g>
                <path
                  id="Path_38321"
                  data-name="Path 38321"
                  d="M3.631,1.224h.714l-.664.483.254.781L3.27,2l-.664.483.219-.675A7.881,7.881,0,0,0,1.3,3.507h.229l-.423.307q-.1.165-.19.335l.2.622L.746,4.5q-.14.3-.256.608l.222.685h.821l-.664.483.254.781L.459,6.571l-.4.289A7.913,7.913,0,0,0,0,7.838H7.838V0A7.8,7.8,0,0,0,3.631,1.224Zm.3,5.83L3.27,6.571l-.664.483.254-.781L2.2,5.79h.821l.254-.781.254.781h.821l-.664.483ZM3.681,3.99l.254.781L3.27,4.288l-.664.483.254-.781L2.2,3.507h.821l.254-.781.254.781h.821ZM6.746,7.054l-.664-.483-.664.483.254-.781L5.006,5.79h.821l.254-.781.254.781h.821l-.664.483ZM6.492,3.99l.254.781-.664-.483-.664.483.254-.781-.664-.483h.821l.254-.781.254.781h.821Zm0-2.283.254.781L6.081,2l-.664.483.254-.781-.664-.483h.821L6.081.443l.254.781h.821Z"
                  transform="translate(0 0.223)"
                  fill="#0052b4"
                />
              </g>
            </svg>
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g id="chevron" transform="translate(0 0.001)">
                <g id="icon-Chevron">
                  <rect
                    id="Frame"
                    width="16"
                    height="16"
                    transform="translate(0 -0.001)"
                    fill="#f0f"
                    opacity="0"
                  />
                  <g
                    id="Group_141210"
                    data-name="Group 141210"
                    transform="translate(4.96 6.552)"
                  >
                    <line
                      id="Line_633"
                      data-name="Line 633"
                      y2="4.237"
                      transform="translate(0 0.001) rotate(-45)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="Line_634"
                      data-name="Line 634"
                      x1="4.237"
                      transform="translate(2.996 2.996) rotate(-45)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="secondBar">
        <div className="secondBar-container">
          <div className="logo">
            <svg
              id="BodeaLogo"
              xmlns="http://www.w3.org/2000/svg"
              //width="124.642"
              //height="37.36"
              viewBox="0 0 150.642 100.36"
            >
              <g
                id="Group_171692"
                data-name="Group 171692"
                transform="translate(0 10.419)"
              >
                <path
                  id="Path_101111"
                  data-name="Path 101111"
                  d="M196,299.654a1.7,1.7,0,0,1,1.705-1.7h4.288a6.771,6.771,0,0,1,2.495.444,5.77,5.77,0,0,1,1.956,1.248,5.646,5.646,0,0,1,1.285,1.947,6.727,6.727,0,0,1,.464,2.542v2.174a4.266,4.266,0,0,1-.274,1.531,5.293,5.293,0,0,1-.7,1.285,4.175,4.175,0,0,1-.955.936,2.472,2.472,0,0,1-1.058.444,4.087,4.087,0,0,1,2.164,1.332,5.161,5.161,0,0,1,.907,1.578,6.669,6.669,0,0,1,.368,2.362v2.306a6.17,6.17,0,0,1-.483,2.477,5.653,5.653,0,0,1-1.314,1.9,5.886,5.886,0,0,1-1.928,1.21,6.315,6.315,0,0,1-2.306.425H197.3a1.3,1.3,0,0,1-1.3-1.3S196,305.287,196,299.654Zm3.347,1.565v8.2h2.382a4.2,4.2,0,0,0,.9-.117,3.092,3.092,0,0,0,1-.428,2.741,2.741,0,0,0,.823-.847,2.561,2.561,0,0,0,.34-1.392v-2.221A3.166,3.166,0,0,0,203.96,302a3,3,0,0,0-2.136-.779Zm0,11.638v8h2.892a2.855,2.855,0,0,0,1.267-.26,2.659,2.659,0,0,0,.879-.676,2.854,2.854,0,0,0,.52-.909,2.943,2.943,0,0,0,.171-.962v-2.078a3.489,3.489,0,0,0-.265-1.438,2.763,2.763,0,0,0-.69-.962,2.717,2.717,0,0,0-.964-.546,3.524,3.524,0,0,0-1.088-.173Z"
                  transform="translate(-196 -297.55)"
                  fill="#353839"
                />
                <path
                  id="Path_101112"
                  data-name="Path 101112"
                  d="M316.79,301.03a6.073,6.073,0,0,1,.52-2.542,5.949,5.949,0,0,1,1.409-1.956,6.358,6.358,0,0,1,2.07-1.257,7.071,7.071,0,0,1,2.505-.444,6.994,6.994,0,0,1,2.486.444,6.473,6.473,0,0,1,2.08,1.257,5.909,5.909,0,0,1,1.417,1.956,6.076,6.076,0,0,1,.52,2.542v14.557a5.95,5.95,0,0,1-1.947,4.489,6.427,6.427,0,0,1-2.07,1.248,7.077,7.077,0,0,1-2.505.444,6.859,6.859,0,0,1-2.495-.453,6.486,6.486,0,0,1-2.061-1.267,5.927,5.927,0,0,1-1.928-4.461Zm3.572,14.405a3.291,3.291,0,0,0,.218,1.191,3.093,3.093,0,0,0,.6.983,2.8,2.8,0,0,0,2.1.908,3.02,3.02,0,0,0,1.21-.237,2.819,2.819,0,0,0,.936-.643,2.928,2.928,0,0,0,.6-.955,3.146,3.146,0,0,0,.218-1.172V301.2a3.371,3.371,0,0,0-.218-1.2,3.092,3.092,0,0,0-.6-1,2.923,2.923,0,0,0-.926-.68,2.734,2.734,0,0,0-1.182-.255,2.784,2.784,0,0,0-1.2.255,2.929,2.929,0,0,0-.926.68,3.092,3.092,0,0,0-.6,1,3.371,3.371,0,0,0-.218,1.2v14.234Z"
                  transform="translate(-301.407 -294.828)"
                  fill="#353839"
                />
                <path
                  id="Path_101113"
                  data-name="Path 101113"
                  d="M445.927,299.708a1.767,1.767,0,0,1,1.766-1.763l4.4-.005a7.43,7.43,0,0,1,2.552.464,5.861,5.861,0,0,1,2.022,1.267,5.659,5.659,0,0,1,1.323,2.013,7.235,7.235,0,0,1,.472,2.685v13.253a7.207,7.207,0,0,1-.483,2.713,5.846,5.846,0,0,1-1.332,2.033,5.745,5.745,0,0,1-2.033,1.276,7.21,7.21,0,0,1-2.561.444h-4.752a1.376,1.376,0,0,1-1.378-1.373C445.927,322.655,445.913,304.713,445.927,299.708Zm3.506,21.145h2.416a3.069,3.069,0,0,0,1.267-.255,2.835,2.835,0,0,0,.964-.7,3.025,3.025,0,0,0,.6-1.049,3.983,3.983,0,0,0,.208-1.3V304.481a3.358,3.358,0,0,0-.793-2.382,2.948,2.948,0,0,0-2.174-.889h-2.492Z"
                  transform="translate(-414.092 -297.541)"
                  fill="#353839"
                />
                <path
                  id="Path_101114"
                  data-name="Path 101114"
                  d="M572.81,299.331a1.425,1.425,0,0,1,1.425-1.391h6.878a.507.507,0,0,1,.359.141.613.613,0,0,1,.151.464v2.08a.579.579,0,0,1-.151.453.529.529,0,0,1-.359.132h-4.731v8.3h4.587a.674.674,0,0,1,.387.122.5.5,0,0,1,.18.444v2.08a.527.527,0,0,1-.18.453.644.644,0,0,1-.387.132h-4.587v8.106h4.75a.633.633,0,0,1,.378.122.468.468,0,0,1,.171.406V323.5a.541.541,0,0,1-.171.453.6.6,0,0,1-.378.132h-7.058a1.241,1.241,0,0,1-1.24-1.238C572.829,318.476,572.815,303.9,572.81,299.331Z"
                  transform="translate(-524.821 -297.541)"
                  fill="#353839"
                />
                <path
                  id="Path_101115"
                  data-name="Path 101115"
                  d="M678.466,321.528a.429.429,0,0,1-.4-.218.969.969,0,0,1-.127-.5V310.075h-5.658v10.773a1.05,1.05,0,0,1-.1.481.4.4,0,0,1-.391.2h-2.475a.379.379,0,0,1-.327-.189.859.859,0,0,1-.127-.492V301.185a5.853,5.853,0,0,1,.5-2.408,6.333,6.333,0,0,1,3.338-3.286,6.052,6.052,0,0,1,2.4-.481,6.127,6.127,0,0,1,2.411.481,6.309,6.309,0,0,1,3.347,3.286,5.852,5.852,0,0,1,.5,2.408v19.625a1.192,1.192,0,0,1-.1.492.4.4,0,0,1-.409.227h-2.383Zm-6.186-14.587h5.658v-5.585a3.349,3.349,0,0,0-.209-1.181,3.064,3.064,0,0,0-.591-.982,2.975,2.975,0,0,0-.9-.68,2.666,2.666,0,0,0-2.275,0,2.825,2.825,0,0,0-.891.68,3.15,3.15,0,0,0-.582.982,3.321,3.321,0,0,0-.209,1.181v5.585Z"
                  transform="translate(-608.639 -294.985)"
                  fill="#353839"
                />
                <path
                  id="Path_101116"
                  data-name="Path 101116"
                  d="M857.28,298.63a.8.8,0,0,1,.141-.492.5.5,0,0,1,.425-.188h2.439a.5.5,0,0,1,.425.188.8.8,0,0,1,.141.492v24.783a.832.832,0,0,1-.132.5.5.5,0,0,1-.434.18h-2.439a.5.5,0,0,1-.434-.18.832.832,0,0,1-.133-.5Z"
                  transform="translate(-773.063 -297.55)"
                  fill="#353839"
                />
                <path
                  id="Path_101117"
                  data-name="Path 101117"
                  d="M912.794,320.673a.967.967,0,0,1-.113.483.437.437,0,0,1-.417.2h-2.571a.376.376,0,0,1-.331-.189.892.892,0,0,1-.122-.492V300.993a5.681,5.681,0,0,1,.52-2.411,6.357,6.357,0,0,1,1.409-1.966,6.632,6.632,0,0,1,2.061-1.323,6.716,6.716,0,0,1,5,0,6.615,6.615,0,0,1,2.07,1.323,6.341,6.341,0,0,1,1.409,1.966,5.679,5.679,0,0,1,.52,2.411v19.642a1.019,1.019,0,0,1-.122.492.442.442,0,0,1-.425.227h-2.458a.447.447,0,0,1-.425-.218,1,1,0,0,1-.122-.5V301.164a3.218,3.218,0,0,0-.218-1.182,3.074,3.074,0,0,0-.614-.983,3.025,3.025,0,0,0-.936-.68,2.869,2.869,0,0,0-2.364,0,2.928,2.928,0,0,0-.926.68,3.141,3.141,0,0,0-.6.983,3.22,3.22,0,0,0-.218,1.182v19.51Z"
                  transform="translate(-818.405 -294.81)"
                  fill="#353839"
                />
                <path
                  id="Path_101118"
                  data-name="Path 101118"
                  d="M1039.6,316.58a3.1,3.1,0,0,0,.6.992,2.894,2.894,0,0,0,.936.68,2.825,2.825,0,0,0,1.21.255,2.783,2.783,0,0,0,1.2-.255,2.834,2.834,0,0,0,.917-.68,3.066,3.066,0,0,0,.586-.992,3.428,3.428,0,0,0,.208-1.191V313.5a.941.941,0,0,1,.122-.577.487.487,0,0,1,.387-.141h2.287a.606.606,0,0,1,.425.132.765.765,0,0,1,.141.548v2.1a6.378,6.378,0,0,1-.492,2.542,5.8,5.8,0,0,1-1.351,1.956,6.048,6.048,0,0,1-2.013,1.257,6.794,6.794,0,0,1-2.458.444,7.047,7.047,0,0,1-2.505-.444,6.323,6.323,0,0,1-2.069-1.257,5.961,5.961,0,0,1-1.409-1.956,6.076,6.076,0,0,1-.52-2.542V301.021a6.081,6.081,0,0,1,1.853-4.414,6.259,6.259,0,0,1,2.061-1.314,6.967,6.967,0,0,1,2.59-.472,6.431,6.431,0,0,1,2.666.52,5.679,5.679,0,0,1,1.937,1.4,6.06,6.06,0,0,1,1.191,2.013,6.888,6.888,0,0,1,.406,2.345v1.569a1.163,1.163,0,0,1-.113.6.486.486,0,0,1-.434.171H1045.7a.461.461,0,0,1-.425-.171,1.1,1.1,0,0,1-.1-.548v-1.531a3.573,3.573,0,0,0-.2-1.191,3.138,3.138,0,0,0-.567-1,2.731,2.731,0,0,0-.889-.69,2.6,2.6,0,0,0-1.163-.255,2.867,2.867,0,0,0-1.191.246,2.9,2.9,0,0,0-.945.671,3.006,3.006,0,0,0-.614.992,3.3,3.3,0,0,0-.218,1.191v14.234A3.3,3.3,0,0,0,1039.6,316.58Z"
                  transform="translate(-928.856 -294.819)"
                  fill="#353839"
                />
                <path
                  id="Path_101119"
                  data-name="Path 101119"
                  d="M1146.041,476.141a.659.659,0,0,1,.171-.5.56.56,0,0,1,.4-.16h2.514a.473.473,0,0,1,.444.208.917.917,0,0,1,.122.472v2.212a.609.609,0,0,1-.18.492.553.553,0,0,1-.35.152h-2.571a.663.663,0,0,1-.35-.132.548.548,0,0,1-.2-.492v-2.25Z"
                  transform="translate(-1025.048 -452.471)"
                  fill="#353839"
                />
              </g>
              <path
                id="Path_101120"
                data-name="Path 101120"
                d="M596.207,213.891a2.244,2.244,0,0,1,1.656-.891h1.274s1.019,0,.521.891c-.642,1.15-3.068,5.731-3.068,5.731a1.671,1.671,0,0,1-1.368.717h-1.882s-.7-.218,0-1.423S596.207,213.891,596.207,213.891Z"
                transform="translate(-542.463 -213)"
                fill="#adced0"
              />
            </svg>
          </div>
          <div className="search">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={searchTerm.length >= 3 ? true : false}
              overlay={popover}
            >
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  All categories &nbsp;{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </InputGroup.Text>
                <FormControl
                  placeholder="Search..."
                  onChange={handleSearchChange}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
            </OverlayTrigger>
          </div>
          <div className="sign-in">
            <svg
              id="icon-user"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect
                id="area"
                width="24"
                height="24"
                fill="none"
                opacity="0.3"
              />
              <g id="user" transform="translate(4 3)">
                <path
                  id="Path_38126"
                  data-name="Path 38126"
                  d="M592.025,1220.853a2.843,2.843,0,0,1-2.36-1.256l-.035-.053-.026-.058a10.47,10.47,0,0,1-1.7-6.437,4.2,4.2,0,0,1,4.182-4.078h.072l.07,0a4.115,4.115,0,0,1,4.349,4.1,10.524,10.524,0,0,1-1.655,6.354l-.078.116a2.98,2.98,0,0,1-2.444,1.3c-.054,0-.108,0-.162,0C592.164,1220.85,592.095,1220.853,592.025,1220.853Z"
                  transform="translate(-584.546 -1208.971)"
                  fill="none"
                  stroke="#353839"
                  stroke-width="1.5"
                />
                <path
                  id="Path_38127"
                  data-name="Path 38127"
                  d="M584.546,1227.9a21.127,21.127,0,0,1,.353-3.37c.215-1.011,1.8-2.145,4.228-3.021a1.137,1.137,0,0,0,.694-.7l.028-.075"
                  transform="translate(-584.546 -1208.971)"
                  fill="none"
                  stroke="#353839"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_38128"
                  data-name="Path 38128"
                  d="M594.645,1220.762l.033.091a1.13,1.13,0,0,0,.7.691c1.791.61,3.97,1.768,4.217,3.021a17.693,17.693,0,0,1,.305,3.335"
                  transform="translate(-584.546 -1208.971)"
                  fill="none"
                  stroke="#353839"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </g>
            </svg>{" "}
            &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="20"
              viewBox="0 0 52 20"
            >
              <text
                id="Sign_in"
                data-name="Sign in"
                transform="translate(0 15)"
                fill="#353839"
                font-size="16"
                font-family="SoleilBk, Soleil"
              >
                <tspan x="0" y="0">
                  Sign in
                </tspan>
              </text>
            </svg>
            &nbsp;&nbsp;&nbsp;
            <svg
              id="Bulk"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect
                id="area"
                width="24"
                height="24"
                fill="none"
                opacity="0.3"
              />
              <g id="icon-bulk" transform="translate(-211.835 -361.955)">
                <path
                  id="Path_38463"
                  data-name="Path 38463"
                  d="M223.584,369.954h-2.25V367.7a.75.75,0,0,0-1.5,0v2.25h-2.25a.75.75,0,1,0,0,1.5h2.25v2.25a.75.75,0,0,0,1.5,0v-2.25h2.25a.75.75,0,0,0,0-1.5Z"
                  fill="#353839"
                />
                <path
                  id="Path_38464"
                  data-name="Path 38464"
                  d="M227.334,375.2v-9a2.253,2.253,0,0,0-2.25-2.25h-9a2.252,2.252,0,0,0-2.25,2.25v9a2.253,2.253,0,0,0,2.25,2.25h9A2.253,2.253,0,0,0,227.334,375.2Zm-12,0v-9a.751.751,0,0,1,.75-.75h9a.752.752,0,0,1,.75.75v9a.752.752,0,0,1-.75.75h-9A.751.751,0,0,1,215.334,375.2Z"
                  fill="#353839"
                />
                <path
                  id="Path_38465"
                  data-name="Path 38465"
                  d="M230.334,378.2v-9a2.248,2.248,0,0,0-1.5-2.112V378.2a.752.752,0,0,1-.75.75H216.972a2.248,2.248,0,0,0,2.112,1.5h9A2.253,2.253,0,0,0,230.334,378.2Z"
                  fill="#353839"
                />
                <path
                  id="Path_38466"
                  data-name="Path 38466"
                  d="M231.834,370.092V381.2a.752.752,0,0,1-.75.75H219.972a2.248,2.248,0,0,0,2.112,1.5h9a2.253,2.253,0,0,0,2.25-2.25v-9A2.248,2.248,0,0,0,231.834,370.092Z"
                  fill="#353839"
                />
              </g>
            </svg>{" "}
            &nbsp;&nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="Cart" transform="translate(-80)">
                <g id="Icon_Cart" transform="translate(80)">
                  <rect
                    id="area"
                    width="24"
                    height="24"
                    fill="none"
                    opacity="0.3"
                  />
                  <g id="Cart-2" data-name="Cart" transform="translate(2 2)">
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="translate(2.392 16.11)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <circle
                      id="Ellipse_20"
                      data-name="Ellipse 20"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      transform="translate(15.392 16.11)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_21"
                      data-name="Path 21"
                      d="M26,25.1H13.473L11.684,9H9"
                      transform="translate(-9 -9)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_22"
                      data-name="Path 22"
                      d="M40,45l16.6,1.789-.8,7.157H40.994"
                      transform="translate(-36.918 -41.421)"
                      fill="none"
                      stroke="#353839"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="thirdBar">
        <nav id="tg-nav" class="tg-nav">
          <div id="tg-navigation" class=" tg-navigation">
            <ul>
              <li>
                <a>
                  All products{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  By space{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  By industry{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  By job{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  By collection{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <g id="chevron" transform="translate(0 0.001)">
                      <g id="icon-Chevron">
                        <rect
                          id="Frame"
                          width="16"
                          height="16"
                          transform="translate(0 -0.001)"
                          fill="#f0f"
                          opacity="0"
                        />
                        <g
                          id="Group_141210"
                          data-name="Group 141210"
                          transform="translate(4.96 6.552)"
                        >
                          <line
                            id="Line_633"
                            data-name="Line 633"
                            y2="4.237"
                            transform="translate(0 0.001) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_634"
                            data-name="Line 634"
                            x1="4.237"
                            transform="translate(2.996 2.996) rotate(-45)"
                            fill="none"
                            stroke="#353839"
                            stroke-linecap="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="banner">
        <div className="banner-container">
          <div className="banner-column-one"></div>
          <div className="banner-column-two">
            <img
              src={Banner}
              alt="Banner"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />

            <div className="hotels">
              <img
                src={Featured}
                style={{
                  maxWidth: "100%",
                  // maxHeight: "100%",
                  objectFit: "cover",
                }}
                alt="Featured"
              />

              <img
                src={Footer}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              ></img>

              <div className="footer-writing">
                <h4>Checkout our latest catalog and pricings</h4>
                <h6 style={{ fontFamily: "Soleil Book 16" }}>
                  Download catalog &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.269"
                    height="16.269"
                    viewBox="0 0 16.269 16.269"
                  >
                    <g
                      id="icon-mini-download"
                      transform="translate(0.135 0.135)"
                    >
                      <g
                        id="area"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="1"
                        opacity="0"
                      >
                        <rect width="16" height="16" stroke="none" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="15"
                          height="15"
                          fill="none"
                        />
                      </g>
                      <g id="download">
                        <path
                          id="Path_38497"
                          data-name="Path 38497"
                          d="M11.994,11.251,9.123,14.122,6.251,11.251"
                          transform="translate(-1.122 -2.019)"
                          fill="none"
                          stroke="#353839"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_726"
                          data-name="Line 726"
                          y2="11.487"
                          transform="translate(8 0.615)"
                          fill="none"
                          stroke="#353839"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_727"
                          data-name="Line 727"
                          x1="14.769"
                          transform="translate(0.615 15.384)"
                          fill="none"
                          stroke="#353839"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                </h6>
              </div>
            </div>
          </div>
          <div className="banner-column-three"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
