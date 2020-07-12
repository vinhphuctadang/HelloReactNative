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
        // marginTop: 50,
        margin: 10,
    },
  },

  Input: {
    containerStyle: {
        marginLeft: 100,
        marginRight: 100,
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
            alignItems: 'center',
            padding: 20,
            justifyContent: 'center',
         }}
      >
        <Text style={{fontSize: 24}}>WELCOME</Text>
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

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
                <View style={{flex: 1}}>
                  <Button
                    title="Login"
                    type="outline"
                  />
                </View>
                <View style={{flex: 1}}>
                  <Button
                    title="Exit"
                    type="outline"
                  />
                </View>
            </View>
      </View>
    </ThemeProvider>
  )
}

// export to make the render function 'visible' to the web runner
export default SimpleLayout;
