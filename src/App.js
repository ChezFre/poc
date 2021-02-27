import { useCallback, useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const activeMenu = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [levels, setLevels] = useState([]);
  const [height, setHeight] = useState();

  const addLevel = (name) => {
    setLevels([...levels, name]);
  };

  const removeLevel = () => {
    setLevels([...levels.slice(0, levels.length - 1)]);
  };

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
        setLevels([]);
      }
    },
    [isDropdownOpen]
  );

  const onTransitionEnd = (event) => {
    if (event.target.classList.contains("inner")) {
      setHeight(`${activeMenu.current?.offsetHeight}px`);
    }
  };

  const onClick = useCallback(
    (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown")) {
        setIsDropdownOpen();
        setLevels([]);
      }
    },
    [isDropdownOpen, setIsDropdownOpen, setLevels]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", onClick);
    };
  }, [onKeyDown, onClick]);

  return (
    <div className="App">
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 825 385"
          width="120"
        >
          <g fill="none" fillRule="evenodd">
            <g id="smiley" fill="white">
              <path d="M484.715 329.13c-10.136-8.74-15.2-19.819-15.2-33.25v-97.66h-34.58V153h21.66c9.37 0 14.06-4.684 14.06-14.06v-36.1l55.48-12.16V153h43.7v45.22h-43.7v84.36c0 8.87 5.064 13.3 15.2 13.3 5.824 0 11.4-1.39 16.72-4.18l11.4 41.42c-11.4 6.08-25.21 9.12-41.42 9.12-18.75 0-33.19-4.37-43.32-13.11M589.023 153h59.28l39.52 125.021L724.683 153h59.28l-68.78 183.921h-57.76zM296.602 290.721c-2.537 20.906-18.655 37.362-39.562 39.892 0 0-33.191 5.144-82.04 5.144-48.854 0-82.04-5.144-82.04-5.144-20.906-2.53-37.021-18.986-39.561-39.892 0-.006-5.052-37.287-5.052-81.62 0-44.334 5.052-81.614 5.052-81.62 2.54-20.904 18.655-37.36 39.561-39.883 0 0 33.186-5.148 82.04-5.148 48.849 0 82.04 5.148 82.04 5.148 20.907 2.523 37.025 18.98 39.562 39.883 0 .006 5.058 37.286 5.058 81.62 0 44.333-5.058 81.614-5.058 81.62m46.419-194.396c-3.506-28.88-25.774-51.625-54.67-55.11 0 0-45.853-7.11-113.351-7.11-67.5 0-113.356 7.11-113.356 7.11-28.89 3.485-51.158 26.23-54.661 55.11C6.98 96.331 0 147.851 0 209.101c0 61.256 6.98 112.772 6.983 112.778 3.503 28.881 25.771 51.62 54.661 55.112 0 0 45.856 7.113 113.356 7.113 67.498 0 113.351-7.113 113.351-7.113 28.896-3.493 51.164-26.23 54.67-55.112 0-.006 6.979-51.522 6.979-112.778 0-61.25-6.979-112.77-6.979-112.776"></path>
              <path d="M193.506 176.348c7.636-1.088 15.1-1.56 24.016-1.397 8.628.187 17.73 1.018 25.795 2.502 0 0 2.636.63 2.636-2.187V157.08c0-1.668-2.114-2.19-2.114-2.19-8.838-2.319-17.594-3.617-26.253-3.803-8.16-.143-16.29.665-24.406 2.435 0 0-2.022.627-2.022 2.41v17.986c0 3.34 2.348 2.43 2.348 2.43m-63.561 11.124s27.294-.032 27.294-22.934c0-22.89-27.294-22.922-27.294-22.922s-27.295.032-27.295 22.922c0 22.902 27.295 22.934 27.295 22.934M248.06 233.67c-9.479 5.957-37.158 21.136-73.06 21.136-35.904 0-63.578-15.179-73.059-21.137 0 0-3.544-2.512-3.544 2.155v9.32c0 2.798 3.121 5.751 3.121 5.751 9.354 7.305 38.643 27.766 73.482 27.784 34.833-.018 64.112-20.479 73.483-27.784 0 0 3.118-2.953 3.118-5.752v-9.319c0-4.667-3.541-2.155-3.541-2.155"></path>
            </g>
          </g>
        </svg>
        <nav>
          <ul>
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">TV Guide</a>
            </li>
            <li>
              <a href="#">MyTv</a>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <div className="search">
            <button className="iconButton" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="header_headerwrapper_header_searchwrapper_search_button_transparentsmall_icon"
                width="22"
                height="22"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.9 16.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34h-.01zM10 16a6 6 0 100-12 6 6 0 100 12z"
                ></path>
              </svg>
            </button>
            <form role="search"></form>
          </div>
          <div
            className="dropdownwrapper"
            style={{
              "--depth": levels.length,
              "--height": height
            }}
          >
            <button
              className="iconButton"
              aria-haspopup="true"
              aria-controls="dropdown"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 12a5 5 0 010-10 5 5 0 010 10zm0-2a3 3 0 000-6 3 3 0 000 6zm9 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2z"
                ></path>
              </svg>
            </button>
            <div
              className="dropdown"
              id="dropdown"
              aria-hidden={!isDropdownOpen}
              aria-label="Navigation"
            >
              <div
                className="inner"
                onTransitionEnd={onTransitionEnd}
                ref={levels.length === 0 ? activeMenu : undefined}
              >
                <div className="profile">
                  <img
                    draggable="false"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="Profile picture"
                  />
                  <div>
                    Welcome back
                    <br />
                    Frederic
                  </div>
                </div>
                <ul>
                  <li>
                    <button onClick={() => addLevel("pidswitcher")}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Switch account</span>
                    </button>
                    <div
                      className="submenu"
                      aria-hidden={!levels.includes("pidswitcher")}
                      hidden={!levels.includes("pidswitcher")}
                      ref={
                        levels[levels.length - 1] === "pidswitcher"
                          ? activeMenu
                          : undefined
                      }
                    >
                      <button onClick={removeLevel} aria-label="back">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(180deg)" }}
                          >
                            <path
                              d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        Switch account
                      </button>
                      <ul aria-label="Switch account">
                        <li>
                          <button className="person">
                            <img src="https://via.placeholder.com/60" alt="" />
                            <div>
                              <span className="name">Diemas Michiels</span>
                            </div>
                          </button>
                        </li>
                        <li>
                          <button className="person">
                            <img src="https://via.placeholder.com/60" alt="" />
                            <span className="name">
                              Annelies Van Wallendael
                            </span>
                          </button>
                        </li>
                        <li>
                          <button className="person">
                            <img src="https://via.placeholder.com/60" alt="" />
                            <span className="name">Florian Vanthuyne</span>
                          </button>
                        </li>
                        <li>
                          <button className="person">
                            <img src="https://via.placeholder.com/60" alt="" />
                            <span className="name">Pieter Moeyersons</span>
                          </button>
                        </li>
                        <li>
                          <button className="person">
                            <img src="https://via.placeholder.com/60" alt="" />
                            <span className="name">Jonas De Hovre</span>
                          </button>
                        </li>
                        <li className="divider">
                          <a href="https://mijn.telenet.be" target="_blank">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <span className="label">Add user</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Help</span>
                    </a>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" defaultChecked={true} />
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Dark Mode</span>
                    </label>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.376-1.537-3.723-1.537-.507 0-1.015.072-1.505.216l3.17 3.17c.344 1.589-1.959 3.918-3.567 3.567l-3.169-3.17c-.145.492-.218 1-.218 1.509 0 1.347.51 2.691 1.538 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.946 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-7.935-15.289l5.327-5.318c.584-.584 1.348-.877 2.113-.877.764 0 1.529.292 2.113.877.589.587.882 1.357.882 2.125 0 .764-.291 1.528-.873 2.11l-5.326 5.318-1.039-1.039 5.067-5.059c.169-.168.167-.441-.001-.609-.169-.169-.441-.17-.61-.001l-5.068 5.058-.89-.89 5.067-5.059c.169-.169.168-.441 0-.611-.169-.168-.443-.17-.611 0l-5.067 5.058-1.084-1.083zm-3.53 9.18l-5.227 5.185c-.227.229-.423.488-.574.774l-.301.58-2.1 1.07-.833-.834 1.025-2.146.58-.302c.286-.15.561-.329.79-.558l5.227-5.185 1.413 1.416z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Device Management</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M20 9.352c0-4.852-4.751-8.352-10-8.352-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 7.697 1.877 13.307-2.842 13.307-7.892zm-14.5 1.38c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm4.5 0c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25zm8.383 8.789c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-3.365.818-6.114-.29-7.573-2.1 4.557-.66 8.241-3.557 9.489-7.342 1.48.979 2.465 2.491 2.465 4.274 0 1.12-.403 2.221-1.117 3.074z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Ask Yugo</span>
                    </a>
                  </li>
                  <li className="divider">
                    <button
                      onClick={() => {
                        addLevel("settings");
                      }}
                      aria-haspopup="true"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M24 14v-4c-1.619 0-2.906.267-3.705-1.476-.697-1.663.604-2.596 1.604-3.596l-2.829-2.828c-1.033 1.033-1.908 2.307-3.666 1.575-1.674-.686-1.404-2.334-1.404-3.675h-4c0 1.312.278 2.985-1.404 3.675-1.761.733-2.646-.553-3.667-1.574l-2.829 2.828c1.033 1.033 2.308 1.909 1.575 3.667-.348.849-1.176 1.404-2.094 1.404h-1.581v4c1.471 0 2.973-.281 3.704 1.475.698 1.661-.604 2.596-1.604 3.596l2.829 2.829c1-1 1.943-2.282 3.667-1.575 1.673.687 1.404 2.332 1.404 3.675h4c0-1.244-.276-2.967 1.475-3.704 1.645-.692 2.586.595 3.596 1.604l2.828-2.829c-1-1-2.301-1.933-1.604-3.595l.03-.072c.687-1.673 2.332-1.404 3.675-1.404zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Settings</span>
                    </button>
                    <div
                      className="submenu"
                      aria-hidden={!levels.includes("settings")}
                      hidden={!levels.includes("settings")}
                      ref={
                        levels[levels.length - 1] === "settings"
                          ? activeMenu
                          : undefined
                      }
                    >
                      <button onClick={removeLevel}>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(180deg)" }}
                          >
                            <path
                              d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        Settings
                      </button>
                      <ul>
                        <li>
                          <button onClick={() => addLevel("language")}>
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M14.748 11.191c.03.473.084.909.158 1.298-.998.183-1.038-.801-.158-1.298zm-7.461.274h1.708l-.856-2.451-.852 2.451zm16.713-.458c0 6.052-6.732 11.705-15.968 9.458-1.678 1.027-5.377 2.065-7.978 2.535.971-1.912 2.048-4.538 1.993-6.368-1.308-1.562-2.047-3.575-2.047-5.625 0-5.781 5.662-10.007 12-10.007 6.299 0 12 4.195 12 10.007zm-12.749 2.993l-2.47-6.5h-1.302l-2.479 6.5h1.392l.535-1.5h2.438l.537 1.5h1.349zm6.837-3.937c.062-.243.1-.426.135-.605l-1.1-.214-.109.5c-.371-.054-.767-.061-1.166-.021.009-.268.025-.531.049-.784h1.229v-1.042h-1.081c.054-.265.099-.424.144-.575l-1.075-.322c-.079.263-.145.521-.211.897h-1.226v1.042h1.092c-.028.337-.046.686-.051 1.038-1.206.443-1.718 1.288-1.718 2.053 0 .904.714 1.7 1.842 1.598 1.401-.128 2.337-1.186 2.885-2.487.567.327.805.876.591 1.385-.197.471-.78.919-1.892.896v1.121c1.234.019 2.448-.45 2.925-1.583.464-1.107-.067-2.317-1.263-2.897zm-2.144 1.841c.293-.303.522-.688.697-1.075-.253-.021-.522-.014-.79.021.017.378.048.731.093 1.054z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <span className="label">Language</span>
                          </button>
                          <div
                            className="submenu"
                            aria-hidden={!levels.includes("language")}
                            hidden={!levels.includes("language")}
                            ref={
                              levels[levels.length - 1] === "language"
                                ? activeMenu
                                : undefined
                            }
                          >
                            <button onClick={removeLevel}>
                              <div className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  style={{ transform: "rotate(180deg)" }}
                                >
                                  <path
                                    d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              Language
                            </button>
                            <ul>
                              <li>
                                <button onClick={removeLevel}>
                                  Nederlands
                                </button>
                              </li>
                              <li>
                                <button onClick={removeLevel}>Français</button>
                              </li>
                              <li>
                                <button onClick={removeLevel}>English</button>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="toggle-button-wrapper">
                            <div>
                              <div className="icon"></div>
                              <span className="label">Language</span>

                              <div className="toggle-button">
                                <label aria-label="Nederlands" lang="nl">
                                  <input
                                    type="radio"
                                    name="language"
                                    value="nl"
                                  />
                                  <span className="label">NL</span>
                                </label>
                                <label aria-label="Français" lang="fr">
                                  <input
                                    type="radio"
                                    name="language"
                                    value="FR"
                                  />
                                  <span className="label">FR</span>
                                </label>
                                <label aria-label="English" lang="en">
                                  <input
                                    type="radio"
                                    name="language"
                                    value="en"
                                  />
                                  <span className="label">EN</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button onClick={() => addLevel("privacy")}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 9v2h-4v-2c0-1.104.897-2 2-2s2 .896 2 2zm10 3c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-8-1h-1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h-1v6h8v-6z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Privacy</span>
                    </button>
                    <div
                      className="submenu"
                      aria-hidden={!levels.includes("privacy")}
                      hidden={!levels.includes("privacy")}
                      ref={
                        levels[levels.length - 1] === "privacy"
                          ? activeMenu
                          : undefined
                      }
                    >
                      <button onClick={removeLevel}>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(180deg)" }}
                          >
                            <path
                              d="M12.068.016l-3.717 3.698 5.263 5.286h-13.614v6h13.614l-5.295 5.317 3.718 3.699 11.963-12.016z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        Privacy
                      </button>
                      <ul>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                        <li>
                          <a href="#">Terms & conditions</a>
                        </li>
                        <li>
                          <a href="#">Change cookie preferences</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16 13v-4l8 7-8 7v-4h-6v-6h6zm0-6v-6h-16v18l8-7v-9h6v4h2z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <span className="label">Log out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
