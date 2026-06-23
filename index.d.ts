import { Component, ReactNode } from "react";
import { TextStyle } from "react-native";

export interface PickerValue {
  filename: string;
  playableDuration?: number;
  uri: string;
  fileSize: number;
  height: number;
  width: number;
  extension: string;
}

export interface SelectImagesProps {
  showLimitedScreen: () => void;
}

export interface CameraRollPickerProps {
  initialNumToRender?: number;
  groupTypes?:
    | "Album"
    | "All"
    | "Event"
    | "Faces"
    | "Library"
    | "PhotoStream"
    | "SavedPhotos";
  maximum?: number;
  assetType?: "Photos" | "Videos" | "All";
  selectSingleItem?: boolean;
  imagesPerRow?: number;
  imageMargin?: number;
  containerWidth?: number;
  callback?: (items: PickerValue[]) => void;
  selected?: string[];
  initialSelected?: {
    fileSize: number;
    filename: string;
    playableDuration?: number;
    uri: string;
  }[];
  selectedMarker?: ReactNode;
  backgroundColor?: string;
  emptyText?: string;
  emptyTextStyle?: TextStyle;
  loader?: ReactNode;
  maxImagesReachedCallback?: (isReached: boolean) => void;
  isLimitedView?: boolean;
  showLimitedScreen?: () => void;
  ItemComponent?: (props: {
    item: { node: { image: PickerValue } },
    selected: boolean,
    extraData: any,
    onClick: (image: PickerValue) => void,
  }) => ReactNode;
  SelectImagesComponent?: ({ showLimitedScreen }: SelectImagesProps) => ReactNode;
  extraData?: any,
}

export default class CameraRollPicker extends Component<CameraRollPickerProps> {}
