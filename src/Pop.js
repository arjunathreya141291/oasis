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
            <p>
              <span className="pop-span">No-touch</span> faucets
            </p>
            <p>
              <span className="pop-span">No-touch</span> flush
            </p>
            <p>
              Hands free <span className="pop-span">no-touch</span> kitchen
            </p>
          </div>
          <div className="suggested-category">
            <p className="pop-heading">Suggested categories</p>
            <p>
              <span className="pop-span">No-touch</span> accessories
            </p>
            <p>Proximity sensors</p>
            <p>Smart faucets</p>
            <p>The automated collection</p>
            <p>Safe and sound collection</p>
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
                <p>Leros touchless faucet</p>
                <p>$82.00</p>
                <p>Add to Cart</p>
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
                <p>Natmos hands free faucet</p>
                <p>$63.00</p>
                <p>Add to Cart</p>
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
                <p>Sarina smart faucet</p>
                <p>$84.00</p>
                <p>Add to Cart</p>
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
                <p>Symint touchless faucet</p>
                <p>$92.00</p>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pop;
