import { Container, Text, Image } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: "flex",
      flexDirection: "column",
      height: 'calc(100vh - 100px)',
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    }}>
      <Text h1>No hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
        css={{
          opacity: 0.5,
        }}
      />
    </Container>
  )
}