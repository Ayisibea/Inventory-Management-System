class PUBLIC_DATA{
    static port = process.env.PORT || 4000
    static mongo_url= process.env.PORT || "mongodb://localhost/inventory"
}

module.exports = {
    PUBLIC_DATA
}