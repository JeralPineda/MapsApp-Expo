import React, { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";
import { router } from "expo-router";

import { usePermissionsStore } from "../store/usePermissions";
import { PermissionStatus } from "@/infrastructure/interfaces/location";

export default function PerrmissionsProvider({ children }: PropsWithChildren) {
  const { locationStatus, checkLocationPermissions } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace("/map");
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermissions();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermissions();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
}
