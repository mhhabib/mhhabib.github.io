
export const detectDeviceAndOs = () => {
    const userAgent = navigator.userAgent;

    // Regular expressions to match different devices and operating systems
    let isMobile=null

    // Screen resolution method
    if (!isMobile) {
        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
        isMobile = (screenWidth < 768 || screenHeight < 768);
    }
    isMobile  = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    // Touch events method
    if (!isMobile) {
        isMobile = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }

    // CSS media queries method
    if (!isMobile) {
        let bodyElement = document.getElementsByTagName('body')[0];
        isMobile = window.getComputedStyle(bodyElement).getPropertyValue('content').indexOf('mobile') !== -1;
    }

    return { isMobile: isMobile,};
};
