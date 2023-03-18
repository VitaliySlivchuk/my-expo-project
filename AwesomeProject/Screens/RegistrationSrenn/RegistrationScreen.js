import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import styles from "./StylesRegistrationSrenn";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const widthDementions = Dimensions.get("window").width - 18 * 2;

export default function RegistrationScreen() {
  //   const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputText, setInputText] = useState(initialState);
  const [windowWidth, setWindowWidth] = useState(widthDementions);

  useEffect(() => {
    const width = Dimensions.addEventListener("change", (windowWidth) => {
      setWindowWidth(windowWidth);
    });
    return () => width?.remove();
  }, []);

  const keyboardHide = () => {
    // setIsShowKeyboard(true);
    Keyboard.dismiss();
    setInputText(initialState);
    console.log(inputText);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/BG.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Введіть логін"
                value={inputText.name}
                onChangeText={(text) =>
                  setInputText((prev) => ({ ...prev, name: text }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Введіть електронну почту"
                value={inputText.email}
                onChangeText={(text) =>
                  setInputText((prev) => ({ ...prev, email: text }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Введіть пароль"
                value={inputText.password}
                onChangeText={(text) =>
                  setInputText((prev) => ({ ...prev, password: text }))
                }
              />

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                <Text style={styles.buttonText}>Зареєструйтесь</Text>
              </TouchableOpacity>
              <Text style={styles.acc}>Уже є аккаунт? Увійти</Text>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
