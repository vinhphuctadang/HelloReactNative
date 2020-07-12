// must define React to let runner load standard "REACT"
import React from 'react';
// View components from react native if we use "View" and "Text" tags
import { Text, View } from 'react-native';

// Render default page, this is a function
const HelloWorldApp = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  )
}

// export to make the render function 'visible' to the web runner
export default HelloWorldApp;
