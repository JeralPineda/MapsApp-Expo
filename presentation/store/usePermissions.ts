import { create } from "zustand";

import { PermissionStatus } from "@/infrastructure/interfaces/location";
import {
  checkLocationPermissions,
  requestLocationPermissions,
} from "@/core/actions/permissions/location";

interface PermissionsState {
  locationStatus: PermissionStatus;

  requestLocationPermissions: () => Promise<PermissionStatus>;
  checkLocationPermissions: () => Promise<PermissionStatus>;
}

export const usePermissionsStore = create<PermissionsState>((set) => ({
  locationStatus: PermissionStatus.CHECKING,

  requestLocationPermissions: async () => {
    const status = await requestLocationPermissions();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermissions: async () => {
    const status = await checkLocationPermissions();
    set({ locationStatus: status });
    return status;
  },
}));
