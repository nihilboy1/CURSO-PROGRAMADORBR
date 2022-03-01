const Joi = require("@hapi/joi")

const validate = {
    register_validate: (data) => {
    
        const schema = Joi.object(
            {
                name: Joi.string().required().min(4).max(50),
                email: Joi.string().required().min(3).max(50),
                password: Joi.string().required().min(6).max(50),
            }
        )
    
        return schema.validate(data)
    },
    
    login_validate: (data) => {
        
        const schema = Joi.object(
            {
                email: Joi.string().required().min(3).max(50),
                password: Joi.string().required().min(6).max(50),
            }
        )
    
        return schema.validate(data)
    }
    
}

module.exports = validate