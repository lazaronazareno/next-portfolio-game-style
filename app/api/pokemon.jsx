export async function getPokemon(req, res) {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    )
    const data = await response.json()

    return data
  } catch (err) {
    return err.message
  }
}

export async function getPokemonById(req, res) {
  if (!req) return
  try {
    const response = await fetch(req)
    const data = await response.json()

    return data
  } catch (err) {
    return err.message
  }
}

export async function getAllProjects(req, res) {
  try {
    const response = await fetch(
      'https://portfolio-production-e5c8.up.railway.app/api/projects'
    )
    const data = await response.json()

    return data
  } catch (err) {
    return err.message
  }
}

export async function getProjectById(req, res) {
  try {
    const response = await fetch(
      `https://portfolio-production-e5c8.up.railway.app/api/projects/${req}`
    )
    const data = await response.json()

    return data
  } catch (err) {
    return err.message
  }
}
