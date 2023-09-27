declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;
}

declare namespace input {
    //% block="button A" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_A,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonA: Button;
    //% block="button B" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_B,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonB: Button;
    //% block="button Left" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_LEFT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonLeft: Button;
    //% block="button Right" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_RIGHT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonRight: Button;

    //% block="button Up" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_UP,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonUp: Button;
    //% block="button Down" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_DOWN,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonDown: Button;

    //% block="button Menu" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_MENU,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonMenu: Button;
}
