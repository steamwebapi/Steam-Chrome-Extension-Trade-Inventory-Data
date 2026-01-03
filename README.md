# SteamAuth

SteamAuth is a Chrome Extension that allows users to securely share their Steam inventory data with third-party websites. Visit [www.steamauth.app](https://www.steamauth.app) for more details.

[![Steamauth](https://www.steamauth.app/steamauthappscreen1.png)](https://www.steamauth.app)

## How it Works

SteamAuth acts as a secure bridge between your Steam account and supported third-party websites.

1. **WebSocket Connection**: The extension connects to the SteamAuth server via WebSocket.
2. **Job Processing**: When a website requests access to your Steam data, the server sends a job to the extension.
3. **Secure Transfer**: The extension fetches the data directly from Steam, encrypts it with RSA-OAEP (SHA-256), and sends it back to the server.
4. **No Credential Sharing**: Your Steam login credentials are never shared with third parties.

## Installation

### Option 1: Chrome Web Store (Recommended)

1. Visit [Chrome Web Store](https://chrome.google.com/webstore/category/extensions) and search for "SteamAuth".
2. Click on "Add to Chrome" to install the extension directly from the store.

### Option 2: Manual Installation (Developer / Beta)

1. Download the `steamauthapp.zip` file from the latest release.
2. Unzip the folder.
3. Open Chrome browser and navigate to `chrome://extensions/`.
4. Enable **Developer Mode** in the top right corner.
5. Click on **Load Unpacked**.
6. Select the unzipped folder.
7. Installation is complete!

## Features

- **Inventory Sharing**: Share your Steam inventory data with trusted websites.
- **Permission Control**: Control which websites can access your data.
- **End-to-End Encryption**: All data is encrypted using RSA-OAEP with SHA-256.
- **Auto-Approve Mode**: Optionally auto-approve requests from trusted sites.

## Security and Privacy

SteamAuth prioritizes user security and privacy.

- **No Credential Sharing**: We never share your Steam username or password with third-party sites.
- **RSA-OAEP Encryption**: All sensitive data is encrypted with 4096-bit RSA keys.
- **Server-Side Only**: All job requests must come from authenticated backend servers - no client-side JavaScript can trigger extension actions.
- **Open Source**: Our code is open source and available for review on GitHub.

## For Developers

Visit [www.steamauth.app](https://www.steamauth.app) and click on the "Developer" button for documentation and API access.

### Job Types

| Type | Description |
|------|-------------|
| `steamloginsecure` | Returns the encrypted Steam login cookie |
| `clientsideinventory` | Fetches and returns encrypted Steam inventory |

## Feedback and Support

We welcome your feedback and are here to support you. For any inquiries or assistance:

- **Email**: [info@steamauth.app](mailto:info@steamauth.app)
- **Discord**: [discord.gg/steamauth](https://discord.gg/XUFTRkpcjQ)

---

**Note**: SteamAuth is not affiliated with Steam or Valve Corporation. "Steam" and the "Steam" logo are trademarks of Valve Corporation.
