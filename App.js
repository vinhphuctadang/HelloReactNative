// must define React to let runner load standard "REACT"
import React from 'react';
// View components from react native if we use "View" and "Text" tags
import { Text, View } from 'react-native';

import { Button, Input, ThemeProvider} from 'react-native-elements';

// icon
import Icon from 'react-native-vector-icons/FontAwesome';

const theme = {
  Button: {
    containerStyle: {
        marginTop: 50,
    }
  },

  Input: {
    containerStyle: {
        marginLeft: 50,
        marginRight: 50,
    }
  },

}

// Render default page, this is a function
const SimpleLayout = () => {
  return (

    <ThemeProvider theme={theme}>
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
        <Text>Welcome</Text>
        <Input
          placeholder="Name"
          leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
          }
         />

         <Input
            placeholder="Password"
            leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='black'
                />
              }
            />

        <Button
          title="Login"
          type="outline"
        />
      </View>
    </ThemeProvider>
  )
}

// export to make the render function 'visible' to the web runner
export default SimpleLayout;
