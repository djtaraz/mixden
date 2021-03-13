const Mix = require("../../models/mix")
const checkAuth = require("../../util/check-auth")

const { AuthenticationError } = require("apollo-server")

module.exports = {
    Query: {
        async getMixes() {
            try {
                let mixes = await Mix.find().sort({ addedOn: -1 })
                return mixes
            } catch (err) {
                throw new Error(err)
            }
        },
        async getMix(_, { mixId }) {
            try {
                const mix = await Mix.findById(mixId)
                if (mix) {
                    return mix
                } else {
                    throw new Error("Mix not found")
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async createMix(_, { title }, context) {
            const user = checkAuth(context)
            //console.log(user)

            // if (args.title.trim() === "") {
            //     throw new Error("Mix must have a title")
            // }

            const newMix = new Mix({
                title,
                user: user.id,
                username: user.username,
                addedOn: new Date().toISOString(),
            })

            const mix = await newMix.save()

            return mix
        },
        async deleteMix(_, { mixId }, context) {
            const user = checkAuth(context)
            //console.log(user)

            try {
                const mix = await Mix.findById(mixId)
                if (user.username === mix.username) {
                    await mix.delete()
                    return "Mix deleted successfully"
                } else {
                    throw new AuthenticationError("Action not allowed")
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}
