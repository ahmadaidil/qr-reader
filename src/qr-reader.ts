import EventEmitter from 'events'
import os from 'os'
import HID from 'node-hid'
import TypedEmitter from 'typed-emitter'
import KEYMAP from './keymap'

class QRReader extends (EventEmitter as new () => TypedEmitter<QRReader.Events>) {
  private reader?: HID.HID
  private input: string = ''
  constructor({ vendorId, productId, serialNumber }: { vendorId: number, productId: number, serialNumber: string }) {
    super()
    setTimeout(() => {
      try {
        const devices = HID.devices()

        const getDevice = (device: HID.Device) => {
          return device.vendorId === vendorId && device.productId === productId && device.serialNumber === serialNumber
        }

        if (os.platform() === 'linux') {
          const deviceList = devices.filter(getDevice)
          if (deviceList.length) {
            this.reader = new HID.HID(deviceList[0].path!)
          }
        } else {
          const deviceInfo = devices.find(getDevice)

          if (deviceInfo) {
            this.reader = new HID.HID(deviceInfo.path!)
          }
        }

        if (this.reader) {
          this.emit('open', `QR device with PID ${productId}, VID ${vendorId} and SN ${serialNumber} is now open!`)
          this.reader.on('data', data => {
            const code = Buffer.from([data[2]]).toString('hex')
            const signal = Buffer.from([data[0]]).toString('hex')
            const key = KEYMAP[code]

            const thesignal = (signal == '00') ? 0 : 1

            let char = ''

            if (code !== '0' && key) {
              char = key['chars'][thesignal]
              this.input += key['chars'][thesignal]
            }

            if (this.input && char === '\n') {
              this.emit('data', this.input.trim())
              this.input = ''
            }
          })
          this.reader.on('error', err => {
            this.emit('error', err)
          })
        } else {
          this.emit('error', new Error(`QR device with PID ${productId}, VID ${vendorId} and SN ${serialNumber} not found!`))
        }
      } catch(err) {
        this.emit('error', new Error(`QR device with PID ${productId}, VID ${vendorId} and SN ${serialNumber} has error: ${err.message}`))
      }
    }, 500);
  }

  close() {
    if (this.reader) {
      this.reader.close()
    }
  }
}

declare namespace QRReader {
  interface Events {
    open: (msg: string) => void
    error: (error: Error) => void
    data: (qrString: string) => void
  }
}

export = QRReader
