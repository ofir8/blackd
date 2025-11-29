import { useEffect } from "react";

const UserWayWidget = () => {
  useEffect(() => {
    // UserWay Accessibility Widget
    // Replace 'YOUR_WIDGET_ID' with your actual UserWay widget ID after registration
    const widgetId = 'YOUR_WIDGET_ID'; // TODO: Replace with actual widget ID from UserWay
    
    // Check if script already exists
    if (document.getElementById('userway-widget')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'userway-widget';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.userway.org/widget.js';
    
    // Add data attribute for widget ID (if needed)
    if (widgetId && widgetId !== 'YOUR_WIDGET_ID') {
      script.setAttribute('data-userway-id', widgetId);
    }

    // Append to head or body
    const target = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
    if (target) {
      target.appendChild(script);
    }

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('userway-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default UserWayWidget;

