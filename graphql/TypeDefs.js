const{ gql} = require("apollo-server-express")


//Queries


 const typeDefs = gql`
 

 type Student {
     id : ID
     name : String
     email : String
     password : String
     dateofbirth : String
     facebookProfile : String
 }

 type Class {

     id : ID
     subject : String
     teacherName : String
     duration : String
     time : String
 }

 type Query{
     hello : String
     getAllStd : [Student]
     getAllClass : [Class]
    # //by id
     getPost(id : String) : Student
      #  Get single Class
    getClass(id : String) : Class
 }

 input StudentInput {
    name : String
     email : String
     password : String 
     dateofbirth : String
     facebookProfile : String
 }

 input ClassInput {
      subject : String
      teacherName : String
      duration : String
      time : String
 }

#   Mutation

  type Mutation{
    #   for creating the Student // //..;\\( :Student) means what we are returning
      createPost(post : StudentInput) : Student   
    #   for updating the Student
     updatePost(id : String , post: StudentInput) : Student
    #  Deleting the Data
     deletePost( id : String): String
    
    #  Creating Class
     createClass(class : ClassInput) : Class   
    #   for updating the Class
     updateClass(id : String , class: ClassInput) : Class
    #  Deleting the Class
     deleteClass( id : String): String
  }

`

module.exports = typeDefs