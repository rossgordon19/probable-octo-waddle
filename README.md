# Fix-It: AI-Powered DIY Home Repair Assistant 🛠️

Welcome to the **Fix-It** project repository. This is a mobile application built with React Native and Expo that leverages AI to assist users with DIY home repair tasks. Whether it's fixing a leaky faucet or tackling more complex projects, Fix-It guides users through the process step-by-step.

This project uses a modern tech stack including **React Native**, **Expo**, **NativeWind** for styling, **TypeScript**, **Firebase** for backend services, and the **OpenAI API** for AI-driven assistance.

## 🛠 Tech Stack

- **Frontend**: React Native with Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **Backend**: Firebase (authentication, database)
- **AI Integration**: OpenAI API

## 🚀 Getting Started

### 1. Install Dependencies

First, make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
```

### 2. Start the App

Use Expo's CLI to run the development server:

```bash
npx expo start
```

You can run the app on:

- **Development Build**: Learn more about setting up [development builds](https://docs.expo.dev/develop/development-builds/introduction/).
- **Android Emulator**: Launch the app on an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/).
- **iOS Simulator**: Test the app on an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/).
- **Expo Go**: Preview the app on your device using the [Expo Go](https://expo.dev/go) app.

### 3. Environment Variables

Set up your environment variables in a `.env` file (keys for Firebase, OpenAI, etc.):

```bash
OPENAI_API_KEY=your_openai_api_key_here
FIREBASE_API_KEY=your_firebase_api_key_here
```

Make sure your `.env` file is included in `.gitignore` to keep your keys secure.

### 4. Begin Development

The main codebase is organized in the **app** directory, which uses **file-based routing** with Expo's router. You can start editing the app screens and components to customize or extend the functionality.

## 🛠 Project Structure

This project follows a modular structure to keep the codebase clean and maintainable:

- **app/**: Main app screens and navigation.
- **assets/**: Fonts, images, and icons.
- **components/**: Reusable UI components (e.g., buttons, form fields).
- **context/**: Global state management with React context.
- **constants/**: Asset management for icons, images, etc.
- **firebaseConfig.ts**: Firebase configuration.
- **tailwind.config.js**: Tailwind CSS configuration for NativeWind.
- **.env**: Environment variables (e.g., API keys).

## 📚 Documentation & Resources

- **[Expo Documentation](https://docs.expo.dev/)**: Everything you need to know about working with Expo.
- **[NativeWind Documentation](https://www.nativewind.dev/)**: Learn how to use Tailwind CSS in your React Native components.
- **[React Native Documentation](https://reactnative.dev/docs/getting-started)**: Official React Native documentation.
- **[OpenAI API Documentation](https://beta.openai.com/docs/)**: Documentation for integrating OpenAI into your app.
