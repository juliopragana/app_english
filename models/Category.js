var knex = require ("../database/connection");

class Category {

    async findAll(){
        try {
            var result = await knex.select("*").from("category");
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findById(id){
        try{
            var result = await knex.select("*").from("category").where({id:id});
            if(result.lenth > 0){
                return result[0];
            }else{
                return null;
            }
        }catch(error){
            console.log(error)
             return undefined;
        }
    }

    async new(name, translate, description){
        try {
            await knex.insert({name, translate, description}).table("categroy");
        } catch (error) {
            console.log(err)
            return;
        }
    }

    async update(id, name, translate, description){

        var category = await this.findById(id);

        if(category != undefined){
            var editCategory = {}

            if(name != undefined ){
                editCategory.name = name;
            }
            if(translate != undefined){
                editCategory.translate = translate;
            }
            if(description != undefined){
                editCategory.description = description
            }

            try {
                await knex.update(editCategory).where({id:id}).table("category");
            } catch (error) {
                return {status: false, err: error}
            }


        } else {
            return {status: false, err: "O usuário não encontrado"}
        }

        
    }

}


module.exports = new Category();