input.onButtonPressed(Button.A, function () {
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    while (true) {
        OLED12864_I2C.showNumber(
        0,
        0,
        OrientBit.getwheelDist(OrientBit.wheelSide.left),
        1
        )
        basic.pause(100)
        if (OrientBit.getwheelDist(OrientBit.wheelSide.left) >= 24) {
            maqueen.motorStop(maqueen.Motors.All)
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    maqueen.servoRun(maqueen.Servos.S2, 100)
    while (true) {
        OLED12864_I2C.showNumber(
        0,
        0,
        OrientBit.getwheelDist(OrientBit.wheelSide.left),
        1
        )
        basic.pause(100)
        if (OrientBit.getwheelDist(OrientBit.wheelSide.left) >= 30) {
            maqueen.servoRun(maqueen.Servos.S2, 0)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
            if (OrientBit.getwheelDist(OrientBit.wheelSide.left) >= 36) {
                maqueen.servoRun(maqueen.Servos.S2, 100)
                while (true) {
                    basic.pause(100)
                    maqueen.motorStop(maqueen.Motors.All)
                }
            }
        }
    }
})
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OLED12864_I2C.init(60)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
