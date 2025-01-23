import data from '../data'
import { connecttodatabse } from '.'
import product from './models/product.model'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())


const main = async () => {
    try{
        const {products} = data
    
        await connecttodatabse(process.env.mongodb_uri) 
    
        await product.deleteMany()
        const createdProducts = await product.insertMany(products)
    
        console.log({
            createdProducts,
            message: 'Seeded database successfully'
        })
        process.exit(0)

    }catch(error){
        console.log(error)
        throw new Error('Failed to seed database')
    }
}

main()
