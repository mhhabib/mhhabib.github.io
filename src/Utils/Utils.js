
export const detectDeviceAndOs = () => {
    const userAgent = navigator.userAgent;

    // Regular expressions to match different devices and operating systems
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Tablet|Windows NT|Android/.test(userAgent) && !isMobile;
    const isWindows = /Windows/.test(userAgent);
    const isMac = /Macintosh|Mac OS X/i.test(userAgent);
    const isLinux = /Linux/.test(userAgent);

    // Set device and OS based on the detected patterns
    let detectedDevice = '';
    let detectedOs = '';

    if (isMobile) {
        detectedDevice = 'Mobile';
    } else if (isTablet) {
        detectedDevice = 'Tablet';
    } else {
        detectedDevice = 'PC';
    }

    if (isWindows) {
        detectedOs = 'Windows';
    } else if (isMac) {
        detectedOs = 'Mac';
    } else if (isLinux) {
        detectedOs = 'Linux';
    } else {
        detectedOs = 'Unknown';
    }

    return { device: detectedDevice, os: detectedOs };
};
