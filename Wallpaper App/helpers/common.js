import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const wp = percentage => {
    const width = deviceWidth;
    return (percentage * width) / 100;
}
export const hp = percentage => {
    const height = deviceHeight;
    return (percentage * height) / 100;
}

export const getColumnCount = () => {
    if (deviceWidth >= 1024) {
        return 4; // Desktop
    }
    else if (deviceWidth >= 700) {
        return 3; // Tablet
    }
    else {
        return 2;
    }
}

export const getImageSize = (height, width) => {
    if (width > height) {
        return 250; //landscape 
    }
    else if (width < height) {
        return 300; // potrait
    }
    else {
        return 200;
    }
}

export const capitalize = str => {
    return str.replace(/\b\w/g, l => l.toUpperCase())
}