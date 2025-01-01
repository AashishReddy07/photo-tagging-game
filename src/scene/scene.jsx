import { useEffect, useRef, useState } from "react";
import styles from "./scene.module.css";
import background from "../assets/background.gif";
import loadingImg from "../assets/loading.png";

export default function Scene({ setOpenFinish, stopGame }) {
  const cursorRef = useRef(null);
  const dropdownRef = useRef(null);
  const [characters, setCharacters] = useState([]);
  const [found, setFound] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("src/characters.json"); // Path to the JSON file in the public directory
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err); // Debug log
        setError("Connection failed");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function moveCursor(event) {
    if (cursorRef.current) {
      cursorRef.current.style.left = event.pageX - 30 + "px";
      cursorRef.current.style.top = event.pageY - 30 + "px";
      cursorRef.current.style.display = "block";
    }
    expandDropdown(event);
  }

  function expandDropdown(event) {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = "flex";
      dropdownRef.current.style.left = event.pageX + 30 + "px";
      dropdownRef.current.style.top = event.pageY + "px";
    }
  }

  function handleDropdownClick(character) {
    console.log("Character clicked:", character);
    // Add logic to handle character selection
    if (dropdownRef.current) {
      dropdownRef.current.style.display = "none";
    }
    if (cursorRef.current) {
      cursorRef.current.style.display = "none";
    }
  }

  if (loading) {
    return <img src={loadingImg} alt="Loading..." />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.scene}>
      <img src={background} alt="Background" onClick={moveCursor} className={styles.background} />
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={dropdownRef} className={styles.dropdown}>
        {characters.map((character, index) => (
          <div key={index} className={styles.dropdownItem} onClick={() => handleDropdownClick(character)}>
            {character}
          </div>
        ))}
      </div>
    </div>
  );
}