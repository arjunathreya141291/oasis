import React, { Fragment, useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { SearchTermContext } from "./context/searchterm";
import firstFaucet from "./leros.png";
import secondFaucet from "./natmos.png";
import thirdFaucet from "./sarina.png";
import fourthFaucet from "./symint.png";

const Pop = () => {
  const [spinner, setSpinner] = useState(true);
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setSpinner(false);
    } else {
      setSpinner(true);
    }
  }, [searchTerm]);

  return (
    <>
      {spinner ? (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div className="pop-container">
          <div className="suggested-search">
            <p className="pop-heading">Suggested searches</p>
            <p className="pop-content">
              <span className="pop-span">No-t</span>ouch faucets
            </p>
            <p className="pop-content">
              <span className="pop-span">No-t</span>ouch flush
            </p>
            <p className="pop-content">
              Hands free <span className="pop-span">no-t</span>ouch kitchen
            </p>
          </div>
          <div className="suggested-category">
            <p className="pop-heading">Suggested categories</p>
            <p className="pop-content">
              <span className="pop-span">No-t</span>ouch accessories{" "}
              <svg
                id="Group_171678"
                data-name="Group 171678"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="16"
                viewBox="0 0 36 16"
              >
                <rect
                  id="Rectangle_165043"
                  data-name="Rectangle 165043"
                  width="36"
                  height="16"
                  rx="8"
                  fill="#36a18d"
                />
                <text
                  id="NEW"
                  transform="translate(7 12)"
                  fill="#f6f6f6"
                  font-size="10"
                  font-family="AdobeClean-Bold, Adobe Clean"
                  font-weight="700"
                  letter-spacing="0.08em"
                >
                  <tspan x="0" y="0">
                    NEW
                  </tspan>
                </text>
              </svg>
            </p>
            <p className="pop-content">Proximity sensors</p>
            <p className="pop-content">
              Smart faucets{" "}
              <svg
                id="Group_171678"
                data-name="Group 171678"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="16"
                viewBox="0 0 36 16"
              >
                <rect
                  id="Rectangle_165043"
                  data-name="Rectangle 165043"
                  width="36"
                  height="16"
                  rx="8"
                  fill="#36a18d"
                />
                <text
                  id="NEW"
                  transform="translate(7 12)"
                  fill="#f6f6f6"
                  font-size="10"
                  font-family="AdobeClean-Bold, Adobe Clean"
                  font-weight="700"
                  letter-spacing="0.08em"
                >
                  <tspan x="0" y="0">
                    NEW
                  </tspan>
                </text>
              </svg>
            </p>
            <p className="pop-content">The automated collection </p>
            <p className="pop-content">Safe and sound collection</p>
          </div>
          <div className="recommended">
            <p className="pop-heading">Recommended products</p>
            <div className="recs-container">
              <div className="firstf">
                <img
                  src={firstFaucet}
                  alt="Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <p className="name pop-content">Leros touchless faucet</p>
                <p className="prices">$82.00</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="19"
                    viewBox="0 0 87 19"
                  >
                    <text
                      id="Text"
                      transform="translate(0 14)"
                      fill="#353839"
                      font-size="15"
                      font-family="SoleilBk, Soleil"
                      letter-spacing="0.064em"
                    >
                      <tspan x="0" y="0">
                        Add to cart
                      </tspan>
                    </text>
                  </svg>
                </p>
              </div>
              <div className="secondf">
                <img
                  src={secondFaucet}
                  alt="Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <p className="name pop-content">Natmos hands free faucet</p>
                <p className="prices">$63.00</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="19"
                    viewBox="0 0 87 19"
                  >
                    <text
                      id="Text"
                      transform="translate(0 14)"
                      fill="#353839"
                      font-size="15"
                      font-family="SoleilBk, Soleil"
                      letter-spacing="0.064em"
                    >
                      <tspan x="0" y="0">
                        Add to cart
                      </tspan>
                    </text>
                  </svg>
                </p>
              </div>
              <div className="thirdf">
                <img
                  src={thirdFaucet}
                  alt="Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <p className="name pop-content">Sarina smart faucet</p>
                <p className="prices">$84.00</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="19"
                    viewBox="0 0 87 19"
                  >
                    <text
                      id="Text"
                      transform="translate(0 14)"
                      fill="#353839"
                      font-size="15"
                      font-family="SoleilBk, Soleil"
                      letter-spacing="0.064em"
                    >
                      <tspan x="0" y="0">
                        Add to cart
                      </tspan>
                    </text>
                  </svg>
                </p>
              </div>
              <div className="fourthf">
                <img
                  src={fourthFaucet}
                  alt="Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
                <p className="name pop-content">Symint touchless faucet</p>
                <p className="prices">$92.00</p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="87"
                    height="19"
                    viewBox="0 0 87 19"
                  >
                    <text
                      id="Text"
                      transform="translate(0 14)"
                      fill="#353839"
                      font-size="15"
                      font-family="SoleilBk, Soleil"
                      letter-spacing="0.064em"
                    >
                      <tspan x="0" y="0">
                        Add to cart
                      </tspan>
                    </text>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pop;
