import './Fashion.css';
import { motion } from 'framer-motion';

export default function FashionContent() {
  return (
    <div className='news-head'>
      <img src="/pexels-mihir-koral-s-838411-2519175.jpg" alt="Fashion" />
      <motion.h1 
        className='off-ad'
        initial={{opacity:0, translateX: -250}}
        animate={{opacity:1, translateX: 0}}
        transition={{duration:1}}
      >
        <span className="material-symbols-outlined disc-icon">
          shoppingmode
        </span>
        OFFER is what we look for!
      </motion.h1>
      <motion.h2 
        className='off-ad2'

        initial={{opacity:0, translateX: -250}}
        animate={{opacity:1, translateX: 0}}
        transition={{duration:1}}
      >
        Well Your wait is over.
      </motion.h2>
      <motion.p 
        className='ad-pg'
        initial={{opacity:0, translateX: -250}}
        animate={{opacity:1, translateX: 0}}
        transition={{duration:1}}
      >
        “Discover global fashion deals effortlessly with our platform, where savings meet style!”
        <span className="material-symbols-outlined">
          shopping_bag
        </span>
      </motion.p>

     <h2 className='brand-heading'>Branded item with discount:</h2>

      <div className='wrapper'>
        <div className='item item1'> <img src="/images-removebg-preview.png" alt="" /></div>
        <div className='item item2'><img src="/Flipkart-Logo-removebg-preview.png" alt="" /></div>
        <div className='item item3'><img src="/fastrack-logo-B9489396C8-seeklogo.com.png" alt="" /></div>
        <div className='item item4'><img src="/puma-logo-illustration-free-vector-removebg-preview.png" alt="" /></div>
        <div className='item item5'><img src="/725d42fb10fe3fbf5239b86897c55780-removebg-preview.png" alt="" /></div>
        <div className='item item6'><img src="/35ecd5ee36d4f72559c75837e79bd9da-removebg-preview.png" alt="" /></div>
        <div className='item item7'><img src="/images__3_-removebg-preview.png" alt="" /></div>
        <div className='item item8'><img src="/images__1_-removebg-preview.png" alt="" /></div>
      </div>
 </div>
);
}
