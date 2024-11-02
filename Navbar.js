// app/components/Navbar.js

export default function Navbar() {
    return (
      <nav style={navStyle}>
        <h1><b>New Generation High School - Student Portal</b></h1>
      </nav>
    );
  }
  
  const navStyle = {
    padding: "2rem 1rem", // Increased padding for a broader navbar
    backgroundColor: "#000080", // Navy blue background
    color: "#fff",
    textAlign: "center",
  };
  