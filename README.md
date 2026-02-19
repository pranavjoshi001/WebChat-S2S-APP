# WebChat S2S Embed

Embed a multimodal WebChat bot into any website using a simple iframe.

## Quick Start

Add this snippet to your HTML:

```html
<iframe 
  src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?botSchemaName=YOUR_BOT_SCHEMA&ppFqdn=YOUR_ENVIRONMENT_FQDN" 
  frameborder="0" 
  style="width: 400px; height: 600px;">
</iframe>
```

## Full Page Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Chatbot</title>
  <style>
    body { margin: 0; padding: 0; }
    iframe { width: 100%; height: 100vh; border: none; }
  </style>
</head>
<body>
  <iframe src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?botSchemaName=cr924_copilotWeatherBot&ppFqdn=defaultc2983f0e34ee4b438abcc2f460fd26b.e.environment.api.preprod.powerplatform.com"></iframe>
</body>
</html>
```

## Floating Chat Widget Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <style>
    .chat-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 380px;
      height: 550px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>Your content here...</p>
  
  <iframe 
    class="chat-widget"
    src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?botSchemaName=cr924_copilotWeatherBot&ppFqdn=defaultc2983f0e34ee4b438abcc2f460fd26b.e.environment.api.preprod.powerplatform.com">
  </iframe>
</body>
</html>
```

## Parameters

### Required Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `botSchemaName` | The schema name of your Copilot bot | `cr924_copilotWeatherBot` |
| `ppFqdn` | The Power Platform environment FQDN | `defaultc2983f0e34ee4b438abcc2f460fd26b.e.environment.api.preprod.powerplatform.com` |

### How to Find Your Parameters

1. **botSchemaName**: Found in Power Platform Copilot Studio under your bot's settings
2. **ppFqdn**: Your Power Platform environment FQDN (Fully Qualified Domain Name)

## Features

- 🎤 **Voice Mode**: Multimodal voice interaction enabled by default
- 🎨 **Fluent Design**: Modern Microsoft Fluent UI theming

## Troubleshooting

### "Missing Required Parameters" Error
Ensure both `botSchemaName` and `ppFqdn` are provided in the URL query string.

### Connection Failed
- Verify your bot is published and accessible
- Check that the environment FQDN is correct
- Ensure the bot schema name matches exactly

## Demo

Live demo: [https://pranavjoshi001.github.io/WebChat-S2S-APP/](https://pranavjoshi001.github.io/WebChat-S2S-APP/)

Embed demo: [https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?botSchemaName=cr924_copilotWeatherBot&ppFqdn=defaultc2983f0e34ee4b438abcc2f460fd26b.e.environment.api.preprod.powerplatform.com](https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?botSchemaName=cr924_copilotWeatherBot&ppFqdn=defaultc2983f0e34ee4b438abcc2f460fd26b.e.environment.api.preprod.powerplatform.com)
