import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

interface Quote {
  quoteText: string;
  author: string;
  reference: string;
  tags: string[];
  translations: { [key: string]: string };
}

// Function to get a random quote
function getRandomQuote(quotes: Quote[]): Quote {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Function to show a random quote
function showRandomQuote(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration("motivationalQuotes");
  const defaultLanguage = config.get<string>("defaultLanguage", "en");

  const quotesFilePath = path.join(context.extensionPath, "quotes.json");
  fs.readFile(quotesFilePath, "utf8", (err, data) => {
    if (err) {
      vscode.window.showErrorMessage("Failed to load quotes.");
      return;
    }

    const quotes: Quote[] = JSON.parse(data);
    const randomQuote = getRandomQuote(quotes);

    const quoteText =
      randomQuote.translations[defaultLanguage] || randomQuote.quoteText;
    const author = randomQuote.author ? `- ${randomQuote.author}` : "";
    const message = `${quoteText}\n${author}`;

    vscode.window.showInformationMessage(message);
  });
}

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  // Show random quote on startup (only once)
  showRandomQuote(context);

  // Register command to manually show a random quote
  const disposable = vscode.commands.registerCommand(
    "motivational-and-inspirational-quotes.showRandomQuote",
    () => {
      showRandomQuote(context);
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
export function deactivate() {}
