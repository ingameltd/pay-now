# PayNow for NodeJS

![Build](https://github.com/ingameltd/pay-now/workflows/Build/badge.svg) ![License](https://img.shields.io/github/license/ingameltd/pay-now) ![npmversion](https://img.shields.io/npm/v/@ingameltd/pay-now) ![last-commit](https://img.shields.io/github/last-commit/ingameltd/pay-now)

NodeJS library for [PayNow](https://paynow.pl) payment service. This library is written in Typescript to provide
best typesafety.

Official REST API docs can be found [here](https://docs.paynow.pl/).

## Documentation

Documentation can be in read [here](https://ingameltd.github.io/pay-now).

## Installation

```bash
npm install --save @ingameltd/pay-now
```

## Typescript

### Importing

```typescript
import {
  PayNow,
  Payment,
  PaymentCreatedResponse
} from "@ingameltd/pay-now";
```

### Initialization

- **apiKey** - API Key from PayNow panel
- **signatureKey** - Signature Key from PayNow panel

```typescript
const payNow = new PayNow(
  apiKey, 
  signatureKey, 
  { 
    sandbox: false // enable or disable sandbox
  }
);
```

### Create payment

```typescript
const payment: Payment = {
    amount: 1000, // 10,00 PLN
    externalId: '9fea23c7-cd5c-4884-9842-6f8592be65df', // unique id from merchant system
    description: "Test transaction",
    buyer: {
        email: "jhondoe@example.com"
    }
}

const result: PaymentCreatedResponse = await payNow.createPayment(payment)

console.log(result)
```

### Get payment status

```typescript
// payment id from paynow
const result: PaymentStatusResponse = payNow.paymentStatus(paymentId)
console.log(result)
```

### Check integrity of incoming message

To verify a notification you must check integrity of an incoming message and compare it with `Signature` header field(you can set Notification endpoint in panel)

#### Example with Express

```typescript
const calculatedSignature = paynow.calculateSignature(req.body)
console.log(calculatedSignature === req.header('Signature'))
```
