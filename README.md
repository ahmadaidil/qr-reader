# qr-reader
Nodejs QR code reader library. It's simple just return the QR string.

## Requirement note
Enable a carriage return/line feed (enter key) suffix in QR device or this library not working properly.

## Installation

To install via npm:
```bash
npm install --save qr-reader
```
To install via yarn:
```bash
yarn add qr-reader
```

## Usage

### Opening a device
input the qr device product id, vendor id and serial number at the param object

| object key | type | description |
|-----|------|-------------|
| productId | number | device product id |
| vendorId | number | device vendor id |
| serialNumber | string | device serial number |

```js
const QRReader = require('qr-reader')
const device = new QRReader({
  productId: 4608,
  vendorId: 1504,
  serialNumber: '20241523701421'
})

device.on('open', msg => console.log(msg)) // QR device with PID 4608, VID 1504 and SN 20241523701421 is now open!
```

### Reading from a device

To receive the QR string, use `device.on("data",...)`.
A `qr-reader` device is an EventEmitter.
Reading from a device is performed by registering a "data" event handler:

```js
device.on("data", qrString => {});
```

You can also listen for errors like this:

```js
device.on("error", err => {});
```

Notes:
- Reads via `device.on("data")` are asynchronous
- To remove an event handler, close the device with `device.close()`
- When there is not yet a data handler or no data handler exists, data is not read at all.

---
&copy;2021 Ahmad Aidil