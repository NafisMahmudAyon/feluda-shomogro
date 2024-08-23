import { KeyboardAvoidingView, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const InputField = ({ label, labelStyle }) => {
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
      <View className="my-2 w-full">
        <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
}

export default InputField;