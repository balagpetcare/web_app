/**
 * Declaration for JS/JSX modules that have no TypeScript definitions.
 * Keeps strict TypeScript without converting every file to .tsx.
 */

declare module "@/src/lib/apiFetch" {
  export function apiFetch<T = unknown>(path: string, init?: RequestInit): Promise<T>;
}

declare module "@/app/owner/_components/shared/PageHeader" {
  import { ReactNode } from "react";
  export interface PageHeaderProps {
    title?: ReactNode;
    subtitle?: ReactNode;
    breadcrumbs?: Array<{ label: ReactNode; href?: string }>;
    actions?: ReactNode[];
    className?: string;
  }
  export default function PageHeader(props: PageHeaderProps): JSX.Element;
}

declare module "@/app/owner/_components/StatusBadge" {
  export interface StatusBadgeProps {
    status: string;
  }
  export default function StatusBadge(props: StatusBadgeProps): JSX.Element;
}

declare module "@/app/owner/_components/branch/BranchForm" {
  export interface BranchFormValues {
    name: string;
    typeCodes: string[];
    organizationId?: number;
    branchPhone?: string;
    branchEmail?: string;
    addressText?: string;
    googleMapLink?: string;
    managerName?: string;
    managerPhone?: string;
    location?: Record<string, unknown>;
    [key: string]: unknown;
  }
  export interface BranchFormProps {
    mode?: "create" | "edit";
    organizationId?: number;
    branchId?: string | null;
    onDone?: () => void;
    onSubmit?: (data: BranchFormValues) => void | Promise<void>;
  }
  export default function BranchForm(props: BranchFormProps): JSX.Element;
}

declare module "@/src/utils/authHelpers" {
  export function getStoredToken(): string | null;
  export function clearStoredToken(): void;
  export function detectAuthType(input: string): { type: "email" | "phone" | null; normalized: string };
}

declare module "@/src/bpa/components/AuthFooter" {
  export default function AuthFooter(): JSX.Element;
}

declare module "@/src/components/branch/StaffBranchSidebar" {
  export interface StaffBranchSidebarProps {
    branchId: string;
    sidebarActive: boolean;
    mobileMenu: boolean;
    onMobileClose: () => void;
  }
  export default function StaffBranchSidebar(props: StaffBranchSidebarProps): JSX.Element;
}

declare module "@/app/owner/_components/branch/BranchSidebar" {
  export interface BranchSidebarProps {
    pathname: string | undefined;
    branchId: string;
    branchName: string | null;
    sidebarActive: boolean;
    mobileMenu: boolean;
    onMobileClose: () => void;
  }
  export default function BranchSidebar(props: BranchSidebarProps): JSX.Element;
}

declare module "@/app/owner/_hooks/useEntityCounts" {
  export function useEntityCounts(): { counts: Record<string, number> };
}

declare module "@/app/owner/_components/NotificationBadge" {
  export default function NotificationBadge(): JSX.Element;
}

declare module "@/src/components/NotificationBell" {
  export interface NotificationBellProps {
    enabled?: boolean;
  }
  export default function NotificationBell(props: NotificationBellProps): JSX.Element;
}

declare module "@/app/owner/_components/ContextSelector" {
  export interface ContextSelectorProps {
    contexts: unknown[];
    defaultContext: unknown;
    onSwitch: () => void;
  }
  export default function ContextSelector(props: ContextSelectorProps): JSX.Element;
}

declare module "leaflet/dist/leaflet.css" {
  const url: string;
  export default url;
}

declare module "@/src/components/common/ImageUploadWithCrop" {
  export interface ImageUploadWithCropOutput {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    mime?: string;
  }

  export interface ImageUploadWithCropMeta {
    originalWidth: number;
    originalHeight: number;
    cropAreaPx: { x: number; y: number; width: number; height: number };
    ratio: number | null;
    zoom: number;
    rotation: number;
    croppedWidth: number;
    croppedHeight: number;
  }

  export interface AspectPreset {
    label: string;
    value: number | null;
  }

  export interface ImageUploadWithCropProps {
    label?: string;
    disabled?: boolean;
    existingImageUrl?: string;
    aspectRatio?: number | null;
    showOriginalSize?: boolean;
    aspectPresets?: AspectPreset[];
    output?: ImageUploadWithCropOutput;
    onImageCropped?: (blob: Blob, meta: ImageUploadWithCropMeta) => void;
  }

  export default function ImageUploadWithCrop(props: ImageUploadWithCropProps): JSX.Element;
}
