import type { ConfigContext, ExpoConfig } from 'expo/config';

const pkg = require('./package.json');
const { name: NAME, version: VERSION } = pkg;

/**
 * Uses built-in Expo env vars
 *
 * @see https://docs.expo.dev/build-reference/variables/#built-in-environment-variables
 */


//   const IS_TESTFLIGHT = process.env.EXPO_PUBLIC_ENV === 'testflight';
//   const IS_PRODUCTION = process.env.EXPO_PUBLIC_ENV === 'production';
//   const IS_DEV = !IS_TESTFLIGHT || !IS_PRODUCTION;

//   const UPDATES_CHANNEL = IS_TESTFLIGHT ? 'testflight' : IS_PRODUCTION ? 'production' : undefined;
//   const UPDATES_ENABLED = !!UPDATES_CHANNEL;

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const EAS_PROJECT_ID = '2b60426a-5bd3-477b-9bf1-6968faf96883';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.halagh.halaghcustomer.dev';
  }

  if (IS_PREVIEW) {
    return 'com.halagh.halaghcustomer.preview';
  }

  return 'com.halagh.halaghcustomer';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Halagh Customer (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Halagh Customer (Preview)';
  }

  return 'Halagh Customer';
};

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: getAppName(),
    slug: NAME,
    owner: 'scholarx',
    version: VERSION,
    orientation: 'portrait',
    scheme: 'halaghdigestion',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    extra: {
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
      icon: {
        dark: './assets/icons/ios-dark.png',
        light: './assets/icons/ios-light.png',
        tinted: './assets/icons/ios-tinted.png',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/icons/adaptive-icon.png',
        monochromeImage: './assets/icons/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/splash/splash-icon-light.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#0057FF',
        },
      ],
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/helvetica/Helvetica-Bold.ttf',
            './assets/fonts/poppins/Poppins-Bold.ttf',
            './assets/fonts/poppins/Poppins-Medium.ttf',
            './assets/fonts/poppins/Poppins-Regular.ttf',
            './assets/fonts/poppins/Poppins-SemiBold.ttf',
          ],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};