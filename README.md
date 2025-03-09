# Bit Utils (Bitburner Utilities)

Bit Utils is a collection of tools and utilities designed to enhance your scripting experience within the Bitburner game. This repository aims to provide a suite of modular and efficient tools, allowing you to focus on automation and optimization without reinventing the wheel.

## Available Utilities
### minapi
`minapi` is a utility that provides a dynamic API interface for interacting with Bitburner's built-in NS methods, utilizing the absolute minimum system memory per API call (hence the name, Minimal API).

**Example Usage:**
```typescript
import { API } from 'minapi/api.ts';

export async function main(ns: NS) {
    // Create an API object
    let api = new API(ns);

    // Call utilizing the API's type
    await api.call<NS>('fileExists', 'de4de', 'n00dles');
}
```

- **Generic Parameter (`<NS>`):** Specifies the type of API being called.
- **First Parameter (`'fileExists'`):** The name of the Bitburner method to call.
- **Subsequent Parameters:** Arguments required by the specified method.

### More Utilities Coming Soon
`minapi` is just the start! More tools and utilities are planned to further support your Bitburner scripts, focusing on automation, optimization, and ease of use.

## Installation
Clone this repository into your Bitburner scripts directory:

```bash
git clone https://github.com/yourusername/bit-utils.git
```
