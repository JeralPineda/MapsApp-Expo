import * as Location from "expo-location";

import { PermissionStatus } from "@/infrastructure/interfaces/location";

export const requestLocationPermissions =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      manualPermissionRequest();
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checkLocationPermissions = async () => {
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case "granted":
      manualPermissionRequest();
      return PermissionStatus.GRANTED;
    case "denied":
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }
};

const manualPermissionRequest = async () => {
  //TODO: Lanzar los ajustes de la app
};
