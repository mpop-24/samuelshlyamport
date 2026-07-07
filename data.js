const portfolioData = {
  profile: {
    name: "Samuel Shlyam",
    city: "New York City", // Replace with your city
    phone: "(718) 419-7925",
    email: "samuel@shlyam.com",
    cvUrl: "./assets/Samuel_Shlyam_Resume.pdf"
  },
  projects: [
    { 
      id: 1, 
      title: "Image Scraper", 
      description: "An automated script designed to extract and download high-resolution image assets from web galleries." 
    },
    { 
      id: 2, 
      title: "Retail Scraper", 
      description: "A data-mining tool built to track price changes, inventory levels, and product descriptions across e-commerce platforms." 
    }
  ],
  hobbies: [
    { name: "Bowling", image: "./images/bowling.jpg" },
    { name: "Skiing", image: "./images/skiing.jpg" },
    { name: "Chess", image: "./images/chess.jpg" },
    { name: "Piano", image: "./images/piano.jpg" },
    { name: "Cooking", image: "./images/cooking.jpg" },
    { name: "Wrestling", image: "./images/wrestling.jpg" }
  ]
};

export default portfolioData;