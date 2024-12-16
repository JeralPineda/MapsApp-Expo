import { View } from "react-native";

import ThemedPressable from "@/presentation/components/shared/ThemedPressable";
import { ThemedText } from "@/presentation/components/shared/ThemedText";
import { usePermissionsStore } from "@/presentation/store/usePermissions";

export default function Permissions() {
  const { locationStatus, requestLocationPermissions } = usePermissionsStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedPressable onPress={requestLocationPermissions}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </View>
  );
}
