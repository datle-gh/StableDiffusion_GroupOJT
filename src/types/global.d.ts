import { ImageSourcePropType } from 'react-native';

export {};

declare global {
  interface Account{
    id: string;
    name: string;
    email: string;
    avatar: string | ImageSourcePropType;
    password: string;
  }

  interface Feedback {
    id: string; 
    accountName: Account["name"];
    accountAvatar: Account["avatar"];
    accountId: Account["id"];
    comment: string;
    date: Date;
  }

  interface ImageInfo {
    owner: Account;
    name: string;
    prompt: string;
  }

  interface ImageType {
    id: string;
    uri: string | ImageSourcePropType;
    info: ImageInfo;
    categories: string[];
    loves: number;
    date: Date;
  }
}

declare module 'react-native/Libraries/Image/resolveAssetSource' {
  interface AssetSource {
    uri: string | ImageSourcePropType;
    width: number;
    height: number;
    scale: number;
  }

  export default function resolveAssetSource(source: any): AssetSource;
}