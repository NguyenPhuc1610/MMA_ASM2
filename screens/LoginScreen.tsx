import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>Login to Little Lemon</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#c2c4c4"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#c2c4c4"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  input: {
    padding: 5,
    margin: 10,
    backgroundColor: "#EDEFEE",
    borderRadius: 2,
  },
  button: {
    backgroundColor: "#EE9972",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
