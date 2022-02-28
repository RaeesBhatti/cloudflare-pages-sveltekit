export async function get() {
    return { body: { random: Math.random().toString() } }
}