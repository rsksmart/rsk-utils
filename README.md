# rsk-utils

A collection of JavaScript utility functions for Rootstock.

`@rsksmart/rsk-utils` is a library of utility functions designed to simplify working with the Rootstock blockchain ecosystem. It supports both CommonJS and ECMAScript Module (ESM) environments, making it versatile and easy to integrate into various projects.

## Features

- Supports CommonJS and ESM module systems.
- Utility functions for working with addresses, bytes, and blockchain-specific operations.
- TypeScript definitions included for better type safety.
- Lightweight and easy to use.

## Installation

Install the library via npm:

```bash
npm install @rsksmart/rsk-utils
```

## Usage

### CommonJS

For CommonJS environments:

```javascript
const rskUtils = require('@rsksmart/rsk-utils');

// Example usage
const { toChecksumAddress } = rskUtils;
console.log(toChecksumAddress('0x27b1FdB04752bBc536007a920D24ACB045561c26', 30));
```

### ESM

For ECMAScript Module (ESM) environments:

```javascript
import { toChecksumAddress } from '@rsksmart/rsk-utils';

console.log(toChecksumAddress('0x27b1FdB04752bBc536007a920D24ACB045561c26', 30));
```

## API Reference

### Functions

#### `toChecksumAddress(address: string, chainId: number | string): string`

Generates a checksummed address according to EIP-1191.

- **Parameters:**
    - `address` (string): The address to checksum.
    - `chainId` (number | string): The chain ID for the network.
- **Returns:** A string representing the checksummed address.

#### `isValidChecksumAddress(address: string, chainId: number | string): boolean`

Validates whether an address has a correct checksum for a specific chain ID.

- **Parameters:**
    - `address` (string): The address to validate.
    - `chainId` (number | string): The chain ID used for checksum validation.
- **Returns:** `true` if the checksum is valid, `false` otherwise.

#### `isAddress(address: string): boolean`

Checks if a given string is a valid address.

- **Parameters:**
    - `address` (string): The address to validate.
- **Returns:** true if valid, false otherwise.

## Testing

Run the test suite to ensure the library works as expected:

```bash
npm run test
```

This will execute unit tests and display the results.

## Contributing

We welcome contributions to improve this library. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write clear commit messages and add tests for any changes.
4. Submit a pull request with a detailed explanation of your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Support
If you encounter any issues or have questions, feel free to open an issue on GitHub.