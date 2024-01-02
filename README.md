# React URL Preview Component

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

A React component that displays a preview of a URL and acts as a clickable link to redirect users to the provided website.

## Table of Contents
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the [live demo]([https://your-demo-url.com](https://codesandbox.io/p/sandbox/react-preview-link-wjw4lk?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqw1y5p100063b6hmpw9880d%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqw1y5p000023b6hes8r68n4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqw1y5p000033b6h7cqhapy6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqw1y5p000053b6homejac44%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqw1y5p000023b6hes8r68n4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqw1y5p000013b6hbx31zwlc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpublic%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clqw1y5p000023b6hes8r68n4%2522%252C%2522activeTabId%2522%253A%2522clqw1y5p000013b6hbx31zwlc%2522%257D%252C%2522clqw1y5p000053b6homejac44%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqw1y5p000043b6h3wtygkx7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clqw1y5p000053b6homejac44%2522%252C%2522activeTabId%2522%253A%2522clqw1y5p000043b6h3wtygkx7%2522%257D%252C%2522clqw1y5p000033b6h7cqhapy6%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqw1y5p000033b6h7cqhapy6%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)https://codesandbox.io/p/sandbox/react-preview-link-wjw4lk?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqw1y5p100063b6hmpw9880d%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqw1y5p000023b6hes8r68n4%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqw1y5p000033b6h7cqhapy6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqw1y5p000053b6homejac44%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqw1y5p000023b6hes8r68n4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqw1y5p000013b6hbx31zwlc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpublic%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522clqw1y5p000023b6hes8r68n4%2522%252C%2522activeTabId%2522%253A%2522clqw1y5p000013b6hbx31zwlc%2522%257D%252C%2522clqw1y5p000053b6homejac44%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqw1y5p000043b6h3wtygkx7%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clqw1y5p000053b6homejac44%2522%252C%2522activeTabId%2522%253A%2522clqw1y5p000043b6h3wtygkx7%2522%257D%252C%2522clqw1y5p000033b6h7cqhapy6%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqw1y5p000033b6h7cqhapy6%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) to see the component in action.


## Installation
Install the component via npm:

```bash
npm install @develevate/react-preview-link
```
**OR via yarn**
```bash
yarn add @develevate/react-preview-link
```

## Usage
Import the component in your React application and use it within your components:

```jsx
import React from 'react';
import {PreviewLink} from '@develevate/react-preview-link';

function App() {
  return (
    <div>
      <PreviewLink url="https://example.com" />
    </div>
  );
}
```

## Props
The `PreviewLink` component accepts the following props:

- **href (string, required)**: The URL to be previewed and linked.
- **showHoverOverlay (boolean, optional)**: If `true` renders an overlay over the preview link component | @default `true`
- **showHoverAnimation (boolean, optional)**: If `true` adds hover animation of popping out over the preview link | @default `true`
- **height (number, optional)**: Height of the preview link component | @default `180`
- **width (number, optional)**: Width of the preview link component | @default `320`

## Examples
Here are a few examples demonstrating different use cases:

```jsx
<div>
  <PreviewLink url="https://example.com" />
  <PreviewLink url="https://example.com" className="custom-preview" />
</div>
```

Feel free to explore more customization options using the CSS file used for styling [here](https://github.com/Dev-Elevate/react-preview-link/blob/master/src/index.styles.css).

## Contributing
Contributions are welcome! Follow these steps to contribute to the project:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and submit a pull request.
- Please ensure your code adheres to the existing coding standards.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.





