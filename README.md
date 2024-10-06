# Motivational and Inspirational Quotes (Muslim)

This VS Code extension displays motivational and inspirational quotes whenever VS Code starts. The quotes are derived from a local JSON file and support multiple languages, including Bangla. Users can configure the default language via the settings UI.

## Features

- Displays a random motivational or inspirational quote every time VS Code starts.
- Quotes are provided primarily in Bangla, with English as an optional translation.
- Each quote includes the author, reference, tags, and translations.
- User-configurable default language via VS Code settings, with Bangla set as the default.


## Usage

Once installed, the extension will automatically display a random quote when VS Code starts. You can also manually show a random quote by running the command:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the Command Palette.
2. Type `Show Random Quote` and select the command.

## Configuration

You can configure the default language for the quotes by going to:

1. **File** > **Preferences** > **Settings** (or use the gear icon at the bottom left of VS Code).
2. Search for **Motivational Quotes Configuration** and choose between `en` (English) and `bn` (Bangla).

## Installation

1. Open VS Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X`.
3. Search for `Motivational and Inspirational Quotes (Muslim)` by `azmolla`.
4. Click **Install**.

## Development

1. Clone this repository:
    ```bash
    git clone https://github.com/azmolla/motivational-quotes-extension.git
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Compile the TypeScript code:
    ```bash
    npm run compile
    ```
4. Run the extension:
    - Press `F5` to open a new VS Code window with the extension loaded.

## Repository

- [GitHub Repository](https://github.com/azmolla/motivational-quotes-extension)

## Marketplace Link

- [VS Code Marketplace](https://marketplace.visualstudio.com/publishers/azmolla)

## License

This extension is licensed under the MIT License. See [LICENSE](./LICENSE.md) for details.

## Contribution

Feel free to contribute by opening issues or submitting pull requests!

