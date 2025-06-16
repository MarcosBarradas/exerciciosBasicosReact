export default function Hello({autenticado}) {
  return (
    <>
      {autenticado && <h1>Olá, Amigo autenticado!</h1>}
    </>
  )
}
