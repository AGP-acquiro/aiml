import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Generate = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const icon = document.getElementById("collapse-icon");
    if (icon) {
      icon.style.transition = "transform 0.3s ease-in-out";
      icon.style.transform = isCollapsed ? "rotate(0deg)" : "rotate(-180deg)";
    }
  }, [isCollapsed]);

  return (
    <>
      <div className="center">
        <input type="email" />
        <input type="submit" value="Copy" />
        <button>Generate API Key</button>
        <div className="box">
          <p>Get Client Data</p>
          <div className="inline-box-icon" onClick={toggleCollapse}>
            <small>Https://aws.bla.bla.bla</small>
            <small className="collapse">
              {isCollapsed ? (
                <FontAwesomeIcon icon={faAngleDown} id="collapse-icon" />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} id="collapse-icon" />
              )}
            </small>
          </div>
          {!isCollapsed && (
            <div>
              <p>Req Header hereeeee.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Generate;
