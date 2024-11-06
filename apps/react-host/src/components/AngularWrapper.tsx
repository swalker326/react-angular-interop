import React, { useEffect, useRef } from 'react';

const AngularComponentWrapper = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Get the mount function
        //@ts-expect-error - TODO: types not working
        const { mount } = await import('angularRemote/Component');

        // Just mount the application
        await mount();

        // The custom element should now be registered
        if (customElements.get('angular-remote-entry')) {
          // Only create and append if it doesn't exist already
          if (!hostRef.current?.querySelector('angular-remote-entry')) {
            const element = document.createElement('angular-remote-entry');
            hostRef.current?.appendChild(element);
          }
        }
      } catch (error) {
        console.error('Failed to load component:', error);
      }
    };

    loadComponent();

    // Cleanup
    return () => {
      if (hostRef.current) {
        const element = hostRef.current.querySelector('angular-remote-entry');
        if (element) {
          element.remove();
        }
      }
    };
  }, []);

  return <div ref={hostRef} />;
};

export default AngularComponentWrapper;
