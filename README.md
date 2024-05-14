# EthosUI

Welcome to EthosUI, a modern React component library built on top of the utility-first CSS framework, Tailwind CSS. EthosUI provides a set of easily customizable and accessible UI components designed to integrate seamlessly into your React applications. By leveraging the power of Tailwind CSS, EthosUI offers flexibility and efficiency, enhancing your development workflow and helping you craft beautiful user interfaces with ease.

## Installation

To use EthosUI in your project, follow these steps:

### 1. Install Tailwind CSS

Before installing EthosUI, you must set up Tailwind CSS in your project. For detailed instructions, visit [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).

### 2. Install EthosUI

With Tailwind CSS in place, you can add EthosUI to your project:

```bash
npm install ethos-ui
```

### 3. Update Tailwind CSS Configuration

In your Tailwind configuration file (`tailwind.config.js`), extend the content array to include EthosUI components:

```javascript
  content: [
    //...
    "./node_modules/ethos-ui/**/*.{js,ts,jsx,tsx}",
  ]
  

```

This inclusion ensures that Tailwind CSS considers the classes used in EthosUI components when generating styles.

## Usage

You can import the components you need from the `ethos-ui` package directly. Here's a quick example to get you started:

```jsx
import React from 'react';
import { Button, Card, Headline, Text } from 'ethos-ui';

function App() {
  return (
    <div>
      <Card className="grid gap-2">
          <Headline variant="h2">Welcome to EthosUI</Headline>
          <Text>This is a simple card component.</Text>
          <Button variant="secondary">Click me</Button>
      </Card>
     
    </div>
  );
}

export default App;
```

## Available Components

EthosUI offers a variety of components you can use in your projects. Here are some of the main components exported by the library:

- **Button**: Highly customizable button for user interactions.
- **Headline, Text**: For displaying text in various sizes.
- **Input**: For getting user input.
- **Sheet**: A flexible container element.
- **Card**: For containing elements about a single subject.
- **Modal**: To overlay a small element over others.
- **Navbar**: For navigation purposes.
- **Menu, MenuItem** : For creating dropdown menus.
- **Select**: Custom select element.
- **ImageCard**: For displaying images with text.

Each component comes with its own props for further customization. The details are provided in the TypeScript type definitions, which can also be imported for use with TypeScript.

## Contributing

Contributions to EthosUI are always welcome! Whether it's fixing bugs, adding new features, or improving documentation, feel free to fork the repository and submit a pull request.

## License

EthosUI is open-sourced software licensed under the MIT license.
