import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="story" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
