import { StyleSheet, View } from "react-native";

// TODO: Expo Maps no esta disponible para la nueva arquitectura de Expo, esperar a que se implementen los nuevos componentes de expo

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
