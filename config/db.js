    import mongoose from "mongoose"

    const connectDB=async()=>{
        try {
            const connection=await mongoose.connect(process.env.MONGO_URI,
                {
                    useNewUrlParser:true,
                    useCreateIndex:true,
                    useFindAndModify:false ,useUnifiedTopology: true
                 })
                 console.log(`connected to Mongo:${connection.connection.host}`)
        } catch (err) {
            console.error(`Error: ${err.message}`)
            process.exit
        }
    }

   export default connectDB