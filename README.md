# Bit Utils (Bitburner Utilities)

Bit Utils is a collection of utilities and exploits designed to enhance your scripting experience within the Bitburner game.

## Installation
Modules can be installed by referencing their directory name, leveraging the standardized `mod.def` (module definition) file for precise downloading. Be cautious when using this tool, as it will overwrite existing files on your system. This behavior can also be utilized to update modules, as the tool will replace old files with the latest version.
```typescript
run ldmod.ts <module>
```

## Available Utilities
### minapi
`minapi` is a utility that provides a dynamic API interface for interacting with Bitburner's built-in NS methods, utilizing the absolute minimum system memory per API call (hence the name, Minimal API).

**Example Usage:**
```typescript
import { API } from 'minapi/api.ts';

export async function main(ns: NS)
{
    // Create an API object
    let api = new API(ns);

    // Call utilizing the API's type
    await api.call<NS>('fileExists', 'script.ts', 'n00dles');
}
```

- **Generic Parameter (`<NS>`):** Specifies the API being called.
- **First Parameter (`'fileExists'`):** The name of the API method to call.
- **Subsequent Parameters:** Arguments required by the specified method.
