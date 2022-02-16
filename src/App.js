import "./App.css";
import Banner from "./banner.png";
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
              <div className="hotels-container">
                <div className="heading">
                  <h4>Companies we work with</h4>
                </div>
                <div className="logos">
                  <svg
                    // xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1007"
                    height="64.739"
                    viewBox="0 0 1007 64.739"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_165092"
                          data-name="Rectangle 165092"
                          width="90.14"
                          height="64.739"
                          fill="#8a9193"
                        />
                      </clipPath>
                      <clipPath id="clip-path-2">
                        <rect
                          id="Rectangle_165094"
                          data-name="Rectangle 165094"
                          width="75.077"
                          height="61.559"
                          fill="#8a9193"
                        />
                      </clipPath>
                      <clipPath id="clip-path-3">
                        <rect
                          id="Rectangle_165095"
                          data-name="Rectangle 165095"
                          width="143.474"
                          height="38.817"
                          fill="#8a9193"
                        />
                      </clipPath>
                      <clipPath id="clip-path-4">
                        <rect
                          id="Rectangle_165097"
                          data-name="Rectangle 165097"
                          width="48"
                          height="55.662"
                          fill="#8a9193"
                        />
                      </clipPath>
                      <clipPath id="clip-path-5">
                        <rect
                          id="Rectangle_165098"
                          data-name="Rectangle 165098"
                          width="59.549"
                          height="44.687"
                          fill="#8a9193"
                        />
                      </clipPath>
                    </defs>
                    <g id="Logos" transform="translate(249 -267.797)">
                      <g
                        id="_0"
                        data-name="0"
                        transform="translate(-249 267.797)"
                      >
                        <g
                          id="Group_171705"
                          data-name="Group 171705"
                          clip-path="url(#clip-path)"
                        >
                          <path
                            id="Path_104258"
                            data-name="Path 104258"
                            d="M0,144.773a6.035,6.035,0,0,1,6.109-6.126,6.4,6.4,0,0,1,4.552,1.607l-1.32,1.574a4.639,4.639,0,0,0-3.317-1.269,4.016,4.016,0,0,0-3.841,4.214A3.956,3.956,0,0,0,6.211,149a4.835,4.835,0,0,0,2.86-.9V145.89H6.041v-1.811h5.043v4.975A7.553,7.553,0,0,1,6.143,150.9,5.886,5.886,0,0,1,0,144.773"
                            transform="translate(0 -96.278)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104259"
                            data-name="Path 104259"
                            d="M41.031,148.443h2.048v2.014a3.168,3.168,0,0,1,3.164-2.183v2.166h-.119c-1.794,0-3.046,1.167-3.046,3.537v3.4H41.031Z"
                            transform="translate(-28.492 -102.96)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104260"
                            data-name="Path 104260"
                            d="M63.276,157.462v-1.1a3.611,3.611,0,0,1-2.894,1.286c-1.692,0-3.181-.965-3.181-2.792,0-1.98,1.54-2.928,3.622-2.928a7.518,7.518,0,0,1,2.47.373v-.169c0-1.236-.778-1.912-2.2-1.912a6.216,6.216,0,0,0-2.555.558l-.559-1.641a7.661,7.661,0,0,1,3.4-.745c2.64,0,3.926,1.388,3.926,3.774v5.3Zm.051-3.74a5.846,5.846,0,0,0-2.047-.355c-1.286,0-2.047.525-2.047,1.422,0,.846.761,1.32,1.726,1.32,1.354,0,2.369-.762,2.369-1.878Z"
                            transform="translate(-39.721 -103.045)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104261"
                            data-name="Path 104261"
                            d="M88.375,148.413h2.048V149.8a3.214,3.214,0,0,1,2.792-1.574c2.014,0,3.181,1.354,3.181,3.435v5.686H94.349v-5.076c0-1.388-.694-2.183-1.912-2.183a1.988,1.988,0,0,0-2.014,2.217v5.043H88.375Z"
                            transform="translate(-61.368 -102.93)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104262"
                            data-name="Path 104262"
                            d="M117.888,145.519c0-2.961,2.014-4.636,4.146-4.636a3.7,3.7,0,0,1,3.046,1.574V137.65h2.047V150H125.08v-1.489a3.576,3.576,0,0,1-3.046,1.675c-2.1,0-4.146-1.675-4.146-4.67m7.226,0a2.681,2.681,0,0,0-2.589-2.86,2.631,2.631,0,0,0-2.572,2.894,2.658,2.658,0,0,0,2.572,2.86,2.7,2.7,0,0,0,2.589-2.894"
                            transform="translate(-81.862 -95.585)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104263"
                            data-name="Path 104263"
                            d="M164.622,149.046l1.252-1.489a5.455,5.455,0,0,0,3.74,1.54c1.286,0,2.1-.592,2.1-1.523,0-.846-.474-1.3-2.674-1.827-2.521-.592-3.943-1.337-3.943-3.554,0-2.031,1.692-3.435,4.044-3.435a6.567,6.567,0,0,1,4.3,1.489l-1.117,1.574a5.378,5.378,0,0,0-3.215-1.218c-1.218,0-1.93.626-1.93,1.438,0,.914.542,1.32,2.809,1.861,2.5.609,3.807,1.506,3.807,3.5,0,2.217-1.743,3.537-4.23,3.537a7.3,7.3,0,0,1-4.941-1.9"
                            transform="translate(-114.315 -96.355)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104264"
                            data-name="Path 104264"
                            d="M202.647,157.462v-1.1a3.611,3.611,0,0,1-2.894,1.286c-1.692,0-3.181-.965-3.181-2.792,0-1.98,1.54-2.928,3.622-2.928a7.518,7.518,0,0,1,2.47.373v-.169c0-1.236-.778-1.912-2.2-1.912a6.216,6.216,0,0,0-2.555.558l-.559-1.641a7.661,7.661,0,0,1,3.4-.745c2.64,0,3.926,1.388,3.926,3.774v5.3Zm.051-3.74a5.846,5.846,0,0,0-2.047-.355c-1.286,0-2.047.525-2.047,1.422,0,.846.761,1.32,1.726,1.32,1.354,0,2.369-.762,2.369-1.878Z"
                            transform="translate(-136.501 -103.045)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104265"
                            data-name="Path 104265"
                            d="M223.87,148.836h2.2l2.4,6.566,2.419-6.566h2.149l-3.655,9h-1.845Z"
                            transform="translate(-155.457 -103.353)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104266"
                            data-name="Path 104266"
                            d="M253,152.9a4.765,4.765,0,1,1,4.738,4.654A4.671,4.671,0,0,1,253,152.9m7.48,0a2.762,2.762,0,0,0-2.741-2.877,2.691,2.691,0,0,0-2.69,2.877,2.768,2.768,0,0,0,2.724,2.877,2.7,2.7,0,0,0,2.708-2.877"
                            transform="translate(-175.682 -102.93)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104267"
                            data-name="Path 104267"
                            d="M287.771,137.982h2.2v1.946h-2.2Zm.084,3.317H289.9v8.935h-2.047Z"
                            transform="translate(-199.83 -95.816)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104268"
                            data-name="Path 104268"
                            d="M141.387,43.5c-.413,2.4-1.956,4.244-4.586,5.494l-1.058.5-.185-1.157a12.529,12.529,0,0,1-.167-1.983c0-.1,0-.2,0-.3s.007-.189.012-.282a.163.163,0,0,1,0-.034c.005-.09.012-.178.02-.265s.017-.189.028-.281.023-.183.037-.272.027-.179.044-.266.031-.163.047-.242c.056-.262.122-.512.2-.753.024-.079.05-.157.077-.233s.046-.129.07-.193c.011-.031.023-.061.035-.092.021-.056.043-.11.066-.164.031-.072.061-.145.093-.214.067-.149.138-.293.211-.433l.052-.1c.023-.044.047-.089.072-.132.037-.067.075-.131.114-.2.017-.031.035-.058.053-.087s.053-.084.08-.126c.077-.122.157-.239.239-.354.028-.039.055-.078.083-.116l.128-.172q.13-.169.266-.332c.045-.055.092-.109.136-.163q.135-.156.272-.306c.092-.1.183-.2.275-.293l.146-.148.146-.146a8.61,8.61,0,0,1,.444,2.084c-.042.048-.082.1-.122.146s-.058.071-.086.108-.064.079-.094.119c-.008.011-.017.021-.024.031-.048.064-.1.128-.142.193q-.148.207-.282.428c-.09.146-.174.3-.252.453-.041.078-.078.157-.114.237-.02.041-.037.081-.054.122s-.035.082-.052.124c-.033.083-.065.168-.1.254-.017.043-.031.087-.045.13s-.028.088-.042.133-.029.09-.039.136-.024.092-.036.137c-.025.092-.047.187-.066.284s-.039.194-.055.294a1.494,1.494,0,0,0-.023.153c-.007.05-.013.1-.02.153s-.013.1-.017.157-.011.108-.015.161a8.666,8.666,0,0,0-.013,1.088l.149-.1c.049-.034.1-.069.144-.1q.154-.112.3-.23l.141-.118c.047-.041.093-.081.139-.124s.087-.079.128-.12l.064-.061c.021-.02.042-.043.061-.064.075-.078.149-.157.219-.238l.017-.021c.034-.039.067-.078.1-.118s.08-.1.119-.153.059-.08.088-.122c.043-.061.084-.122.125-.186.024-.036.047-.073.069-.111s.058-.1.085-.145c.055-.1.106-.2.153-.3q.033-.071.065-.141c0-.011.009-.022.014-.033.015-.036.031-.072.045-.109l.015-.041c.011-.028.021-.055.031-.083s.02-.053.028-.079c.017-.05.034-.1.05-.153s.029-.1.042-.142.033-.12.047-.183c.011-.044.02-.086.031-.13.013-.061.024-.122.035-.183a6.188,6.188,0,0,0,.078-1.342c0-.036,0-.073-.007-.111,0-.075-.009-.148-.017-.222,0-.031,0-.059-.009-.089s-.009-.087-.014-.13-.014-.117-.023-.175c-.01-.075-.022-.149-.034-.222a10.573,10.573,0,0,0-.53-1.919c-.023-.061-.047-.124-.071-.185s-.041-.1-.061-.155-.035-.086-.054-.13-.046-.111-.07-.166c-.013-.031-.026-.061-.041-.092-.186-.423-.395-.846-.624-1.265q-.1-.177-.2-.355-.26-.451-.545-.895c-.036-.058-.075-.117-.114-.175s-.077-.119-.116-.177q-.351-.525-.73-1.035c-.054-.072-.108-.144-.162-.214s-.107-.14-.161-.209c-.322-.417-.658-.823-1-1.215-.045-.053-.092-.105-.137-.157q-.206-.233-.415-.461c-.045-.05-.092-.1-.139-.15l-.078-.084-.1.107c-.061.065-.12.13-.18.2s-.119.13-.178.2-.126.141-.189.214-.112.126-.166.19c-.177.2-.35.41-.522.621l-.163.2-.015.02c-.055.068-.108.135-.161.2-.112.143-.224.287-.332.432-.056.072-.11.146-.163.219s-.109.147-.16.22-.1.142-.153.214l-.011.015q-.154.219-.3.441t-.3.453c-.045.069-.089.138-.132.208l-.031.051c-.041.066-.081.132-.119.2s-.093.153-.137.23c-.034.057-.067.115-.1.173l-.1.172c-.031.057-.064.114-.1.172s-.061.115-.093.173a.016.016,0,0,1,0,.008c-.041.076-.08.153-.117.227-.08.156-.157.311-.229.467-.037.078-.074.156-.108.233a18.016,18.016,0,0,1-1.314-1.306c.035-.072.071-.144.108-.216s.073-.144.112-.217a27.659,27.659,0,0,1,4.83-6.4l.621-.619.621.619a27.66,27.66,0,0,1,4.83,6.4c.058.11.114.219.168.328.028.054.055.108.081.162s.054.109.079.162l.076.161c.075.161.148.321.216.48a14.222,14.222,0,0,1,.651,1.831c.016.058.031.116.047.174s.031.115.044.173.028.115.041.172.025.111.037.166c.045.214.083.424.115.634.009.058.017.115.024.173,0,.023.006.047.009.071.006.045.012.09.017.135s.012.11.016.164a8.122,8.122,0,0,1-.072,2.126"
                            transform="translate(-89.381 -20.391)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104269"
                            data-name="Path 104269"
                            d="M133.6,55.736c-.079.156-.156.311-.229.467.072-.156.149-.311.229-.467"
                            transform="translate(-92.612 -38.704)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104270"
                            data-name="Path 104270"
                            d="M129.754,70.9v0Z"
                            transform="translate(-90.102 -49.236)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104271"
                            data-name="Path 104271"
                            d="M117.6,16.458h0c.064.143.133.282.206.419l.011.02c.042.076.084.153.13.226l.052.084,0,.006q.055.09.115.177c.038.057.077.114.117.17l0,.006.021.031.1.137c.034.046.073.1.111.144l.023.031q.113.141.23.277l.031.037c.045.053.092.1.138.156v0c.046.051.092.1.141.153l.035.037c.036.039.073.078.112.116a.317.317,0,0,0,.024.025c.022.024.045.047.068.07.114.116.228.229.344.341.211.2.423.4.634.6.285.266.568.53.842.8l.023.023c.057.056.112.111.167.167l.061.061c.043.044.086.088.126.132s.065.067.1.1c.05.053.1.1.145.158s.08.09.119.136.078.09.115.135.075.089.112.135l.066.083c.034.042.067.084.1.127.054.07.106.142.157.214.016.022.031.045.047.067s.035.052.051.077c.029.041.055.082.081.122.039.061.077.122.114.183v0c.028.047.056.1.083.144l.026.046.049.092c.008.013.014.026.021.039.028.051.054.1.079.157a0,0,0,0,1,0,0c.028.056.054.111.079.168s.048.109.071.165.049.119.072.18.045.122.066.183c.011.031.021.061.031.092s.02.061.031.093.028.092.041.139.026.093.038.14c0,.015.009.031.012.047s.017.061.023.094c.013.053.025.108.036.162s.027.134.039.2.021.119.028.18c0,.024.008.048.011.071.009.058.015.116.022.175s.016.146.023.22.01.134.013.2a.041.041,0,0,1,0,.012c0,.02,0,.039,0,.059,0,.061.006.125.008.189s0,.158,0,.239c0,.149,0,.3-.011.458a7.039,7.039,0,0,1-.874-.677c-.047-.043-.092-.086-.137-.13-.015-.014-.031-.028-.045-.044l-.122-.125-.014-.015-.092-.1a.171.171,0,0,1-.019-.021l-.045-.05a.3.3,0,0,1-.025-.031c-.031-.034-.058-.069-.087-.1l-.039-.048c-.038-.048-.075-.1-.111-.145s-.051-.07-.075-.106a.091.091,0,0,1-.015-.022c-.02-.026-.038-.054-.055-.08-.08-.119-.153-.241-.222-.367a.014.014,0,0,1,0-.009.226.226,0,0,1-.017-.033.671.671,0,0,1-.031-.061.035.035,0,0,1-.006-.013.718.718,0,0,1-.039-.077c-.013-.025-.025-.05-.036-.077s-.028-.056-.039-.084a.049.049,0,0,1-.005-.012c-.022-.047-.043-.1-.061-.147l-.013-.033c-.019-.047-.036-.092-.053-.141-.007-.017-.012-.033-.017-.049-.021-.058-.039-.116-.057-.175s-.039-.134-.057-.2c-.014-.052-.027-.1-.037-.156a.082.082,0,0,1-.005-.024.737.737,0,0,1-.015-.072c-.012-.054-.022-.108-.031-.162a5.556,5.556,0,0,1-.072-.636c0-.043-.007-.086-.007-.13s0-.084,0-.127v-.249c-.408-.447-.861-.871-1.331-1.308l-.263-.247a9.288,9.288,0,0,0-.159,1.7c0,.1,0,.2.005.293.01.253.031.5.065.747.006.043.012.086.019.128s.013.086.021.128c.413,2.4,1.956,4.244,4.586,5.494l1.058.5.185-1.157c.014-.089.028-.178.039-.264.01-.07.02-.139.027-.207l.013-.1c0-.034.008-.068.011-.1.009-.075.017-.153.023-.226,0-.055.01-.108.014-.162q.028-.339.035-.659,0-.132,0-.26v-.213c0-.128-.008-.255-.015-.38-.01-.167-.023-.33-.041-.489-.009-.083-.019-.163-.031-.244s-.02-.141-.031-.212a.18.18,0,0,0,0-.027c-.008-.044-.014-.088-.023-.13-.016-.093-.035-.183-.055-.275-.008-.041-.016-.08-.026-.119s-.02-.085-.031-.126l-.033-.127c-.011-.042-.023-.086-.035-.127-.017-.061-.035-.122-.054-.183s-.028-.092-.043-.136q-.036-.112-.076-.22c-.008-.022-.015-.043-.024-.064-.022-.059-.044-.119-.067-.177l-.043-.1c-.014-.035-.031-.069-.044-.1-.033-.077-.067-.153-.1-.228l-.058-.12q-.056-.115-.115-.227-.127-.24-.265-.467c-.036-.058-.072-.116-.11-.173l-.031-.049c-.034-.053-.069-.1-.1-.156q-.137-.2-.28-.388c-.048-.064-.1-.126-.146-.188s-.108-.134-.162-.2c-.027-.034-.056-.067-.085-.1l-.119-.138c-.041-.046-.08-.092-.12-.136s-.071-.079-.108-.117l-.059-.064c-.048-.053-.1-.1-.147-.155l-.1-.1c-.037-.039-.075-.077-.113-.114l-.082-.082-.155-.153-.01-.009-.16-.155q-.207-.2-.411-.388l-.175-.165c-.045-.042-.089-.083-.134-.124s-.088-.082-.132-.122-.087-.081-.129-.122c-.278-.263-.543-.52-.784-.777-.124-.133-.242-.266-.353-.4-.033-.039-.066-.079-.1-.118-.02-.023-.037-.046-.055-.07s-.055-.07-.08-.106c-.079-.108-.153-.217-.222-.328-.008-.012-.015-.024-.022-.036-.031-.047-.057-.094-.083-.144-.017-.031-.034-.061-.049-.092s-.031-.061-.047-.092-.031-.061-.044-.092l-.01-.022-.033-.074c-.014-.031-.028-.064-.039-.1a.68.68,0,0,1-.031-.083.225.225,0,0,1-.009-.024c-.011-.031-.022-.059-.031-.089-.022-.066-.043-.133-.061-.2a.784.784,0,0,1-.02-.078c-.005-.027-.014-.057-.02-.086s-.016-.077-.023-.115a.2.2,0,0,1-.006-.037c-.006-.026-.01-.054-.013-.081a.417.417,0,0,1-.008-.055c0-.025-.008-.051-.01-.078s-.009-.078-.012-.117-.007-.077-.008-.115-.006-.084-.006-.128c0-.108,0-.222,0-.336,0-.031,0-.059.006-.09s0-.056.007-.084a.047.047,0,0,1,0-.013c0-.057.011-.115.019-.173,0-.039.009-.077.015-.115s.008-.057.013-.087c.008-.053.017-.108.028-.164.007-.037.014-.075.022-.112.011-.055.023-.111.037-.168s.021-.09.033-.136c.023-.092.048-.185.077-.281.013-.047.028-.094.044-.144s.031-.1.047-.147.031-.1.049-.148a.007.007,0,0,1,0,0q.354-.706.759-1.418.081-.143.166-.286c.057-.1.113-.194.172-.292l.161-.269c.009-.013.017-.026.024-.039.057-.092.114-.183.172-.275s.122-.2.185-.293.122-.193.187-.289l.209-.317c.061-.092.122-.183.186-.275l.194-.283q.275-.4.568-.795c.061-.082.121-.164.183-.247.163-.22.33-.439.5-.66l.153-.2c.045-.059.092-.117.138-.175.077-.1.156-.2.236-.295s.159-.2.24-.295.161-.2.244-.294c.064-.077.128-.153.193-.229l.206-.242q.674-.786,1.408-1.568l.283-.3.288-.3.288.3c.1.1.19.2.283.3q.733.782,1.408,1.568l.206.242.193.229c.083.1.163.2.244.294s.161.2.24.295.159.2.236.295c.047.058.093.116.138.175s.1.13.153.2q.257.33.5.66l.183.247c.2.266.384.531.568.795l.194.283.185.275c.07.106.141.211.21.317s.125.193.186.289.125.2.185.293.115.183.172.275c.008.013.015.026.024.039l.161.269c.059.1.116.2.172.292s.112.191.166.286q.407.712.759,1.418s0,0,0,0l.008.022c.014.043.028.085.042.126s.033.1.047.147.026.083.037.124c.029.092.054.183.076.272.011.039.02.078.028.116s.014.059.021.089a.006.006,0,0,1,0,0l.02.089c.01.044.019.088.026.132v0c.005.031.012.061.016.094s.015.088.022.131.013.087.017.13c0,.023.008.047.009.07a.134.134,0,0,1,0,.022c0,.017,0,.035.005.053.009.078.014.155.017.23,0,.031,0,.061,0,.093v.073c0,.081,0,.161,0,.239,0,.05,0,.1-.009.15a.257.257,0,0,1,0,.031c0,.046-.009.093-.014.138a3.247,3.247,0,0,1-.054.321.2.2,0,0,1-.008.035.025.025,0,0,1,0,.012.013.013,0,0,1,0,.011c-.006.031-.014.061-.022.092-.011.047-.024.092-.039.139-.031.1-.061.2-.1.293-.014.039-.031.077-.047.114-.007.017-.014.033-.022.049-.038.086-.079.17-.124.253-.022.041-.044.081-.068.12l-.056.1-.033.052-.061.1a.418.418,0,0,1-.026.039l-.007.01c-.02.031-.039.061-.061.089a16.133,16.133,0,0,1,.729,1.866l.019-.021,0,0c.045-.049.088-.1.132-.148l.012-.014q.142-.163.275-.333l.019-.024c.032-.041.064-.082.1-.124s.083-.112.124-.169l.036-.051.084-.122q.059-.087.115-.177v0c.042-.064.081-.13.118-.2.025-.045.051-.09.075-.135l.055-.1a.173.173,0,0,0,.016-.034c.031-.058.059-.117.087-.177l.049-.107a6.471,6.471,0,0,0-.065-5.01l.006,0A42.852,42.852,0,0,0,126.967.621L126.345,0l-.621.621a42.858,42.858,0,0,0-8.064,10.826l.006,0a6.481,6.481,0,0,0-.063,5.01"
                            transform="translate(-81.339)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104272"
                            data-name="Path 104272"
                            d="M132.109,48.28a6.281,6.281,0,0,1-1.031,3c0,.016.007.031.009.048q.128.664.2,1.31c.01.087.017.172.025.258q.059.642.059,1.268c0,.138,0,.275-.007.413s-.011.273-.02.409-.02.271-.033.4c-.027.268-.061.533-.107.795q-.082.49-.208.965l-.052.189a10.768,10.768,0,0,1-5.18,6.409,14.9,14.9,0,0,1-3.733,1.555,14.9,14.9,0,0,1-3.733-1.555,10.761,10.761,0,0,1-5.18-6.409c-.017-.061-.035-.126-.051-.189-.083-.317-.153-.638-.208-.965-.044-.262-.08-.527-.106-.795q-.02-.2-.033-.4c-.009-.135-.015-.272-.02-.409s-.006-.275-.006-.413q0-.623.059-1.268c.008-.086.015-.171.025-.258q.071-.646.2-1.31c0-.016.007-.031.009-.048a6.28,6.28,0,0,1-1.031-3,15.834,15.834,0,0,0-.524,9.534,12.639,12.639,0,0,0,6.032,7.474,16.943,16.943,0,0,0,2.544,1.207c.031.011.059.023.089.033q.329.122.608.212l.107.035.233.071.1.031.01,0v2.353h1.754V66.881l.01,0c.033-.009.066-.019.1-.031l.233-.071.107-.035q.278-.092.608-.212c.031-.01.059-.022.089-.033a16.944,16.944,0,0,0,2.544-1.207,12.639,12.639,0,0,0,6.032-7.474,15.836,15.836,0,0,0-.523-9.534"
                            transform="translate(-77.026 -33.526)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104273"
                            data-name="Path 104273"
                            d="M96.517,193.781h.612v2.412h3.133v-2.412h.613v5.428h-.613v-2.443H97.129v2.443h-.612Z"
                            transform="translate(-67.022 -134.563)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104274"
                            data-name="Path 104274"
                            d="M118.565,196.283a2.769,2.769,0,1,1,2.76,2.807,2.75,2.75,0,0,1-2.76-2.807m4.9,0a2.135,2.135,0,1,0-2.125,2.241,2.158,2.158,0,0,0,2.125-2.241"
                            transform="translate(-82.332 -134.351)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104275"
                            data-name="Path 104275"
                            d="M143.807,194.346h-1.822v-.566h4.265v.566h-1.822v4.862h-.62Z"
                            transform="translate(-98.595 -134.562)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104276"
                            data-name="Path 104276"
                            d="M163.247,193.781h3.924v.558H163.86v1.853h2.962v.558H163.86v1.9h3.35v.558h-3.963Z"
                            transform="translate(-113.36 -134.563)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104277"
                            data-name="Path 104277"
                            d="M183.8,193.781h.613v4.862h3.055v.566H183.8Z"
                            transform="translate(-127.631 -134.563)"
                            fill="#8a9193"
                          />
                        </g>
                      </g>
                      <g
                        id="_1"
                        data-name="1"
                        transform="translate(-55 268.798)"
                      >
                        <g
                          id="Group_171707"
                          data-name="Group 171707"
                          clip-path="url(#clip-path-2)"
                        >
                          <path
                            id="Path_104278"
                            data-name="Path 104278"
                            d="M0,143.357a5.259,5.259,0,0,1,5.453-5.224,5.229,5.229,0,1,1-.031,10.449A5.216,5.216,0,0,1,0,143.357m9.627,0a4.121,4.121,0,0,0-4.2-4.171,4.078,4.078,0,0,0-4.173,4.171,4.121,4.121,0,0,0,4.2,4.171,4.078,4.078,0,0,0,4.173-4.171"
                            transform="translate(0 -99.331)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104279"
                            data-name="Path 104279"
                            d="M46.286,138.75h3.7c3.351,0,5.666,2.179,5.666,5.051,0,2.843-2.315,5.051-5.666,5.051h-3.7Zm3.7,9.049c2.7,0,4.417-1.732,4.417-4,0-2.237-1.721-4-4.417-4h-2.5V147.8Z"
                            transform="translate(-32.563 -99.775)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104280"
                            data-name="Path 104280"
                            d="M84.882,144.855l-4.433-6.1h1.462l3.595,5.051,3.625-5.051h1.4L86.1,144.84v4.012H84.882Z"
                            transform="translate(-56.597 -99.775)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104281"
                            data-name="Path 104281"
                            d="M117.8,147.01l.747-.837A5.224,5.224,0,0,0,122.2,147.6c1.432,0,2.376-.721,2.376-1.746,0-.938-.533-1.472-2.772-1.919-2.453-.505-3.58-1.256-3.58-2.944,0-1.588,1.478-2.756,3.5-2.756a5.755,5.755,0,0,1,3.747,1.241l-.7.88a4.838,4.838,0,0,0-3.077-1.1c-1.386,0-2.269.721-2.269,1.66s.548,1.487,2.894,1.963c2.376.491,3.473,1.313,3.473,2.887,0,1.732-1.523,2.857-3.641,2.857a6.433,6.433,0,0,1-4.357-1.616"
                            transform="translate(-82.871 -99.406)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104282"
                            data-name="Path 104282"
                            d="M151.189,147.01l.747-.837a5.224,5.224,0,0,0,3.656,1.429c1.432,0,2.376-.721,2.376-1.746,0-.938-.533-1.472-2.772-1.919-2.453-.505-3.58-1.256-3.58-2.944,0-1.588,1.478-2.756,3.5-2.756a5.755,5.755,0,0,1,3.747,1.241l-.7.88a4.838,4.838,0,0,0-3.077-1.1c-1.386,0-2.269.721-2.269,1.66s.548,1.487,2.894,1.963c2.376.491,3.473,1.313,3.473,2.887,0,1.732-1.523,2.857-3.641,2.857a6.433,6.433,0,0,1-4.357-1.616"
                            transform="translate(-106.363 -99.406)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104283"
                            data-name="Path 104283"
                            d="M187.46,138.75h7.708v1.039h-6.5v3.449h5.819v1.039h-5.819v3.536h6.581v1.039H187.46Z"
                            transform="translate(-131.88 -99.775)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104284"
                            data-name="Path 104284"
                            d="M223.641,144.855l-4.433-6.1h1.462l3.595,5.051,3.625-5.051h1.4l-4.433,6.09v4.012h-1.219Z"
                            transform="translate(-154.215 -99.775)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104285"
                            data-name="Path 104285"
                            d="M23.854,203.358a2.583,2.583,0,0,1,2.663-2.581,2.787,2.787,0,0,1,2.039.806l-.391.4a2.349,2.349,0,0,0-1.655-.685,2.06,2.06,0,0,0,0,4.12,2.343,2.343,0,0,0,1.7-.72l.391.392a2.793,2.793,0,0,1-2.107.848,2.56,2.56,0,0,1-2.641-2.58"
                            transform="translate(-16.782 -144.379)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104286"
                            data-name="Path 104286"
                            d="M45.625,203.358a2.688,2.688,0,1,1,2.678,2.58,2.6,2.6,0,0,1-2.678-2.58m4.755,0A2.035,2.035,0,0,0,48.3,201.3a2.015,2.015,0,0,0-2.061,2.06,2.036,2.036,0,0,0,2.077,2.06,2.014,2.014,0,0,0,2.061-2.06"
                            transform="translate(-32.098 -144.379)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104287"
                            data-name="Path 104287"
                            d="M71.53,201.083h.594v4.469h2.964v.521H71.53Z"
                            transform="translate(-50.322 -144.599)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104288"
                            data-name="Path 104288"
                            d="M90.788,201.083h.594v4.469h2.964v.521H90.788Z"
                            transform="translate(-63.87 -144.599)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104289"
                            data-name="Path 104289"
                            d="M110.046,201.083h3.807v.513H110.64v1.7h2.874v.513H110.64v1.746h3.25v.513h-3.845Z"
                            transform="translate(-77.418 -144.599)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104290"
                            data-name="Path 104290"
                            d="M129.811,203.358a2.583,2.583,0,0,1,2.663-2.581,2.787,2.787,0,0,1,2.039.806l-.391.4a2.349,2.349,0,0,0-1.655-.685,2.06,2.06,0,0,0,0,4.12,2.343,2.343,0,0,0,1.7-.72l.391.392a2.793,2.793,0,0,1-2.107.848,2.56,2.56,0,0,1-2.641-2.58"
                            transform="translate(-91.323 -144.379)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104291"
                            data-name="Path 104291"
                            d="M153.374,201.6h-1.768v-.521h4.138v.521h-1.768v4.469h-.6Z"
                            transform="translate(-106.657 -144.598)"
                            fill="#8a9193"
                          />
                          <rect
                            id="Rectangle_165093"
                            data-name="Rectangle 165093"
                            width="0.594"
                            height="4.99"
                            transform="translate(51.307 56.484)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104292"
                            data-name="Path 104292"
                            d="M183.018,203.358a2.688,2.688,0,1,1,2.678,2.58,2.6,2.6,0,0,1-2.678-2.58m4.755,0a2.035,2.035,0,0,0-2.076-2.06,2.014,2.014,0,0,0-2.061,2.06,2.035,2.035,0,0,0,2.077,2.06,2.014,2.014,0,0,0,2.061-2.06"
                            transform="translate(-128.755 -144.379)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104293"
                            data-name="Path 104293"
                            d="M208.924,201.083h.557l3.318,4v-4h.579v4.99H212.9l-3.4-4.092v4.092h-.579Z"
                            transform="translate(-146.98 -144.599)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104294"
                            data-name="Path 104294"
                            d="M71.855,17.134c-.083.131-.163.24-.225.358-.047.088-.116.2-.092.274.019.058.167.1.262.11.353.034.709.035,1.06.079a7.739,7.739,0,0,0,2.889-.04,4.008,4.008,0,0,0,1.812-.737.319.319,0,0,1,.19-.044c.5-.005,1.009,0,1.514-.008,3.294-.057,6.588-.121,9.882-.174,2.448-.04,4.895-.007,7.34.113.045,0,.09.013.135.019l.03.049-.9.845A2.643,2.643,0,0,0,97.6,17.46c-.123.156-.255.295-.374.444s-.226.313-.338.47a22.121,22.121,0,0,1,5.107-1.736,20.4,20.4,0,0,1-5.084-1.76l-.036.038.733.919a2.6,2.6,0,0,0-1.935-.516,2.713,2.713,0,0,1,.975.876c-.064.008-.093.013-.122.014-2.147.044-4.3.121-6.443.121-2.316,0-4.633-.075-6.949-.112-1.793-.029-3.587-.048-5.38-.074a.321.321,0,0,1-.189-.046,3.459,3.459,0,0,0-1.579-.679,5.7,5.7,0,0,0-1.787-.211c-.81.076-1.622.128-2.433.2-.082.007-.216.052-.226.1a.436.436,0,0,0,.074.263c.068.126.154.242.233.363l-.028.072c-.353.054-.706.106-1.058.163-.063.01-.166.029-.174.062a1,1,0,0,0-.033.369c.017.132.15.115.254.118a3.207,3.207,0,0,1,1.047.219m17.8-1.308c.522,0,.982,0,1.442-.005.047,0,.109-.062.137-.109.14-.243.271-.491.406-.736a12.2,12.2,0,0,0,1.586-4.661,7.257,7.257,0,0,0-1.924-5.8,20.9,20.9,0,0,0-1.576-1.481,3.5,3.5,0,0,1-1.2-1.735A10.388,10.388,0,0,1,88.373.231C88.358.115,88.317.019,88.185,0s-.2.077-.232.186c-.074.237-.149.474-.217.713a2.855,2.855,0,0,0,.8,2.97c.252.252.515.5.787.729a10.154,10.154,0,0,1,2.3,2.585,4.257,4.257,0,0,1,.544,3.056,7.963,7.963,0,0,1-.872,2.19c-.427.792-.864,1.579-1.27,2.38a9.061,9.061,0,0,0-.374,1.017m.039,1.626c.017.08.026.143.042.2a9.072,9.072,0,0,0,.877,1.983c.407.755.837,1.5,1.2,2.276a4.3,4.3,0,0,1,.251,3.21,6.353,6.353,0,0,1-1.62,2.513c-.5.5-1.047.958-1.568,1.441a3.849,3.849,0,0,0-1.139,1.594,3.708,3.708,0,0,0,.256,2.487.242.242,0,0,0,.2.11.255.255,0,0,0,.168-.157,1.957,1.957,0,0,0,.04-.386,3.076,3.076,0,0,1,.882-2.034c.364-.362.765-.692,1.149-1.036a8.36,8.36,0,0,0,2.457-3.535,8.024,8.024,0,0,0,.014-4.862,17.539,17.539,0,0,0-1.678-3.729.155.155,0,0,0-.106-.074c-.466-.005-.932,0-1.419,0m-15.9-2.736c.1-.006.143-.011.189-.011.329,0,.659.006.988,0a.407.407,0,0,0,.242-.072Q81.388,9.1,87.557,3.56a.8.8,0,0,0,.064-.07l-.4-.8L73.791,14.716M87.626,29.524l-.2-.185-5.439-4.9q-3.234-2.915-6.471-5.827a.4.4,0,0,0-.259-.074c-.291.009-.582.037-.873.056-.05,0-.1,0-.189,0L87.22,30.328l.406-.8"
                            transform="translate(-49.631 0.001)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104295"
                            data-name="Path 104295"
                            d="M71.855,55.225a3.213,3.213,0,0,0-1.047-.219c-.1,0-.237.014-.254-.118a1,1,0,0,1,.033-.369c.008-.032.112-.051.174-.061.352-.057.705-.109,1.058-.163l.028-.071c-.079-.121-.166-.237-.233-.363a.437.437,0,0,1-.074-.264c.011-.047.144-.093.226-.1.811-.07,1.623-.122,2.433-.2a5.707,5.707,0,0,1,1.787.211,3.456,3.456,0,0,1,1.579.679.323.323,0,0,0,.189.046c1.793.026,3.587.046,5.38.074,2.316.037,4.632.112,6.949.112,2.147,0,4.3-.077,6.443-.121.029,0,.058-.006.122-.014a2.709,2.709,0,0,0-.975-.876,2.6,2.6,0,0,1,1.935.516l-.733-.919.036-.038a20.394,20.394,0,0,0,5.083,1.759,22.16,22.16,0,0,0-5.107,1.736c.112-.157.218-.318.338-.469s.251-.288.374-.444a2.642,2.642,0,0,1-1.846.519l.9-.845-.03-.049a1.293,1.293,0,0,0-.135-.019c-2.445-.12-4.892-.153-7.34-.113-3.294.053-6.588.117-9.882.174-.5.009-1.009,0-1.514.008a.315.315,0,0,0-.19.044,4.008,4.008,0,0,1-1.812.737,7.745,7.745,0,0,1-2.889.04c-.351-.044-.707-.045-1.06-.079-.095-.009-.243-.052-.261-.11-.025-.076.045-.187.092-.275.063-.117.142-.227.225-.358"
                            transform="translate(-49.631 -38.09)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104296"
                            data-name="Path 104296"
                            d="M130.136,15.826a9.062,9.062,0,0,1,.374-1.017c.406-.8.843-1.588,1.27-2.38a7.965,7.965,0,0,0,.872-2.19,4.258,4.258,0,0,0-.544-3.055,10.15,10.15,0,0,0-2.3-2.585c-.272-.233-.535-.477-.788-.729a2.855,2.855,0,0,1-.8-2.97c.067-.239.143-.475.217-.712.034-.109.092-.2.232-.186s.173.114.189.229a10.39,10.39,0,0,0,.158,1.065,3.5,3.5,0,0,0,1.2,1.735,20.846,20.846,0,0,1,1.576,1.481,7.255,7.255,0,0,1,1.924,5.8,12.2,12.2,0,0,1-1.585,4.661c-.135.246-.266.493-.406.736-.028.047-.09.108-.137.109-.46.008-.92.005-1.442.005"
                            transform="translate(-90.112 0.001)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104297"
                            data-name="Path 104297"
                            d="M130.176,62.13c.486,0,.953,0,1.418,0a.156.156,0,0,1,.107.074,17.524,17.524,0,0,1,1.678,3.729,8.022,8.022,0,0,1-.014,4.862,8.355,8.355,0,0,1-2.457,3.535c-.385.344-.785.674-1.149,1.036a3.076,3.076,0,0,0-.882,2.034,1.891,1.891,0,0,1-.04.386.255.255,0,0,1-.167.157.243.243,0,0,1-.2-.11,3.708,3.708,0,0,1-.256-2.487,3.853,3.853,0,0,1,1.14-1.594c.52-.483,1.068-.94,1.567-1.441a6.346,6.346,0,0,0,1.62-2.513,4.292,4.292,0,0,0-.251-3.209c-.358-.776-.788-1.522-1.2-2.276a9.085,9.085,0,0,1-.877-1.983c-.016-.061-.025-.123-.042-.2"
                            transform="translate(-90.112 -44.678)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104298"
                            data-name="Path 104298"
                            d="M81.488,21.616,94.917,9.594l.4.8a.856.856,0,0,1-.065.07Q89.083,16,82.907,21.531a.4.4,0,0,1-.242.072c-.329.008-.659,0-.988,0-.047,0-.093.005-.189.011"
                            transform="translate(-57.328 -6.899)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104299"
                            data-name="Path 104299"
                            d="M96.271,76.975l-.406.8L82.836,66.042c.09,0,.14,0,.189,0,.291-.019.581-.047.873-.056a.4.4,0,0,1,.259.074q3.24,2.909,6.471,5.827l5.439,4.9.2.185"
                            transform="translate(-58.276 -47.45)"
                            fill="#8a9193"
                          />
                        </g>
                      </g>
                      <g
                        id="_3"
                        data-name="3"
                        transform="translate(335.159 274.385)"
                      >
                        <g
                          id="Group_171712"
                          data-name="Group 171712"
                          transform="translate(120.84 -172.996)"
                        >
                          <g
                            id="Group_171713"
                            data-name="Group 171713"
                            transform="translate(80 169.409)"
                          >
                            <path
                              id="Path_104427"
                              data-name="Path 104427"
                              d="M457.112,28.125V23.4a5.628,5.628,0,0,1-3.182-1.593h0l-3.65-3.65a.5.5,0,0,1,0-.708l3.65-3.65h0a5.628,5.628,0,0,1,3.182-1.593V7.475a.5.5,0,0,1,.5-.5h4.727a5.63,5.63,0,0,1,1.593-3.183l3.65-3.65a.5.5,0,0,1,.708,0l3.65,3.65h0a5.629,5.629,0,0,1,1.593,3.183h4.727a.5.5,0,0,1,.5.5V12.2a5.629,5.629,0,0,1,3.182,1.593h0l3.651,3.65a.5.5,0,0,1,0,.708l-3.651,3.65h0a5.628,5.628,0,0,1-3.182,1.593v4.727a.5.5,0,0,1-.5.5h-4.728a5.628,5.628,0,0,1-1.593,3.182l-3.65,3.65a.5.5,0,0,1-.708,0l-3.65-3.65a5.628,5.628,0,0,1-1.593-3.182h-4.727a.5.5,0,0,1-.5-.5m1-15.979a5.643,5.643,0,0,1,3.825,1.65h0l3.5,3.5h1.995V15.3l-3.5-3.5h0a5.642,5.642,0,0,1-1.65-3.825h-4.17ZM463.349,7a5.7,5.7,0,0,1,4.589,3.312A5.7,5.7,0,0,1,472.526,7a4.629,4.629,0,0,0-1.292-2.5h0l-3.3-3.3-3.3,3.3h0A4.628,4.628,0,0,0,463.349,7m-2.9,10.8a5.7,5.7,0,0,1-3.312-4.589,4.628,4.628,0,0,0-2.5,1.292h0l-3.3,3.3,3.3,3.3h0a4.628,4.628,0,0,0,2.5,1.292,5.7,5.7,0,0,1,3.312-4.589m-2.312-4.651a4.68,4.68,0,0,0,4.634,4.15h1.251l-2.8-2.8h0a4.642,4.642,0,0,0-3.089-1.355m9.3-.512A4.679,4.679,0,0,0,463.286,8a4.642,4.642,0,0,0,1.355,3.089h0l2.8,2.8Zm6.155-4.661a5.643,5.643,0,0,1-1.65,3.825h0l-3.5,3.5V17.3h1.995l3.5-3.5h0a5.642,5.642,0,0,1,3.825-1.65V7.976Zm-5.153,5.913,2.8-2.8h0A4.642,4.642,0,0,0,472.588,8a4.68,4.68,0,0,0-4.151,4.633Zm10.3-.678a5.7,5.7,0,0,1-3.312,4.589,5.7,5.7,0,0,1,3.312,4.589,4.628,4.628,0,0,0,2.5-1.292h0l3.3-3.3-3.3-3.3h0a4.628,4.628,0,0,0-2.5-1.292m-.972,10.243a5.643,5.643,0,0,1-3.825-1.65h0l-3.5-3.5h-1.995V20.3l3.5,3.5a5.643,5.643,0,0,1,1.65,3.825h4.17Zm-.028-10.305a4.642,4.642,0,0,0-3.089,1.355h0l-2.8,2.8H473.1a4.68,4.68,0,0,0,4.634-4.15M471.848,18.3l2.8,2.8h0a4.643,4.643,0,0,0,3.089,1.355A4.68,4.68,0,0,0,473.1,18.3Zm.678,10.3a5.7,5.7,0,0,1-4.589-3.312,5.7,5.7,0,0,1-4.589,3.312,4.629,4.629,0,0,0,1.292,2.5l3.3,3.3,3.3-3.3a4.628,4.628,0,0,0,1.292-2.5m-10.243-.972a5.642,5.642,0,0,1,1.65-3.825l3.5-3.5V18.3h-1.995l-3.5,3.5h0a5.643,5.643,0,0,1-3.825,1.65v4.17Zm10.305-.028a4.642,4.642,0,0,0-1.355-3.089l-2.8-2.8v1.251a4.68,4.68,0,0,0,4.151,4.634m-5.152-5.885-2.8,2.8a4.642,4.642,0,0,0-1.355,3.089,4.68,4.68,0,0,0,4.15-4.634Zm-9.3.74A4.643,4.643,0,0,0,461.23,21.1h0l2.8-2.8h-1.251a4.68,4.68,0,0,0-4.634,4.151"
                              transform="translate(-432.89 0.005)"
                              fill="#8a9193"
                            />
                            <path
                              id="Path_104428"
                              data-name="Path 104428"
                              d="M10.91,1075.195H8.4a.666.666,0,0,0,.442-.429,1.484,1.484,0,0,0,.095-.557l-.01-.246-.626-5.275-2.589,6.506a.818.818,0,0,1-.57-.358,3.768,3.768,0,0,1-.485-.78l-2.333-5.374-.747,5.28a1.913,1.913,0,0,0,.106.713,1.389,1.389,0,0,0,.455.52H0a1.285,1.285,0,0,0,.5-.6,1.58,1.58,0,0,0,.158-.632l.759-5.366.021-.468a.7.7,0,0,0-.147-.49c-.105-.1-.193-.181-.263-.244H3.057l2.549,5.731,2.122-5.731H9.888a.744.744,0,0,0-.374.3.79.79,0,0,0-.143.432.28.28,0,0,0,.016.09c.01.033.023.067.037.1l.748,5.64a3.371,3.371,0,0,0,.232.729.939.939,0,0,0,.506.5m10.593-.021h-2.53a.906.906,0,0,0,.327-.263.505.505,0,0,0,.105-.3.814.814,0,0,0-.053-.274c-.054-.127-.093-.223-.114-.286l-.7-1.843H15.646l-.743,2.038a.975.975,0,0,0-.083.314.5.5,0,0,0,.148.348c.141.11.246.2.316.262h-2.33a3.27,3.27,0,0,0,.7-.7,2.3,2.3,0,0,0,.316-.611l2.214-5.64a.88.88,0,0,0,.073-.32.5.5,0,0,0-.1-.293.682.682,0,0,0-.237-.219h1.845l2.794,6.662a1.732,1.732,0,0,0,.4.633q.358.306.548.485m-3.349-3.786-1.119-2.888-1.122,2.89Zm13.721-3.993q-.243.158-.485.306a1.675,1.675,0,0,0-.275.887v6.829a1.6,1.6,0,0,1-.7-.216,1.648,1.648,0,0,1-.608-.49l-4.468-5.662v4.914a1.644,1.644,0,0,0,.137.754,1.179,1.179,0,0,0,.516.458H23.737a2.656,2.656,0,0,0,.485-.38,1.446,1.446,0,0,0,.264-.739v-5.278a1.666,1.666,0,0,0-.264-1.045,1.988,1.988,0,0,0-.485-.337h1.771l4.786,6.03v-4.742q0-1.173-.78-1.288Zm9.4,3.884a3.563,3.563,0,0,1-1.149,2.617,4.676,4.676,0,0,1-3.416,1.278H33.919a.975.975,0,0,0,.464-.469,1.99,1.99,0,0,0,.116-.745v-5.478a1.2,1.2,0,0,0-.179-.718l-.4-.369h2.888a4.529,4.529,0,0,1,3.321,1.267,3.564,3.564,0,0,1,1.149,2.618m-1.391.106a2.726,2.726,0,0,0-1.054-2.418,3.542,3.542,0,0,0-2.045-.529c-.147,0-.315.006-.5.016s-.385.019-.6.026v5.766a1.872,1.872,0,0,0,.379.111,2.569,2.569,0,0,0,.464.037,3.578,3.578,0,0,0,2.151-.74,2.689,2.689,0,0,0,1.2-2.27m11.963,3.789h-2.53a.907.907,0,0,0,.327-.263.505.505,0,0,0,.105-.3.812.812,0,0,0-.053-.274c-.054-.127-.093-.223-.114-.286l-.7-1.843H45.992l-.743,2.038a.976.976,0,0,0-.083.314.5.5,0,0,0,.148.348c.14.11.246.2.316.262H43.3a3.27,3.27,0,0,0,.7-.7,2.3,2.3,0,0,0,.316-.611l2.214-5.64a.881.881,0,0,0,.074-.32.5.5,0,0,0-.1-.293.683.683,0,0,0-.237-.219h1.845l2.794,6.662a1.733,1.733,0,0,0,.4.633q.358.306.548.485m-3.349-3.786-1.119-2.888-1.122,2.89Zm11.1,2.205-.653,1.581H53.956a1.325,1.325,0,0,0,.485-.527,1.15,1.15,0,0,0,.105-.5v-5.763a1.084,1.084,0,0,0-.137-.634,2.347,2.347,0,0,1-.348-.358h2.351l-.358.295a1.239,1.239,0,0,0-.222.793v5.669c.288.035.574.069.859.1a7.124,7.124,0,0,0,.786.048,3.558,3.558,0,0,0,1.09-.164,3.609,3.609,0,0,0,1.028-.543m10.5,1.581h-2.53a.909.909,0,0,0,.327-.263.508.508,0,0,0,.1-.3.816.816,0,0,0-.052-.274c-.054-.127-.093-.223-.114-.286l-.705-1.843H64.237l-.743,2.038a.975.975,0,0,0-.083.314.5.5,0,0,0,.148.348c.14.11.246.2.316.262h-2.33a3.3,3.3,0,0,0,.7-.7,2.3,2.3,0,0,0,.316-.611l2.215-5.64a.884.884,0,0,0,.073-.32.5.5,0,0,0-.1-.293.682.682,0,0,0-.237-.219h1.845l2.793,6.662a1.734,1.734,0,0,0,.4.633q.358.306.548.485m-3.349-3.786-1.119-2.888-1.123,2.89Z"
                              transform="translate(0 -1026.507)"
                              fill="#8a9193"
                            />
                            <path
                              id="Path_104429"
                              data-name="Path 104429"
                              d="M364.082,1385.458h.562v-1.76h2.077v1.76h.562v-4.007h-.562v1.76h-2.077v-1.76h-.562Zm5.855-2.032a2.058,2.058,0,1,0,4.115,0,2.058,2.058,0,0,0-4.115,0m.579,0a1.48,1.48,0,1,1,2.957,0,1.482,1.482,0,1,1-2.957,0m6.99,2.032h.562v-3.519h1.373v-.489h-3.309v.489h1.373Zm4.345,0h2.424v-.488h-1.861v-1.288h1.436v-.489h-1.436v-1.254h1.765v-.489h-2.327Zm5.088,0h2.355v-.488H387.5v-3.519h-.562Zm5.99-.46a1.875,1.875,0,0,0,1.328.528,1.155,1.155,0,0,0,1.272-1.13c0-1.3-1.941-1.078-1.941-1.907a.655.655,0,0,1,.727-.584,1.412,1.412,0,0,1,.88.347l.255-.466a1.641,1.641,0,0,0-1.135-.4,1.187,1.187,0,0,0-1.294,1.118c0,1.232,1.941,1.045,1.941,1.913a.617.617,0,0,1-.692.59,1.582,1.582,0,0,1-1.022-.431Zm5.242.46h.562v-1.481h.9a1.21,1.21,0,0,0,1.26-1.272,1.2,1.2,0,0,0-1.26-1.254h-1.464Zm.562-1.969v-1.549h.817a.708.708,0,0,1,.772.766.723.723,0,0,1-.778.784Zm6.966,1.969h.584l-1.441-4.007h-.59l-1.442,4.007h.579l.4-1.152h1.51ZM404.554,1382s.085.363.153.567l.443,1.272h-1.215l.448-1.272c.068-.2.159-.567.159-.567Z"
                              transform="translate(-350.136 -1328.468)"
                              fill="#8a9193"
                            />
                          </g>
                        </g>
                      </g>
                      <g
                        id="_2"
                        data-name="2"
                        transform="translate(288 280.797)"
                        clip-path="url(#clip-path-3)"
                      >
                        <path
                          id="Path_104300"
                          data-name="Path 104300"
                          d="M695.408,57.171a.434.434,0,1,0-.434-.434.434.434,0,0,0,.434.434"
                          transform="translate(-666.989 -54.035)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104301"
                          data-name="Path 104301"
                          d="M641.051,73.67a.548.548,0,1,0-.548-.548.548.548,0,0,0,.548.548"
                          transform="translate(-614.711 -69.651)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104302"
                          data-name="Path 104302"
                          d="M582.671,102.657a.652.652,0,1,0,.652-.652.652.652,0,0,0-.652.652"
                          transform="translate(-559.208 -97.897)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104303"
                          data-name="Path 104303"
                          d="M529.307,146.768a.768.768,0,1,0-.768-.768.768.768,0,0,0,.768.768"
                          transform="translate(-507.256 -139.384)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104304"
                          data-name="Path 104304"
                          d="M480.821,203.563a.9.9,0,1,0,.9-.9.9.9,0,0,0-.9.9"
                          transform="translate(-461.459 -194.507)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104305"
                          data-name="Path 104305"
                          d="M580.51,13.374a.434.434,0,1,0-.532-.307.434.434,0,0,0,.532.307"
                          transform="translate(-556.609 -12.016)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104306"
                          data-name="Path 104306"
                          d="M532.886,42.583a.548.548,0,1,0-.672-.388.548.548,0,0,0,.672.388"
                          transform="translate(-510.765 -39.833)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104307"
                          data-name="Path 104307"
                          d="M485.352,85.428a.652.652,0,1,0-.8-.461.652.652,0,0,0,.8.461"
                          transform="translate(-465.02 -80.757)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104308"
                          data-name="Path 104308"
                          d="M444.1,140.034a.768.768,0,1,0,.543-.941.768.768,0,0,0-.543.941"
                          transform="translate(-426.193 -133.467)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104309"
                          data-name="Path 104309"
                          d="M415.32,206.632a.9.9,0,1,0-.633,1.1.9.9,0,0,0,.633-1.1"
                          transform="translate(-396.906 -197.674)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104310"
                          data-name="Path 104310"
                          d="M458.195.811A.434.434,0,1,0,457.6.652a.434.434,0,0,0,.593.159"
                          transform="translate(-439.119 -0.001)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104311"
                          data-name="Path 104311"
                          d="M420.365,40.553a.548.548,0,1,0-.749-.2.548.548,0,0,0,.749.2"
                          transform="translate(-402.648 -37.937)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104312"
                          data-name="Path 104312"
                          d="M386.1,93.514a.652.652,0,1,0-.891-.239.652.652,0,0,0,.891.239"
                          transform="translate(-369.611 -88.58)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104313"
                          data-name="Path 104313"
                          d="M362.053,156.411A.768.768,0,1,0,361,156.13a.768.768,0,0,0,1.049.281"
                          transform="translate(-346.368 -148.737)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104314"
                          data-name="Path 104314"
                          d="M349.574,227.913a.9.9,0,1,0,.328-1.223.9.9,0,0,0-.328,1.223"
                          transform="translate(-335.382 -217.446)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104315"
                          data-name="Path 104315"
                          d="M336.8,20.333a.434.434,0,1,0-.614,0,.434.434,0,0,0,.614,0"
                          transform="translate(-322.522 -18.803)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104316"
                          data-name="Path 104316"
                          d="M311.154,67.716a.548.548,0,1,0-.776,0,.548.548,0,0,0,.776,0"
                          transform="translate(-297.726 -64.091)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104317"
                          data-name="Path 104317"
                          d="M292.318,127.016a.652.652,0,1,0-.923,0,.652.652,0,0,0,.923,0"
                          transform="translate(-279.479 -120.833)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104318"
                          data-name="Path 104318"
                          d="M285.992,193.188a.768.768,0,1,0-1.086,0,.768.768,0,0,0,1.086,0"
                          transform="translate(-273.217 -184.15)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104319"
                          data-name="Path 104319"
                          d="M294.394,264.592a.9.9,0,1,0-1.266,0,.9.9,0,0,0,1.266,0"
                          transform="translate(-281.072 -252.47)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104320"
                          data-name="Path 104320"
                          d="M223.99,70.768a.434.434,0,1,0-.159-.593.434.434,0,0,0,.159.593"
                          transform="translate(-214.762 -67.14)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104321"
                          data-name="Path 104321"
                          d="M211.94,122.417a.548.548,0,1,0-.2-.749.548.548,0,0,0,.2.749"
                          transform="translate(-203.143 -116.505)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104322"
                          data-name="Path 104322"
                          d="M209.51,183.884a.652.652,0,1,0-.239-.891.652.652,0,0,0,.239.891"
                          transform="translate(-200.76 -175.311)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104323"
                          data-name="Path 104323"
                          d="M220.7,247.624a.768.768,0,1,0,1.049-.281.768.768,0,0,0-1.049.281"
                          transform="translate(-211.718 -237.284)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104324"
                          data-name="Path 104324"
                          d="M247.763,313.4a.9.9,0,1,0,1.223-.328.9.9,0,0,0-1.223.328"
                          transform="translate(-237.671 -300.352)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104325"
                          data-name="Path 104325"
                          d="M128.676,148.521a.434.434,0,1,0-.307-.532.434.434,0,0,0,.307.532"
                          transform="translate(-123.185 -141.721)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104326"
                          data-name="Path 104326"
                          d="M130.627,200.059a.548.548,0,1,0,.672-.388.548.548,0,0,0-.672.388"
                          transform="translate(-125.349 -191.613)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104327"
                          data-name="Path 104327"
                          d="M144.672,259.209a.652.652,0,1,0,.8-.461.652.652,0,0,0-.8.461"
                          transform="translate(-138.825 -248.307)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104328"
                          data-name="Path 104328"
                          d="M173.6,318.812a.768.768,0,1,0-.543-.94.768.768,0,0,0,.543.94"
                          transform="translate(-166.068 -304.525)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104329"
                          data-name="Path 104329"
                          d="M218.636,373.977a.9.9,0,1,0-1.1.633.9.9,0,0,0,1.1-.633"
                          transform="translate(-208.143 -357.836)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104330"
                          data-name="Path 104330"
                          d="M56.737,248.3a.434.434,0,1,0-.434-.434.434.434,0,0,0,.434.434"
                          transform="translate(-54.036 -237.465)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104331"
                          data-name="Path 104331"
                          d="M72.573,296.778a.548.548,0,1,0,.548-.548.548.548,0,0,0-.548.548"
                          transform="translate(-69.651 -284.301)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104332"
                          data-name="Path 104332"
                          d="M102.657,350.2a.652.652,0,1,0-.652-.652.652.652,0,0,0,.652.652"
                          transform="translate(-97.897 -334.85)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104333"
                          data-name="Path 104333"
                          d="M146.767,398.062a.768.768,0,1,0-.768.768.768.768,0,0,0,.768-.768"
                          transform="translate(-139.383 -381.296)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104334"
                          data-name="Path 104334"
                          d="M204.458,439.57a.9.9,0,1,0-.9.9.9.9,0,0,0,.9-.9"
                          transform="translate(-194.506 -421.009)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104335"
                          data-name="Path 104335"
                          d="M13.067,363.288a.434.434,0,1,0-.532-.307.434.434,0,0,0,.532.307"
                          transform="translate(-12.016 -347.84)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104336"
                          data-name="Path 104336"
                          d="M42.194,405.609a.548.548,0,1,0-.672-.388.548.548,0,0,0,.672.388"
                          transform="translate(-39.832 -388.241)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104337"
                          data-name="Path 104337"
                          d="M84.167,447.851a.652.652,0,1,0,.461-.8.652.652,0,0,0-.461.8"
                          transform="translate(-80.757 -429.029)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104338"
                          data-name="Path 104338"
                          d="M140.034,483.258a.768.768,0,1,0-.94-.543.768.768,0,0,0,.94.543"
                          transform="translate(-133.467 -462.349)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104339"
                          data-name="Path 104339"
                          d="M207.1,507.685a.9.9,0,1,0-1.1-.633.9.9,0,0,0,1.1.633"
                          transform="translate(-197.674 -485.552)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104340"
                          data-name="Path 104340"
                          d="M.811,485.073a.434.434,0,1,0-.159.593.434.434,0,0,0,.159-.593"
                          transform="translate(0 -465.331)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104341"
                          data-name="Path 104341"
                          d="M39.8,517.26a.548.548,0,1,0,.749.2.548.548,0,0,0-.749-.2"
                          transform="translate(-37.937 -496.36)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104342"
                          data-name="Path 104342"
                          d="M93.514,546.772a.652.652,0,1,0-.239.891.652.652,0,0,0,.239-.891"
                          transform="translate(-88.58 -524.441)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104343"
                          data-name="Path 104343"
                          d="M156.411,565.31a.768.768,0,1,0-.281,1.049.768.768,0,0,0,.281-1.049"
                          transform="translate(-148.737 -542.177)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104344"
                          data-name="Path 104344"
                          d="M227.912,571.705a.9.9,0,1,0-1.223-.328.9.9,0,0,0,1.223.328"
                          transform="translate(-217.445 -547.08)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104345"
                          data-name="Path 104345"
                          d="M19.719,606.475a.434.434,0,1,0,.614,0,.434.434,0,0,0-.614,0"
                          transform="translate(-18.803 -581.932)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104346"
                          data-name="Path 104346"
                          d="M66.939,626.676a.548.548,0,1,0,.776,0,.548.548,0,0,0-.776,0"
                          transform="translate(-64.09 -601.287)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104347"
                          data-name="Path 104347"
                          d="M126.094,640.556a.652.652,0,1,0,.923,0,.652.652,0,0,0-.923,0"
                          transform="translate(-120.833 -614.579)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104348"
                          data-name="Path 104348"
                          d="M192.1,641.378a.768.768,0,1,0,1.086,0,.768.768,0,0,0-1.086,0"
                          transform="translate(-184.15 -615.335)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104349"
                          data-name="Path 104349"
                          d="M263.326,626.892a.9.9,0,1,0,1.266,0,.9.9,0,0,0-1.266,0"
                          transform="translate(-252.47 -601.396)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104350"
                          data-name="Path 104350"
                          d="M70.609,718.685a.434.434,0,1,0,.159.593.434.434,0,0,0-.159-.593"
                          transform="translate(-67.14 -689.689)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104351"
                          data-name="Path 104351"
                          d="M122.216,725.137a.548.548,0,1,0,.2.749.548.548,0,0,0-.2-.749"
                          transform="translate(-116.505 -695.866)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104352"
                          data-name="Path 104352"
                          d="M183.883,723.359a.652.652,0,1,0-.891.239.652.652,0,0,0,.891-.239"
                          transform="translate(-175.31 -693.292)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104353"
                          data-name="Path 104353"
                          d="M247.624,706.659a.768.768,0,1,0-.281-1.049.768.768,0,0,0,.281,1.049"
                          transform="translate(-237.284 -676.828)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104354"
                          data-name="Path 104354"
                          d="M313.4,673.516a.9.9,0,1,0-.328-1.223.9.9,0,0,0,.328,1.223"
                          transform="translate(-300.352 -644.791)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104355"
                          data-name="Path 104355"
                          d="M148.213,814.059a.434.434,0,1,0,.307.532.434.434,0,0,0-.307-.532"
                          transform="translate(-141.72 -781.264)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104356"
                          data-name="Path 104356"
                          d="M200.343,806.137a.548.548,0,1,0,.388.672.548.548,0,0,0-.388-.672"
                          transform="translate(-191.613 -773.658)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104357"
                          data-name="Path 104357"
                          d="M259.545,786.934a.652.652,0,1,0,.461.8.652.652,0,0,0-.461-.8"
                          transform="translate(-248.306 -755.224)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104358"
                          data-name="Path 104358"
                          d="M318.811,753.756a.768.768,0,1,0-.941.543.768.768,0,0,0,.941-.543"
                          transform="translate(-304.524 -722.476)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104359"
                          data-name="Path 104359"
                          d="M374.609,703.736a.9.9,0,1,0-1.1.633.9.9,0,0,0,1.1-.633"
                          transform="translate(-357.835 -674.316)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104360"
                          data-name="Path 104360"
                          d="M247.862,886.1a.434.434,0,1,0,.434.434.434.434,0,0,0-.434-.434"
                          transform="translate(-237.465 -850.419)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104361"
                          data-name="Path 104361"
                          d="M296.778,864.16a.548.548,0,1,0,.548.548.548.548,0,0,0-.548-.548"
                          transform="translate(-284.301 -829.362)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104362"
                          data-name="Path 104362"
                          d="M350.2,830.216a.652.652,0,1,0-.652.652.652.652,0,0,0,.652-.652"
                          transform="translate(-334.85 -796.159)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104363"
                          data-name="Path 104363"
                          d="M398.062,780.6a.768.768,0,1,0,.768.768.768.768,0,0,0-.768-.768"
                          transform="translate(-381.296 -749.17)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104364"
                          data-name="Path 104364"
                          d="M440.465,717.724a.9.9,0,1,0-.9.9.9.9,0,0,0,.9-.9"
                          transform="translate(-421.009 -687.963)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104365"
                          data-name="Path 104365"
                          d="M362.756,929.892a.434.434,0,1,0,.532.307.434.434,0,0,0-.532-.307"
                          transform="translate(-347.84 -892.432)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104366"
                          data-name="Path 104366"
                          d="M404.937,895.241a.548.548,0,1,0,.672.388.548.548,0,0,0-.672-.388"
                          transform="translate(-388.241 -859.174)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104367"
                          data-name="Path 104367"
                          d="M447.515,847.439a.652.652,0,1,0,.8.461.652.652,0,0,0-.8-.461"
                          transform="translate(-429.03 -813.293)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104368"
                          data-name="Path 104368"
                          d="M483.258,787.327a.768.768,0,1,0-.543.94.768.768,0,0,0,.543-.94"
                          transform="translate(-462.349 -755.076)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104369"
                          data-name="Path 104369"
                          d="M505.954,714.644a.9.9,0,1,0,.633-1.1.9.9,0,0,0-.633,1.1"
                          transform="translate(-485.551 -684.785)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104370"
                          data-name="Path 104370"
                          d="M485.073,942.458a.434.434,0,1,0,.593.159.434.434,0,0,0-.593-.159"
                          transform="translate(-465.331 -904.451)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104371"
                          data-name="Path 104371"
                          d="M517.46,897.274a.548.548,0,1,0,.749.2.549.549,0,0,0-.749-.2"
                          transform="translate(-496.36 -861.072)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104372"
                          data-name="Path 104372"
                          d="M546.772,839.355a.652.652,0,1,0,.891.239.652.652,0,0,0-.891-.239"
                          transform="translate(-524.441 -805.472)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104373"
                          data-name="Path 104373"
                          d="M565.309,770.952a.768.768,0,1,0,1.049.281.768.768,0,0,0-1.049-.281"
                          transform="translate(-542.177 -739.808)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104374"
                          data-name="Path 104374"
                          d="M571.7,693.366a.9.9,0,1,0-.328,1.223.9.9,0,0,0,.328-1.223"
                          transform="translate(-547.079 -665.015)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104375"
                          data-name="Path 104375"
                          d="M606.474,922.937a.434.434,0,1,0,.614,0,.434.434,0,0,0-.614,0"
                          transform="translate(-581.931 -885.65)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104376"
                          data-name="Path 104376"
                          d="M626.676,870.114a.548.548,0,1,0,.776,0,.548.548,0,0,0-.776,0"
                          transform="translate(-601.287 -834.922)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104377"
                          data-name="Path 104377"
                          d="M640.556,805.858a.652.652,0,1,0,.923,0,.652.652,0,0,0-.923,0"
                          transform="translate(-614.579 -773.224)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104378"
                          data-name="Path 104378"
                          d="M641.377,734.182a.768.768,0,1,0,1.086,0,.768.768,0,0,0-1.086,0"
                          transform="translate(-615.334 -704.402)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104379"
                          data-name="Path 104379"
                          d="M628.158,657.96a.9.9,0,1,0-1.266,0,.9.9,0,0,0,1.266,0"
                          transform="translate(-601.396 -629.998)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104380"
                          data-name="Path 104380"
                          d="M719.278,872.5a.434.434,0,1,0,.159.593.434.434,0,0,0-.159-.593"
                          transform="translate(-689.689 -837.311)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104381"
                          data-name="Path 104381"
                          d="M725.886,815.41a.548.548,0,1,0,.2.749.548.548,0,0,0-.2-.749"
                          transform="translate(-695.866 -782.504)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104382"
                          data-name="Path 104382"
                          d="M723.359,748.986a.652.652,0,1,0,.239.891.652.652,0,0,0-.239-.891"
                          transform="translate(-693.292 -718.742)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104383"
                          data-name="Path 104383"
                          d="M706.659,679.739a.768.768,0,1,0-1.049.281.768.768,0,0,0,1.049-.281"
                          transform="translate(-676.828 -651.262)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104384"
                          data-name="Path 104384"
                          d="M673.516,607.877a.9.9,0,1,0-1.223.328.9.9,0,0,0,1.223-.328"
                          transform="translate(-644.791 -582.11)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104385"
                          data-name="Path 104385"
                          d="M814.591,794.745a.434.434,0,1,0,.307.532.434.434,0,0,0-.307-.532"
                          transform="translate(-781.264 -762.727)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104386"
                          data-name="Path 104386"
                          d="M807.2,737.764a.548.548,0,1,0-.672.388.548.548,0,0,0,.672-.388"
                          transform="translate(-773.657 -707.393)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104387"
                          data-name="Path 104387"
                          d="M788.195,673.658a.652.652,0,1,0-.8.461.653.653,0,0,0,.8-.461"
                          transform="translate(-755.224 -645.743)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104388"
                          data-name="Path 104388"
                          d="M753.755,608.548a.768.768,0,1,0,.543.941.768.768,0,0,0-.543-.941"
                          transform="translate(-722.475 -584.018)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104389"
                          data-name="Path 104389"
                          d="M702.638,547.3a.9.9,0,1,0,1.1-.633.9.9,0,0,0-1.1.633"
                          transform="translate(-674.315 -524.623)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104390"
                          data-name="Path 104390"
                          d="M886.534,694.974a.434.434,0,1,0,.434.434.434.434,0,0,0-.434-.434"
                          transform="translate(-850.419 -666.989)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104391"
                          data-name="Path 104391"
                          d="M865.257,641.051a.548.548,0,1,0-.548.548.548.548,0,0,0,.548-.548"
                          transform="translate(-829.362 -614.711)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104392"
                          data-name="Path 104392"
                          d="M830.215,582.671a.652.652,0,1,0,.652.652.652.652,0,0,0-.652-.652"
                          transform="translate(-796.158 -559.208)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104393"
                          data-name="Path 104393"
                          d="M780.6,529.307a.768.768,0,1,0,.768-.768.768.768,0,0,0-.768.768"
                          transform="translate(-749.169 -507.256)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104394"
                          data-name="Path 104394"
                          d="M718.619,481.717a.9.9,0,1,0-.9.9.9.9,0,0,0,.9-.9"
                          transform="translate(-687.963 -461.459)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104395"
                          data-name="Path 104395"
                          d="M930.2,579.978a.434.434,0,1,0,.532.307.434.434,0,0,0-.532-.307"
                          transform="translate(-892.432 -556.609)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104396"
                          data-name="Path 104396"
                          d="M895.629,532.214a.548.548,0,1,0,.672.388.548.548,0,0,0-.672-.388"
                          transform="translate(-859.174 -510.765)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104397"
                          data-name="Path 104397"
                          d="M848.7,485.016a.652.652,0,1,0-.461.8.652.652,0,0,0,.461-.8"
                          transform="translate(-813.293 -465.021)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104398"
                          data-name="Path 104398"
                          d="M788.266,444.646a.768.768,0,1,0-.543.94.768.768,0,0,0,.543-.94"
                          transform="translate(-755.075 -426.194)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104399"
                          data-name="Path 104399"
                          d="M714.644,415.32a.9.9,0,1,0-1.1-.633.9.9,0,0,0,1.1.633"
                          transform="translate(-684.785 -396.906)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104400"
                          data-name="Path 104400"
                          d="M943.209,457.761a.434.434,0,1,0-.159.593.434.434,0,0,0,.159-.593"
                          transform="translate(-904.45 -439.119)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104401"
                          data-name="Path 104401"
                          d="M897.474,419.617a.548.548,0,1,0,.749.2.549.549,0,0,0-.749-.2"
                          transform="translate(-861.072 -402.649)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104402"
                          data-name="Path 104402"
                          d="M839.354,386.1a.652.652,0,1,0,.239-.891.652.652,0,0,0-.239.891"
                          transform="translate(-805.471 -369.611)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104403"
                          data-name="Path 104403"
                          d="M770.952,362.054a.768.768,0,1,0,.281-1.049.768.768,0,0,0-.281,1.049"
                          transform="translate(-739.808 -346.369)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104404"
                          data-name="Path 104404"
                          d="M693.366,349.574a.9.9,0,1,0,1.223.328.9.9,0,0,0-1.223-.328"
                          transform="translate(-665.015 -335.382)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104405"
                          data-name="Path 104405"
                          d="M923.551,336.8a.434.434,0,1,0-.614,0,.434.434,0,0,0,.614,0"
                          transform="translate(-885.65 -322.523)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104406"
                          data-name="Path 104406"
                          d="M870.891,311.154a.548.548,0,1,0-.776,0,.548.548,0,0,0,.776,0"
                          transform="translate(-834.923 -297.726)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104407"
                          data-name="Path 104407"
                          d="M806.78,291.4a.652.652,0,1,0,0,.923.652.652,0,0,0,0-.923"
                          transform="translate(-773.223 -279.479)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104408"
                          data-name="Path 104408"
                          d="M735.268,285.993a.768.768,0,1,0-1.086,0,.768.768,0,0,0,1.086,0"
                          transform="translate(-704.402 -273.218)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104409"
                          data-name="Path 104409"
                          d="M657.96,294.394a.9.9,0,1,0-1.266,0,.9.9,0,0,0,1.266,0"
                          transform="translate(-629.998 -281.072)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104410"
                          data-name="Path 104410"
                          d="M872.659,224.583a.434.434,0,1,0-.159-.593.434.434,0,0,0,.159.593"
                          transform="translate(-837.31 -214.761)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104411"
                          data-name="Path 104411"
                          d="M815.61,212.69a.548.548,0,1,0-.2-.749.548.548,0,0,0,.2.749"
                          transform="translate(-782.504 -203.143)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104412"
                          data-name="Path 104412"
                          d="M748.985,209.51a.652.652,0,1,0,.891-.239.652.652,0,0,0-.891.239"
                          transform="translate(-718.741 -200.76)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104413"
                          data-name="Path 104413"
                          d="M679.739,220.7a.768.768,0,1,0,.281,1.049.768.768,0,0,0-.281-1.049"
                          transform="translate(-651.262 -211.718)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104414"
                          data-name="Path 104414"
                          d="M608.205,248.986a.9.9,0,1,0-1.223.328.9.9,0,0,0,1.223-.328"
                          transform="translate(-582.11 -237.671)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104415"
                          data-name="Path 104415"
                          d="M795.053,129.208a.434.434,0,1,0-.307-.532.434.434,0,0,0,.307.532"
                          transform="translate(-762.728 -123.186)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104416"
                          data-name="Path 104416"
                          d="M737.48,131.687a.548.548,0,1,0-.388-.672.549.549,0,0,0,.388.672"
                          transform="translate(-707.393 -125.349)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104417"
                          data-name="Path 104417"
                          d="M673.322,145.933a.652.652,0,1,0-.461-.8.652.652,0,0,0,.461.8"
                          transform="translate(-645.744 -138.825)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104418"
                          data-name="Path 104418"
                          d="M608.548,173.606a.768.768,0,1,0,.94-.543.768.768,0,0,0-.94.543"
                          transform="translate(-584.018 -166.069)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104419"
                          data-name="Path 104419"
                          d="M546.665,217.541a.9.9,0,1,0,1.1-.633.9.9,0,0,0-1.1.633"
                          transform="translate(-524.623 -208.143)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104420"
                          data-name="Path 104420"
                          d="M340.156,331.4a6.211,6.211,0,1,0-6.211,6.211,6.211,6.211,0,0,0,6.211-6.211"
                          transform="translate(-314.536 -312.094)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104421"
                          data-name="Path 104421"
                          d="M1168.056,310.5l-1.517-3.771a.2.2,0,0,0-.187-.126h-6.718a.2.2,0,0,0-.187.126l-1.517,3.771h-1.906l6.312-15.271h1.334l6.291,15.271Zm-5.062-12.789a.2.2,0,0,0-.187.127l-2.8,7.027a.2.2,0,0,0,.187.276h5.591a.2.2,0,0,0,.187-.276l-2.8-7.027a.2.2,0,0,0-.187-.127"
                          transform="translate(-1109.474 -283.345)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104422"
                          data-name="Path 104422"
                          d="M1601.808,314.038l-5.129-6.594a.2.2,0,0,0-.159-.078h-.865a.2.2,0,0,0-.2.2v6.471h-1.8V298.915h3.94a6.223,6.223,0,0,1,3.813.89,3.915,3.915,0,0,1,1.5,3.262,4.172,4.172,0,0,1-.5,2.023,3.168,3.168,0,0,1-1.369,1.324,7.978,7.978,0,0,1-2.3.656.2.2,0,0,0-.13.324l5.223,6.645h-2.033Zm-6.153-13.641a.2.2,0,0,0-.2.2v5.147a.2.2,0,0,0,.2.2h1.726a4,4,0,0,0,2.711-.635,2.867,2.867,0,0,0,.974-2.182,2.669,2.669,0,0,0-1.144-2.266,4.151,4.151,0,0,0-2.393-.466Z"
                          transform="translate(-1529.48 -286.878)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104423"
                          data-name="Path 104423"
                          d="M1935.386,314.038l-4.286-10.914a.2.2,0,0,0-.187-.128l-.025,0a.2.2,0,0,0-.175.175l-1.363,10.866h-1.694l1.927-15.123H1931l4.642,11.787a.2.2,0,0,0,.187.128h0a.2.2,0,0,0,.187-.128l4.621-11.787h1.419l1.927,15.123h-1.694l-1.363-10.866a.2.2,0,0,0-.175-.175l-.025,0a.2.2,0,0,0-.187.128l-4.286,10.914Z"
                          transform="translate(-1850.032 -286.878)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104424"
                          data-name="Path 104424"
                          d="M2427.811,310.5l-1.517-3.771a.2.2,0,0,0-.187-.126h-6.718a.2.2,0,0,0-.187.126l-1.517,3.771h-1.906l6.312-15.271h1.334l6.291,15.271Zm-5.062-12.789a.2.2,0,0,0-.187.127l-2.8,7.027a.2.2,0,0,0,.187.276h5.591a.2.2,0,0,0,.187-.276l-2.8-7.027a.2.2,0,0,0-.187-.127"
                          transform="translate(-2318.501 -283.345)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104425"
                          data-name="Path 104425"
                          d="M2853.408,314.037V298.914h3.749c2.832,0,4.752.536,6.227,1.737a6.414,6.414,0,0,1,1.824,2.475,9.183,9.183,0,0,1,0,6.7,6.416,6.416,0,0,1-1.824,2.476c-1.475,1.2-3.4,1.737-6.227,1.737Zm2.065-13.6a.2.2,0,0,0-.2.2v11.671a.2.2,0,0,0,.2.2h2a6.489,6.489,0,0,0,4.681-1.44,6.888,6.888,0,0,0,0-9.193,6.49,6.49,0,0,0-4.681-1.44Z"
                          transform="translate(-2738.507 -286.877)"
                          fill="#8a9193"
                        />
                        <path
                          id="Path_104426"
                          data-name="Path 104426"
                          d="M3228.9,310.5l-1.517-3.771a.2.2,0,0,0-.187-.126h-6.718a.2.2,0,0,0-.187.126l-1.517,3.771h-1.906l6.312-15.271h1.334l6.291,15.271Zm-5.062-12.789a.2.2,0,0,0-.187.127l-2.8,7.027a.2.2,0,0,0,.187.276h5.591a.2.2,0,0,0,.187-.276l-2.8-7.027a.2.2,0,0,0-.187-.127"
                          transform="translate(-3087.331 -283.345)"
                          fill="#8a9193"
                        />
                      </g>
                      <g
                        id="Group_171715"
                        data-name="Group 171715"
                        transform="translate(440 361.798)"
                      >
                        <g
                          id="Group_171714"
                          data-name="Group 171714"
                          transform="translate(270 -90)"
                          clip-path="url(#clip-path-4)"
                        >
                          <path
                            id="Path_104430"
                            data-name="Path 104430"
                            d="M250.965,77.48a4.334,4.334,0,0,0-1.99-5.681,4.334,4.334,0,0,0,1.99,5.681"
                            transform="translate(-229.844 -66.388)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104431"
                            data-name="Path 104431"
                            d="M152.836,139.569a4.189,4.189,0,0,0,2.978,1.013,4.2,4.2,0,0,0-4.418-3.81,4.189,4.189,0,0,0,1.44,2.8"
                            transform="translate(-139.985 -126.458)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104432"
                            data-name="Path 104432"
                            d="M141.129,236.937a4.237,4.237,0,0,0-3.181-.053,4.248,4.248,0,0,0,5.432,2.3,4.237,4.237,0,0,0-2.252-2.247"
                            transform="translate(-127.551 -218.768)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104433"
                            data-name="Path 104433"
                            d="M69.748,248.577a3.662,3.662,0,0,0-2.726.355,3.671,3.671,0,0,0,4.934,1.282,3.661,3.661,0,0,0-2.208-1.638"
                            transform="translate(-61.971 -229.732)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104434"
                            data-name="Path 104434"
                            d="M169.022,334.765a4.693,4.693,0,0,0,3.5-.437,4.705,4.705,0,0,0-6.317-1.676,4.694,4.694,0,0,0,2.82,2.113"
                            transform="translate(-153.675 -307.029)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104435"
                            data-name="Path 104435"
                            d="M91.714,348.532a3.787,3.787,0,0,0-5.238-.473,3.787,3.787,0,0,0,5.238.473"
                            transform="translate(-79.958 -321.052)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104436"
                            data-name="Path 104436"
                            d="M128.269,386.925a4.3,4.3,0,0,0-1.782,2.689,4.308,4.308,0,0,0,4.932-3.386,4.3,4.3,0,0,0-3.149.7"
                            transform="translate(-116.954 -357.063)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104437"
                            data-name="Path 104437"
                            d="M301.765,124.8a5.263,5.263,0,0,0-1.482-3.663,5.277,5.277,0,0,0,0,7.328,5.262,5.262,0,0,0,1.477-3.665"
                            transform="translate(-276.285 -112.012)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104438"
                            data-name="Path 104438"
                            d="M306.362,35.217a3.813,3.813,0,0,0-1.074-2.654,3.823,3.823,0,0,0,0,5.31,3.814,3.814,0,0,0,1.07-2.656"
                            transform="translate(-281.289 -30.109)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104439"
                            data-name="Path 104439"
                            d="M353.9,75.042a4.323,4.323,0,0,0-.152-3.242,4.334,4.334,0,0,0-1.99,5.681,4.323,4.323,0,0,0,2.142-2.439"
                            transform="translate(-324.881 -66.388)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104440"
                            data-name="Path 104440"
                            d="M428.294,137.785a4.19,4.19,0,0,0-1.44,2.8,4.2,4.2,0,0,0,4.418-3.81,4.19,4.19,0,0,0-2.978,1.013"
                            transform="translate(-394.682 -126.458)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104441"
                            data-name="Path 104441"
                            d="M432.276,236.885a4.248,4.248,0,0,0-5.432,2.3,4.248,4.248,0,0,0,5.432-2.3"
                            transform="translate(-394.673 -218.768)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104442"
                            data-name="Path 104442"
                            d="M507.1,250.569a3.661,3.661,0,0,0,2.208-1.637,3.671,3.671,0,0,0-4.934,1.282,3.662,3.662,0,0,0,2.726.355"
                            transform="translate(-466.363 -229.732)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104443"
                            data-name="Path 104443"
                            d="M390.356,334.765a4.693,4.693,0,0,0,2.82-2.113,4.705,4.705,0,0,0-6.317,1.676,4.693,4.693,0,0,0,3.5.437"
                            transform="translate(-357.702 -307.029)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104444"
                            data-name="Path 104444"
                            d="M483.612,349.353a3.777,3.777,0,0,0,2.523-1.294,3.787,3.787,0,0,0-5.238.473,3.777,3.777,0,0,0,2.714.821"
                            transform="translate(-444.653 -321.052)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104445"
                            data-name="Path 104445"
                            d="M448.1,386.925a4.3,4.3,0,0,0-3.149-.7,4.308,4.308,0,0,0,4.932,3.386,4.3,4.3,0,0,0-1.782-2.689"
                            transform="translate(-411.414 -357.063)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104446"
                            data-name="Path 104446"
                            d="M49.364,0a21.935,21.935,0,0,0-4.991,43.294l.3.069.251-.172a11.7,11.7,0,0,0,4.443-5.744,11.7,11.7,0,0,0,4.443,5.743l.251.172.3-.069A21.935,21.935,0,0,0,49.364,0m2.257,36.948a13.724,13.724,0,0,0,4.865,4.261,20.323,20.323,0,0,1-2.145.664,10.46,10.46,0,0,1-4.266-7.8,13.638,13.638,0,0,0,1.546,2.87M58.66,16.015l-.036.023a17.266,17.266,0,0,0-8.358,8.372,22.128,22.128,0,0,1,3.683-9.495,22.487,22.487,0,0,1,1.709-2.181l0,0,.068-.08A21.956,21.956,0,0,1,63.54,7.072a20.8,20.8,0,0,1,1.583,1.691,13.319,13.319,0,0,1-6.463,7.252M51.385,29.979a7.992,7.992,0,0,1,3.486-5.212,10.159,10.159,0,0,1,5.446-1.688h.129A10.365,10.365,0,0,1,69.1,27.711,20.346,20.346,0,0,1,65.387,34.8,20.767,20.767,0,0,1,58.154,40.5a12.307,12.307,0,0,1-5.438-4.327l-.037-.052a8,8,0,0,1-1.294-6.146M60.3,21.693a11.674,11.674,0,0,0-8.167,3.524,12.377,12.377,0,0,0-1.307,1.552,16,16,0,0,1,5.52-7.747,15.671,15.671,0,0,1,9.538-3.205,15.959,15.959,0,0,1,3.193.323,20.5,20.5,0,0,1,.833,5.793,20.905,20.905,0,0,1-.39,4.03,11.7,11.7,0,0,0-9.087-4.27H60.3Zm2.576-7a14.612,14.612,0,0,0,3.228-4.66,20.531,20.531,0,0,1,2.468,4.606,17.333,17.333,0,0,0-5.7.054M48.653,34.078a10.46,10.46,0,0,1-4.266,7.795,20.306,20.306,0,0,1-2.145-.664,13.7,13.7,0,0,0,6.411-7.131M35.189,7.073a21.947,21.947,0,0,1,7.9,5.684l.021.025.029.034.022.024a22.52,22.52,0,0,1,1.6,2.051,22.126,22.126,0,0,1,3.7,9.519,17.319,17.319,0,0,0-7.934-8.167l0-.007-.052-.024a13.484,13.484,0,0,1-6.873-7.449,20.788,20.788,0,0,1,1.583-1.69M47.9,26.769A12.375,12.375,0,0,0,46.6,25.219a11.673,11.673,0,0,0-8.167-3.525h-.147a11.7,11.7,0,0,0-9.075,4.27,20.9,20.9,0,0,1-.39-4.03,20.5,20.5,0,0,1,.833-5.793,15.958,15.958,0,0,1,3.193-.323,15.671,15.671,0,0,1,9.538,3.205,16,16,0,0,1,5.52,7.747m-9.489-3.69a10.157,10.157,0,0,1,5.446,1.689A8.086,8.086,0,0,1,46.05,36.125l-.036.052A12.307,12.307,0,0,1,40.575,40.5,20.768,20.768,0,0,1,33.342,34.8a20.343,20.343,0,0,1-3.709-7.085,10.326,10.326,0,0,1,8.779-4.632m6.454-21.2a20.7,20.7,0,0,1,9,0,6.991,6.991,0,0,1,.825,9.855,23.9,23.9,0,0,0-1.881,2.39,23.32,23.32,0,0,0-3.442,7.633A23.317,23.317,0,0,0,45.9,14.1a23.865,23.865,0,0,0-1.788-2.279,6.989,6.989,0,0,1,.749-9.941M36.331,6.06a20.48,20.48,0,0,1,6.044-3.449A8.31,8.31,0,0,0,41,7.213a8.472,8.472,0,0,0,.2,1.845,23.489,23.489,0,0,0-4.873-3M30.156,14.64a20.529,20.529,0,0,1,2.469-4.608A14.751,14.751,0,0,0,35.878,14.7a17.252,17.252,0,0,0-5.722-.059M57.524,9.059a8.461,8.461,0,0,0,.205-1.846,8.311,8.311,0,0,0-1.376-4.6A20.479,20.479,0,0,1,62.4,6.06a23.5,23.5,0,0,0-4.874,3"
                            transform="translate(-25.364)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104447"
                            data-name="Path 104447"
                            d="M5.315,653.162H1.951l-.663,1.557H0l3.027-6.727h1.23l3.037,6.727H5.987Zm-.413-.98-1.269-2.941-1.259,2.941Z"
                            transform="translate(0 -599.153)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104448"
                            data-name="Path 104448"
                            d="M125.97,650.177a3.64,3.64,0,0,1,6.266-2.335l-.807.759a2.363,2.363,0,0,0-1.8-.788,2.364,2.364,0,1,0,0,4.728,2.339,2.339,0,0,0,1.8-.8l.807.769a3.639,3.639,0,0,1-6.266-2.335"
                            transform="translate(-116.476 -597.974)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104449"
                            data-name="Path 104449"
                            d="M241.316,653.162h-3.364l-.663,1.557H236l3.027-6.727h1.23l3.037,6.727h-1.307Zm-.413-.98-1.269-2.941-1.259,2.941Z"
                            transform="translate(-218.214 -599.153)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104450"
                            data-name="Path 104450"
                            d="M361.972,650.177a3.64,3.64,0,0,1,6.266-2.335l-.807.759a2.363,2.363,0,0,0-1.8-.788,2.364,2.364,0,1,0,0,4.728,2.339,2.339,0,0,0,1.8-.8l.807.769a3.639,3.639,0,0,1-6.266-2.335"
                            transform="translate(-334.69 -597.974)"
                            fill="#8a9193"
                          />
                          <rect
                            id="Rectangle_165096"
                            data-name="Rectangle 165096"
                            width="1.249"
                            height="6.727"
                            transform="translate(36.67 48.839)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104451"
                            data-name="Path 104451"
                            d="M545.4,653.162h-3.364l-.663,1.557h-1.288l3.027-6.727h1.23l3.037,6.727h-1.307Zm-.413-.98-1.269-2.941-1.259,2.941Z"
                            transform="translate(-499.379 -599.153)"
                            fill="#8a9193"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_171717"
                        data-name="Group 171717"
                        transform="translate(124 277.797)"
                      >
                        <g
                          id="Group_171716"
                          data-name="Group 171716"
                          clip-path="url(#clip-path-5)"
                        >
                          <path
                            id="Path_104452"
                            data-name="Path 104452"
                            d="M5.051,224.91H6.656v2.536a3.752,3.752,0,0,1-2.945,1.186,3.636,3.636,0,0,1-2.643-1.043,3.778,3.778,0,0,1,.021-5.286,3.625,3.625,0,0,1,2.628-1.063,3.885,3.885,0,0,1,2.674,1.012l-.828,1.2a3.158,3.158,0,0,0-.884-.578,2.372,2.372,0,0,0-.874-.159,2.093,2.093,0,0,0-1.534.619,2.469,2.469,0,0,0-.026,3.251,1.931,1.931,0,0,0,1.426.608,2.738,2.738,0,0,0,1.38-.317Z"
                            transform="translate(0 -183.944)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104453"
                            data-name="Path 104453"
                            d="M66.253,229.356l-.665-1.544h-3l-.665,1.544h-1.7l3.088-7.147h1.544l3.088,7.147Zm-2.157-5.02-.9,2.076h1.789Z"
                            transform="translate(-50.078 -184.751)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104454"
                            data-name="Path 104454"
                            d="M134.932,224.582a2.1,2.1,0,0,1-1.36,2.219l1.81,2.556h-1.963l-1.585-2.28h-1.1v2.28h-1.6V222.21h2.709a3.886,3.886,0,0,1,2.377.562,2.169,2.169,0,0,1,.711,1.81m-1.922.849a1.08,1.08,0,0,0,.3-.844.9.9,0,0,0-.307-.792,1.963,1.963,0,0,0-1.074-.215h-1.2V225.7H131.9a1.714,1.714,0,0,0,1.114-.266"
                            transform="translate(-107.366 -184.752)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104455"
                            data-name="Path 104455"
                            d="M196.889,223.145a3.35,3.35,0,0,1,1.023,2.6,3.514,3.514,0,0,1-1,2.638,4.208,4.208,0,0,1-3.042.971h-2.444v-7.147h2.525a4.2,4.2,0,0,1,2.934.936m-1.171,4.248a2.1,2.1,0,0,0,.588-1.605,2.149,2.149,0,0,0-.588-1.621,2.513,2.513,0,0,0-1.8-.567h-.89v4.345h1.012a2.365,2.365,0,0,0,1.682-.552"
                            transform="translate(-159.159 -184.751)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104456"
                            data-name="Path 104456"
                            d="M261.421,222.209v1.421h-3.558V225.1h3.2v1.36h-3.2v1.483h3.67v1.411h-5.266v-7.147Z"
                            transform="translate(-213.068 -184.751)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104457"
                            data-name="Path 104457"
                            d="M319.133,222.209h1.6v7.147h-1.6l-3.4-4.478v4.478h-1.6v-7.147h1.493l3.507,4.6Z"
                            transform="translate(-261.179 -184.751)"
                            fill="#8a9193"
                          />
                          <path
                            id="Path_104458"
                            data-name="Path 104458"
                            d="M108.231,16.814a12.593,12.593,0,0,0-.113-2.236,30.553,30.553,0,0,1,4.106-.121l-.214-1.35a15.932,15.932,0,0,0-5.451-9.2,16.348,16.348,0,0,0-26.68,9.482l-.2,1.07a30.263,30.263,0,0,1,4.152.115,12.431,12.431,0,0,0-.122,2.241c-.793-.033-3.269,0-4.047.007a16.268,16.268,0,0,0,16.2,15.9,16.442,16.442,0,0,0,15.621-11.088,18.7,18.7,0,0,0,.867-4.821c-.681-.006-3.356-.033-4.125,0M95.972,30.946A14.677,14.677,0,0,1,81.558,18.583c.839,0,1.593,0,2.351.024a12.283,12.283,0,0,0,6.532,8.712,14.256,14.256,0,0,0,4.612,1.335A15.039,15.039,0,0,0,93.2,22.093a10.5,10.5,0,0,0-6.576-4.852,7.83,7.83,0,0,0,.419,1.983c2.5.886,4.97,2.885,5.9,7.181A10.529,10.529,0,0,1,85.509,17h0a10.634,10.634,0,0,1,.095-2.178,13.77,13.77,0,0,1,7.307,3.963c-1.172-3.473-1.052-4.983-.731-6.391a12.9,12.9,0,0,1,3.8,4.379,12.984,12.984,0,0,1,2.819-3.64,8.093,8.093,0,0,0-.6-1.835,14.632,14.632,0,0,0-2.228,2.236,11.006,11.006,0,0,0-3.215-2.907s-.833-.522-1.564-.872a11.075,11.075,0,0,0-4.7-1.191,12.917,12.917,0,0,0-1.846,3.079,13.276,13.276,0,0,1,1.793.348,10.422,10.422,0,0,1,.891-1.567,10.012,10.012,0,0,1,3.246.994,10.792,10.792,0,0,0-.386,3,20.753,20.753,0,0,0-8.326-1.753,14.587,14.587,0,0,1,28.219,0c-.662.018-1.471.062-2.354.158a13.655,13.655,0,0,0-2.308-4.3,12.441,12.441,0,0,0-4.695,1.162,12.893,12.893,0,0,0-4.753-5.213,13.67,13.67,0,0,0-4.2,4.191,12.443,12.443,0,0,1,1.513.946,10.643,10.643,0,0,1,2.691-2.951c3.723,2.849,4.959,7.212,3.065,12.126,0,0,1.639-2.641,6.262-3.745a7.887,7.887,0,0,0-.467-1.72,14.062,14.062,0,0,0-3.077,1.1,10.782,10.782,0,0,0-.4-3.045,9.918,9.918,0,0,1,3.231-.99A10.175,10.175,0,0,1,106.439,17c-4.784.813-8.222,3.93-9.268,9.471a13.878,13.878,0,0,0-.261,2.179,12.858,12.858,0,0,0,7.361-3.271,12.35,12.35,0,0,0,3.5-5.65,7.171,7.171,0,0,0-2.02.427A10.58,10.58,0,0,1,99,26.4a9.218,9.218,0,0,1,4.868-6.75,13.83,13.83,0,0,1,6.518-1.074A14.515,14.515,0,0,1,95.972,30.946"
                            transform="translate(-66.237 -0.001)"
                            fill="#8a9193"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="view">
                  <h6>View all customers</h6>
                </div>
              </div>
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
                <h6>Download</h6>
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
