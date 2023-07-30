import { View, Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Label from './Label'
import Input from './Input'

const FormInputGroup = ({children})=> {
    return (
        <View style={tw`my-3 space-y-2`}>
            {children}
        </View>
    )
}

export default function Form() {
    const [email, setEmail] = useState("")
  return (
    <View>
        <FormInputGroup>
            <Label text="Email" />
            <Input onChangeText={(text)=>setEmail(text)} />
        </FormInputGroup>
    </View>
  )
}