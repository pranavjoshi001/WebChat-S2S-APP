# WebChat S2S Embed

Embed a multimodal WebChat bot into any website using a simple iframe.

## Quick Start

Add this snippet to your HTML:

```html
<iframe 
  src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?token=YOUR_TOKEN" 
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
  <iframe src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?token=YOUR_TOKEN"></iframe>
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
    src="https://pranavjoshi001.github.io/WebChat-S2S-APP/embed.html?token=YOUR_TOKEN">
  </iframe>
</body>
</html>
```

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `token` | Yes | DirectLine token for bot authentication |

## Features

- 🎤 **Voice Mode**: Multimodal voice interaction enabled by default
- 🎨 **Fluent Design**: Modern Microsoft Fluent UI theming

## Troubleshooting

### "Missing Required Parameter" Error
Ensure `token` is provided in the URL query string.

### Connection Failed
- Verify your token is valid
- Verify your bot is published and accessible

## Demo

Live demo: [https://pranavjoshi001.github.io/WebChat-S2S-APP/](https://pranavjoshi001.github.io/WebChat-S2S-APP/)
