module.exports = () => {
    const data = { posts: [] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
        data.posts.push({ id: i, name: `product${i}`, brutto: `${10 + i + 1}`, netto: `${10 + i - 1}`, quantity: 2 })
    }
    return data
}