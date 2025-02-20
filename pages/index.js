import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {session ? (
        <>
          <h2>¡Bienvenido, {session.user.name}!</h2>
          <button onClick={() => signOut()}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <h2>No has iniciado sesión</h2>
          <button onClick={() => signIn("google")}>Iniciar sesión con Google</button>
        </>
      )}
    </div>
  );
}

