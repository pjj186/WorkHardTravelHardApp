import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "./colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";
const IS_WORK = "@work";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const [edit, setEdit] = useState(false); // 리렌더링을 위해 정의

  useEffect(() => {
    getWorkMod();
    loadToDos();
  }, []);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const travel = () => setWorkMod(false);
  const work = () => setWorkMod(true);
  const onChangeText = (payload) => setText(payload);
  const onEditChangeText = (payload) => {
    setToDos({
      ...toDos,
      [payload.key]: { ...toDos[payload.key], text: payload.text },
    });
  };
  const saveToDos = async (toSave) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheck = (key) => {
    if (toDos[key].checked === false) {
      toDos[key] = { ...toDos[key], checked: true };
    } else {
      toDos[key] = { ...toDos[key], checked: false };
    }
    const newToDos = { ...toDos, [key]: toDos[key] };
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const setWorkMod = async (value) => {
    setWorking(value);
    await AsyncStorage.setItem(IS_WORK, JSON.stringify(value));
  };

  const getWorkMod = async () => {
    const w = await AsyncStorage.getItem(IS_WORK);
    if (w) {
      setWorking(JSON.parse(w));
    } else {
      setWorking(true);
    }
  };

  const loadToDos = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      if (s) {
        setToDos(JSON.parse(s));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }

    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, checked: false, isEdit: false },
    };
    // save to do
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = async (key) => {
    if (Platform.OS === "web") {
      const ok = confirm("Do you want to delete this To Do?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        await saveToDos(newToDos);
      }
    } else {
      Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancel" },
        {
          text: "I'm sure",
          onPress: async () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            await saveToDos(newToDos);
          },
        },
      ]);
    }
  };

  const EditDone = async (key) => {
    if (!toDos[key].text === "") {
      return;
    }
    toDos[key] = { ...toDos[key], isEdit: false };

    const newToDos = {
      ...toDos,
      [key]: toDos[key],
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  const EditToDo = (key) => {
    toDos[key] = { ...toDos[key], isEdit: true };
    const newToDos = { ...toDos, [key]: toDos[key] };
    setEdit(true);
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const CancelEdit = (key) => {
    toDos[key] = { ...toDos[key], isEdit: false };
    const newToDos = { ...toDos, [key]: toDos[key] };
    setEdit(false);
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const ResetEdit = () => {
    // 앱을 시작할 때, Edit을 초기화 하기 위한 함수
    // 미완성
    const newToDos = { ...toDos };
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              fontSize: 38,
              fontWeight: "600",
              color: working ? theme.grey : "white",
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {toDos &&
          Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View style={styles.toDo} key={key}>
                {toDos[key].isEdit ? (
                  <>
                    <TextInput
                      onSubmitEditing={() => EditDone(key)}
                      style={styles.editInput}
                      value={toDos[key].text}
                      onChangeText={(text) => onEditChangeText({ key, text })}
                      returnKeyType="done"
                    ></TextInput>
                    <TouchableOpacity onPress={() => CancelEdit(key)}>
                      <MaterialIcons
                        name="cancel"
                        size={24}
                        color={theme.grey}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <BouncyCheckbox
                      text={toDos[key].text}
                      isChecked={toDos[key].checked}
                      onPress={() => handleCheck(key)}
                      size={25}
                      iconStyle={{ borderColor: "white" }}
                      fillColor="black"
                    />
                    <View style={styles.toolbox}>
                      <TouchableOpacity onPress={() => EditToDo(key)}>
                        <Feather name="edit" size={24} color={theme.grey} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => deleteToDo(key)}
                        style={{ marginLeft: 10 }}
                      >
                        <Fontisto name="trash" size={24} color={theme.grey} />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            ) : null
          )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  editInput: {
    flex: 0.8,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 15,
    color: "black",
  },
  toDo: {
    flexDirection: "row",
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  toolbox: {
    flexDirection: "row",
  },
});
