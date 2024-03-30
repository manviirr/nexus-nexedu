"use client"
import React, { useEffect, useRef } from 'react';
import Quiz from 'react-quiz-component';

const ShadowDomWrapper = ({ children }) => {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        // Create a shadow root
        const shadowRoot = ref.current.attachShadow({ mode: 'open' });
        const slot = document.createElement('slot');
        shadowRoot.appendChild(slot);
        
        // You might need to manually import and append the quiz component's CSS to the shadow DOM here
        // const style = document.createElement('style');
        // style.textContent = `...styles here...`;
        // shadowRoot.appendChild(style);
      }
    }, []);
  
    return <div ref={ref}>{children}</div>;
  };
  
  // Usage with your QuizComponent
  export default function QuizComponentWithShadowDom({ quiz }) {
    return (
      <ShadowDomWrapper>
        <h1 className='text-xl'>Full Stack Modern Quiz</h1>
        <Quiz quiz={quiz} />
      </ShadowDomWrapper>
    );
  }