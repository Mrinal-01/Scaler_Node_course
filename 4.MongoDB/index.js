const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=>console.log("Connection is successful"))
.catch(err=> console.error('Could not connect to mongodb',err))


/*
Schema:- 


*/

const courseSchema=new mongoose.Schema({
    name: {type:String, required:true, minlength:5,maxlength:200},
    tags:{type:Array, validate:{
        validator:function(tags){
           return tags.length>1
        }
    }},
    category:{
        type:String,
        required: true,
        enum:['DSA','WEB','Mobile','Data Science']
    },
    creator:{type:String, required:true},
    publishedDate: {type:Date, default:Date.now},
    isPublished:{type:Boolean, required:true},
    rating:{type:Number, required:function(){return this.isPublished}}
})

//Model:- 

const Course=mongoose.model("Course",courseSchema)

//Creating Model, adding data:-

// async function createCourse(){
//     const course=new Course({
//         name: "Ruby"
//     });
//     try{
//         // const result=await course.save()
//         // console.log(result);
//         await course.validate()
//     }
//     catch(error){
//         console.error(error.message)
//     }
// }




//Validator Methods:-

async function createCourse(){
    const course=new Course({
        name: "MongoDB",
        tags:['express'],
        category:'WEB',
        creator:'Sonam',
        isPublished:true,
        rating: 4.4
    });
    try{
        const result=await course.save()
        console.log(result);
        // await course.validate()
    }
    catch(error){
        // console.error(error.message)
        for(field in error.errors){
            console.log(error.errors);
        }
    }
}




createCourse()


/*
--> Comparison Operator:-
eq(equal)
gt(greater-than)
gte(greater-than-equal)
lt(less than)
lte(less than equal)
in
not in


-> Logical Operator:-
or
and
*/

// async function getCourse(){
//     const courses=await Course.find({rating:{$in:[4.5,4.3,3]}}).select({name:1, rating:1,publishedDate:1})
//     console.log(courses);

// }

// getCourse()


// async function getCourse(){
//         const courses=await Course.find({rating:{$in:[4.5,4.3,3,4.2]}}).select({name:1, rating:1,publishedDate:1})
//         // .or([{creator:'Mrinal'},{rating:2}])
//         .and([{creator:'Mrinal'},{rating:2}])
//         console.log(courses);
    
//     }
    
//     getCourse()



//Update document:-
// async function updateCourse(id){
//     let course=await Course.findById(id)
//     if(!course) return;

//     course.name='Javascript'
//     course.creator='Steve'
//     const updatedCourse=await course.save()
//     console.log(updatedCourse);
// }
// updateCourse('65f5efee7deebb3de7e00621')


//Delete a Documenet

// async function deleteCourse(id){
//     let course=await Course.findByIdAndDelete(id)
//     console.log(course);
// }

// deleteCourse('65f5efee7deebb3de7e00621')


/*
Data Validation:-
*/
