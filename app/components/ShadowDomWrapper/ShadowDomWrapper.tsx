"use client"
import React, { useEffect, useRef } from 'react';

const ShadowDomWrapper = ({ htmlContent }: { htmlContent: string }) => {
  // Use useRef to hold a reference to the div element
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      // Check if the shadow root already exists
      let shadowRoot = wrapperRef.current.shadowRoot;
      if (!shadowRoot) {
        // If not, attach a new shadow root
        shadowRoot = wrapperRef.current.attachShadow({ mode: 'open' });
      }
      // Update the inner HTML of the shadow root
      shadowRoot.innerHTML = htmlContent;
    }
  }, [htmlContent]); // This effect depends on htmlContent

  // Render a div that will serve as the shadow DOM host
  return <div ref={wrapperRef}></div>;
};

export default ShadowDomWrapper;
