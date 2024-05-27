# EthosUI

Welcome to EthosUI, a modern React component library built on top of the utility-first CSS framework, Tailwind CSS. EthosUI provides a set of easily customizable and accessible UI components designed to integrate seamlessly into your React applications. 
Visit the [EthosUI Documentation](https://docs-ethos-ui.web.app/) for a complete list of components and their props.

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

### 4. Install react-toastify (If you want to use toasts Messages)

Install react-toastify to use toast messages in your application. For more information, visit [react-toastify](https://www.npmjs.com/package/react-toastify).


## Usage

You can import the components you need from the `ethos-ui` package directly. 
Visit the [EthosUI Documentation](https://docs-ethos-ui.web.app/) for a complete list of components and their props.
Here's a quick example to get you started:

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

## Contributing

Contributions to EthosUI are always welcome! Whether it's fixing bugs, adding new features, or improving documentation, feel free to fork the repository and submit a pull request.

## License

EthosUI is open-sourced software licensed under the MIT license.
