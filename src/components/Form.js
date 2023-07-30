import { View, Text } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Label from './Label'
import Input from './Input'
import FormButton from './FormButton'
import { useNavigation } from '@react-navigation/native'

const FormInputGroup = ({children})=> {
    return (
        <View style={tw`my-3`}>
            {children}
        </View>
    )
}

export default function Form({register}) {
    const navigation = useNavigation(),
    screen = register ? "Home" : "Register";
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("")
  return (
    <View>
        <FormInputGroup>
            <Label text="Email" />
            <Input onChangeText={(text)=>setEmail(text)}
            value= {email}
            />

        </FormInputGroup>

        <FormInputGroup>
            <Label text="Password" />
            <Input onChangeText={(text)=>setPassword(text)}
            value= {password}
            />

        </FormInputGroup>

        <FormButton primary={true} text={!register ? "Login" :"Register"}
        onPress={()=>alert("I was pressed")}/>

        <FormButton primary={false} onPress={()=>navigation.navigate(screen)}
        text={register ? "Login" : "Register"} />

    </View>
  )
}