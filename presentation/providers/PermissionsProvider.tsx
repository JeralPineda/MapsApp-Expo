import React, { PropsWithChildren, useEffect } from "react";
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
  }, []);

  useEffect(() => {
    checkLocationPermissions();
  }, []);

  // TODO: Estar pendiente cuando el estado de la aplicación cambie

  return <>{children}</>;
}
