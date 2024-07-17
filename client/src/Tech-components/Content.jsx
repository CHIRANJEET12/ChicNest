import React, { useState } from 'react';
import "./Content.css";
const blogPosts = [
  {
    title: "Dell XPS 15",
    imgSrc: "/dell-xps-15.jpg",
    alt: "Dell XPS 15 Laptop",
    meta: "by Dell Inc. on July 12, 2024",
    content: [
      "The Dell XPS 15 is a powerful laptop known for its stunning 4K display and robust performance. It features the latest Intel processors and NVIDIA graphics, making it ideal for both productivity and gaming.",
      "With a sleek design and long battery life, the Dell XPS 15 is a top choice for professionals and enthusiasts alike."
    ],
    rating: 4.8,
    affiliateLink: "https://example.com/dell-xps-15-affiliate-link"
  },
  {
    title: "MacBook Pro 16-inch",
    imgSrc: "/macbook-pro-16-inch.jpg",
    alt: "MacBook Pro 16-inch Laptop",
    meta: "by Apple Inc. on June 20, 2024",
    content: [
      "The MacBook Pro 16-inch offers exceptional performance with its Intel Core i9 processors and AMD Radeon Pro graphics. It features a stunning Retina display with True Tone technology for vibrant colors.",
      "Designed for professionals, the MacBook Pro 16-inch delivers unparalleled power and efficiency in a sleek and portable form factor."
    ],
    rating: 4.9,
    affiliateLink: "https://example.com/macbook-pro-16-inch-affiliate-link"
  },
  {
    title: "HP Spectre x360",
    imgSrc: "/hp-spectre-x360.jpg",
    alt: "HP Spectre x360 Laptop",
    meta: "by HP Inc. on May 15, 2024",
    content: [
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a flexible hinge that allows it to convert into a tablet. It features Intel Core processors and integrated Intel graphics for smooth performance.",
      "With its premium design and long battery life, the HP Spectre x360 is perfect for users who need both laptop and tablet functionalities."
    ],
    rating: 4.7,
    affiliateLink: "https://example.com/hp-spectre-x360-affiliate-link"
  },
  {
    title: "Asus ROG Zephyrus G14",
    imgSrc: "/asus-rog-zephyrus-g14.jpg",
    alt: "Asus ROG Zephyrus G14 Gaming Laptop",
    meta: "by AsusTek Computer Inc. on August 5, 2024",
    content: [
      "The Asus ROG Zephyrus G14 is a high-performance gaming laptop powered by AMD Ryzen processors and NVIDIA GeForce RTX graphics. It features a compact design with a responsive display and customizable RGB keyboard.",
      "Designed for gamers, the Asus ROG Zephyrus G14 offers exceptional gaming performance and portability."
    ],
    rating: 4.6,
    affiliateLink: "https://example.com/asus-rog-zephyrus-g14-affiliate-link"
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    imgSrc: "/lenovo-thinkpad-x1-carbon.jpg",
    alt: "Lenovo ThinkPad X1 Carbon Laptop",
    meta: "by Lenovo Group Ltd. on September 10, 2024",
    content: [
      "The Lenovo ThinkPad X1 Carbon is a business-oriented laptop known for its durability and performance. It features Intel Core processors and optional LTE-A connectivity for seamless productivity on the go.",
      "With its lightweight design and robust security features, the Lenovo ThinkPad X1 Carbon is a trusted choice for business professionals."
    ],
    rating: 4.5,
    affiliateLink: "https://example.com/lenovo-thinkpad-x1-carbon-affiliate-link"
  },
  {
    title: "Acer Predator Helios 300",
    imgSrc: "/acer-predator-helios-300.jpg",
    alt: "Acer Predator Helios 300 Gaming Laptop",
    meta: "by Acer Inc. on October 25, 2024",
    content: [
      "The Acer Predator Helios 300 is a budget-friendly gaming laptop equipped with Intel Core i7 processors and NVIDIA GeForce GTX graphics. It features a high-refresh-rate display and advanced cooling technology.",
      "Ideal for gamers on a budget, the Acer Predator Helios 300 delivers solid gaming performance and excellent value for money."
    ],
    rating: 4.4,
    affiliateLink: "https://example.com/acer-predator-helios-300-affiliate-link"
  }
];

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 5;

  // Filtered posts based on searchTerm
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="content">
      <div className="search">
        <input
          className='Search'
          type="text"
          placeholder='Search by title...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {currentPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <h2 className="blog-title">{post.title}</h2>
          <img src={post.imgSrc} alt={post.alt} />
          <p className="blog-meta">{post.meta}</p>
          <div className="blog-content">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="affiliate-link">
            <a href={post.affiliateLink} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </div>
          <div className="rating">
            Rating: {post.rating}/5
          </div>
        </div>
      ))}

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`page-number ${number === currentPage ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content;
