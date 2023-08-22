async function getManifest(slug: string) {
    const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${slug}?api_key=${process.env.API_KEY}`
    )
    if (!res.ok) throw new Error("Failed to fetch Rover Properties.")
    return res.json()
}

export default getManifest
