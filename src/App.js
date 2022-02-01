import "./App.css";
import Banner from "./banner.png";
import Flag from "./Flag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="app">
      <div className="firstBar">
        <div className="firstBar-container">
          <div className="shipping">
            <FontAwesomeIcon icon={faShippingFast} /> &nbsp; Free shipping
            worldwide over $150 &nbsp;| &nbsp; <FontAwesomeIcon icon={faUndo} />{" "}
            &nbsp; Free and easy returns
          </div>
          <div className="store">
            Contact &nbsp; | &nbsp; Select store{" "}
            <FontAwesomeIcon icon={faCaretDown} /> &nbsp; | &nbsp; English, USD
            &nbsp;
            <FontAwesomeIcon icon={faFlagUsa} />
            &nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
      <div className="secondBar">
        <div className="secondBar-container">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              //width="70.451"
              //height="20.003"
              viewBox="0 0 70.451 20.003"
            >
              <g
                id="Oasis_-_bolder"
                data-name="Oasis - bolder"
                transform="translate(-867.15 -501.72)"
              >
                <path
                  id="Path_38370"
                  data-name="Path 38370"
                  d="M902.311,502.117l-6.322,15.472H899.5l1.039-2.874.928-2.586,1.879-5.195h.022l1.79,5.195.885,2.586.995,2.874h3.647l-5.813-15.472Z"
                  transform="translate(-10.277 -0.132)"
                  fill="#353839"
                />
                <path
                  id="Path_38371"
                  data-name="Path 38371"
                  d="M929.8,507.909c-1.194-.42-2.652-.752-2.652-1.945,0-1.018.95-1.548,2.011-1.548a5.235,5.235,0,0,1,3.205,1.392l1.812-2.254a8.058,8.058,0,0,0-5.128-1.834c-2.564,0-5.061,1.392-5.061,4.332,0,2.962,2.254,3.846,4.266,4.6,1.57.575,2.984,1.083,2.984,2.41,0,1.37-1.217,1.967-2.454,1.967-1.613,0-2.586-.73-3.846-1.946l-2.1,2.056a7.982,7.982,0,0,0,5.924,2.586c2.7,0,5.858-1.437,5.858-4.8C934.623,509.677,931.992,508.66,929.8,507.909Z"
                  transform="translate(-19.891 0)"
                  fill="#353839"
                />
                <rect
                  id="Rectangle_140474"
                  data-name="Rectangle 140474"
                  width="3.161"
                  height="15.472"
                  transform="translate(918.663 501.985)"
                  fill="#353839"
                />
                <path
                  id="Path_38372"
                  data-name="Path 38372"
                  d="M966.1,507.909c-1.193-.42-2.652-.752-2.652-1.945,0-1.018.95-1.548,2.012-1.548a5.233,5.233,0,0,1,3.2,1.392l1.812-2.254a8.053,8.053,0,0,0-5.128-1.834c-2.564,0-5.061,1.392-5.061,4.332,0,2.962,2.254,3.846,4.265,4.6,1.57.575,2.984,1.083,2.984,2.41,0,1.37-1.216,1.967-2.454,1.967-1.613,0-2.586-.73-3.845-1.946l-2.1,2.056a7.982,7.982,0,0,0,5.924,2.586c2.7,0,5.857-1.437,5.857-4.8C970.923,509.677,968.294,508.66,966.1,507.909Z"
                  transform="translate(-33.321 0)"
                  fill="#353839"
                />
                <path
                  id="Path_38373"
                  data-name="Path 38373"
                  d="M877.186,505.864a4.586,4.586,0,0,0-4.257,2.9h8.5A4.574,4.574,0,0,0,877.186,505.864Z"
                  transform="translate(-1.926 -1.381)"
                  fill="none"
                />
                <path
                  id="Path_38374"
                  data-name="Path 38374"
                  d="M875.433,504.483a4.574,4.574,0,0,1,4.238,2.9h3.508a8.144,8.144,0,0,0-15.513,0h3.509A4.586,4.586,0,0,1,875.433,504.483Z"
                  transform="translate(-0.172 0)"
                  fill="#353839"
                />
                <path
                  id="Path_38375"
                  data-name="Path 38375"
                  d="M880.971,518.944H868.647a7.9,7.9,0,0,0,.917,1.5h12.373a7.9,7.9,0,0,0,.917-1.5Z"
                  transform="translate(-0.499 -5.739)"
                  fill="#adced0"
                />
                <path
                  id="Path_38376"
                  data-name="Path 38376"
                  d="M907.346,518.944h-7.527a7.946,7.946,0,0,0,.917,1.5h7.577a7.946,7.946,0,0,0,.917-1.5Z"
                  transform="translate(-10.886 -5.739)"
                  fill="#353839"
                />
                <g
                  id="Group_141316"
                  data-name="Group 141316"
                  transform="translate(867.15 501.72)"
                >
                  <path
                    id="Path_38377"
                    data-name="Path 38377"
                    d="M870.861,511.7a6.013,6.013,0,0,1-.329-1.982c0-2.94,1.989-5.238,4.73-5.238,2.718,0,4.708,2.3,4.708,5.238a6.03,6.03,0,0,1-.329,1.982H883.1a8.088,8.088,0,0,0,.253-1.982,8.1,8.1,0,0,0-16.2,0,8.085,8.085,0,0,0,.254,1.982h3.457Z"
                    transform="translate(-867.15 -501.72)"
                    fill="#353839"
                  />
                </g>
                <path
                  id="Path_38378"
                  data-name="Path 38378"
                  d="M876.985,523.447H872.35a7.9,7.9,0,0,0,9.268,0Z"
                  transform="translate(-1.733 -7.24)"
                  fill="#adced0"
                />
                <path
                  id="Path_38379"
                  data-name="Path 38379"
                  d="M908.723,521.53h-7.1l.928-2.586h5.29Z"
                  transform="translate(-12.153 -5.739)"
                  fill="#353839"
                />
              </g>
            </svg>
          </div>
          <div className="search"></div>
          <div className="sign-in">
            <FontAwesomeIcon icon={faUser} /> &nbsp; Sign in &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faLayerGroup} /> &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
      <div className="thirdBar">
        <nav id="tg-nav" class="tg-nav">
          <div
            id="tg-navigation"
            class="collapse navbar-collapse tg-navigation"
          >
            <ul>
              <li>
                <a>
                  All products <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a>
                  By space <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a>
                  By industry <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a>
                  By job <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a>
                  By collection <FontAwesomeIcon icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="banner">
        <img
          src={Banner}
          alt="Banner"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default App;
