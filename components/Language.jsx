"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Language() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Bangla"); 

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(savedLanguage === "en" ? "English" : "Bangla");
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (language) => {
    const newLocale = language === "English" ? "en" : "bn"; 
    localStorage.setItem("language", newLocale);


    const currentPath = window.location.pathname;


    const newPath =
      currentPath.startsWith("/en") || currentPath.startsWith("/bn")
        ? currentPath.replace(/^\/(en|bn)/, `/${newLocale}`)
        : `/${newLocale}${currentPath}`;


    router.push(newPath);
    setSelectedLanguage(language); 
    setIsOpen(false);                          
  };                 

  return (
    <div className="relative">
     
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-800 p-2 rounded-md shadow hover:bg-gray-900"
      >
        <span className="text-sm font-medium">{selectedLanguage}</span>
      </button>

  
      {isOpen && (
        <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-gray-800 p-2 z-10 shadow-lg">
          <li
            onClick={() => handleSelection("Bangla")}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-900"
          >
            <span className="text-sm font-medium">Bangla</span>
          </li>
          <li
            onClick={() => handleSelection("English")} // Handle English selection
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-900"
          >
            <span className="text-sm font-medium">English</span>
          </li>
        </ul>
      )}
    </div>
  );
}
