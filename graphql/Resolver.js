const Student = require('../models/StudentModel')
const Class = require('../models/ClassModel')
//resolvers

 const resolvers = {

   Query:{
       hello : ()=>{
           return "Hello World"
       },
       getAllStd : async function(){
           const fetchData = await Student.find()
           return fetchData
       },
       getAllClass : async function(){
           const fetchClasss = await Class.find()
           return fetchClasss
       },
       // Get Single Student 
   
       getPost : async function(parent ,args){
           const {id} = args
           const findSingleStd = await Student.findById(id)
           return findSingleStd
       },
       

    // Get Single Class

    getClass : async function(parent , {id}){
        const findSingleClass = await Class.findById(id)
        return findSingleClass
    },

   },
   Mutation :{


    //    create Student
    createPost :async function (parent ,args , context , info){
        const { name,email,password ,dateofbirth , facebookProfile} = args.post
        const post = await new Student({
            name ,
            email ,
            password , 
            dateofbirth,
            facebookProfile , 
        }).save()
      
        return post
       },
    
    //Create Class

    createClass : async function(parent ,args){
          const {subject ,teacherName ,duration ,time} = args.class
          const createClas = await new Class({
            subject ,
            teacherName,
             duration,
             time
          }).save()
        
          return createClas
    },

   // update Student
   updatePost :async function (parent ,args , context , info){
       const {id} = args
    const { name,email,password ,dateofbirth , facebookProfile} = args.post

    const updatePost = await  Student.findByIdAndUpdate( id ,{
        name ,
        email ,
        password , 
        dateofbirth,
        facebookProfile , 
    }, {new : true})
  
    return updatePost
   }
   ,

   // Update Class
   updateClass : async function(parent ,args){
       const {id} = args
    const {subject ,teacherName ,duration ,time} = args.class
    const updateClas = await  Class.findByIdAndUpdate(id,{
      subject ,
      teacherName
       ,duration
       ,time
    },{new : true})
  
    return updateClas
},

   //Delete post Student
 
   deletePost :async function (parent ,args , context , info){
       const {id} = args


     await  Student.findByIdAndDelete( id )
  
    return  "Student Has Been Deleted"
   },

    //Deleting Class 

    deleteClass :async function (parent ,args , context , info){
        const {id} = args
 
      await  Class.findByIdAndDelete( id )
   
     return  "Class Has Been Deleted"
    }

   }

}

module.exports = resolvers