import { Link } from "react-router-dom";
import React from 'react';
import styles from "./HeroSection.module.css"


const HeroSection = () => (
    <section className="hero">
        <div className="hero-content">
            <div className={styles.imgContainer}>
               <img src="/HeroImg.jpg" /> 
            </div>
            <div className={styles.overlayText}>
                <h1>Elevate Your Everyday Essentials</h1>
                <p>Timeless styles for every moment—because basics should never be boring.</p>
                <Link className={styles.shopBtn} to="/shop">Shop</Link>
            </div>
            
        </div>
    </section>
);
export default HeroSection;