// utils/fetchData.ts
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export async function fetchData() {
  const auth = getAuth();
  let isAuthenticated = false;

  try {
    // ユーザーの認証状態を取得
    await onAuthStateChanged(auth, (user: User | null) => {
      isAuthenticated = user !== null;
    });
  } catch (error: any) {
    console.error("Error checking authentication state:", error.message);
  }

  return {
    isAuthenticated,
  };
}
