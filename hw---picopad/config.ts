namespace config {
    // Define the pins
    export const PIN_LED = 22;

    // Buttons are pin settings
    export const PIN_BTN_LEFT = 03;
    export const PIN_BTN_UP = 04;
    export const PIN_BTN_RIGHT = 02;
    export const PIN_BTN_DOWN = 05;

    export const PIN_BTN_A = 07;
    export const PIN_BTN_B = 06;
    export const PIN_BTN_MENU = 08;

    // LCD screen SPI settings
    export const PIN_DISPLAY_CS = 21;
    export const PIN_DISPLAY_SCK = 18;
    export const PIN_DISPLAY_MOSI = 19;
    export const PIN_DISPLAY_DC = 17;
    export const PIN_DISPLAY_RST = 20;
    export const PIN_DISPLAY_MISO = -1;
    export const PIN_DISPLAY_BL = 16;

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = 15;

    // Display metrics and config
    export const DISPLAY_CFG0 = 0x000080;
    export const DISPLAY_CFG1 = 0x0010ff;

    export const DISPLAY_CFG2 = 50; // MHz
    export const DISPLAY_WIDTH = 320;
    export const DISPLAY_HEIGHT = 240;
}
