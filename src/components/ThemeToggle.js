// src/components/ThemeToggle.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function ThemeToggle() {
    // Set the default theme to dark
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="theme-toggle">
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <motion.span
                    className="slider round"
                    layout
                    transition={{
                        type: 'spring',
                        stiffness: 700,
                        damping: 30,
                    }}
                >
                    {theme === 'light' ? (
                        <motion.div
                            key="sun"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="icon-container"
                        >
                            <FontAwesomeIcon icon={faSun} className="icon" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="icon-container"
                        >
                            <FontAwesomeIcon icon={faMoon} className="icon" />
                        </motion.div>
                    )}
                </motion.span>
            </label>
        </div>
    );
}

export default ThemeToggle;
