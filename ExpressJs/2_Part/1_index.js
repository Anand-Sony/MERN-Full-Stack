const { name } = require("ejs");
const express = require("express");
const app = express();

// 1 ----> 

// app.get("/",function(request, response,next){
//     response.send("This is Home Page");
// })

// app.get("/example",function(request, response,next){
//     response.send("This is get Page");
// })
// app.post("/example",function(request, response,next){
//     response.send("This is post Page");
// })
// app.patch("/example",function(request, response,next){
//     response.send("This is patch Page");
// })
// app.delete("/example",function(request, response,next){
//     response.send("This is delete Page");
// })



// 2 ----> now Object Param
// app.use(express.json());

// app.post("/example" , (request, response, next)=>{
//     let data = request.body;
//     console.log(data);
//     response.send("This is example response");
// })


// app.listen(8000 , function(){
//     console.log("Server is running at port 8000");
// })




// 3 ----> now Query String
// app.get("/users", (req, res)=>{
//     res.send("User list");
// })

// app.get("/users/:userId", (req,res)=>{
//     let {userId} = req.params;
//     let {name, email} = req.query;
//     console.log(name,email);

//     res.send("userId = " + userId + " detail.");

// })

// app.listen(8000,()=>{
//     console.log("Server is running at port 8000");
// })



// 4 ----> now sub Route
/*
const admin = express.Router();
const student = express.Router();

app.use("/admin",admin);
app.use("/student",student);

admin.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("admin Home Page");
})

student.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Student Home Page");
})

app.get("/home",(req,res)=>{
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("common home page");
})

app.listen(8000,()=>{
    console.log("Server is running at port 8000");
})
*/



// 5 ----> now cookie
/*
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/example",(req,res)=>{
    // const {email} = req.cookies;
    // console.log(email);

    // res.cookie("name","joe");
    // res.cookie("age","22");

    res.clearCookie("name");
    res.clearCookie("age");
    res.send("example route");
});

app.listen(8000,()=>{
    console.log("Server is running at port 8000");
});
*/




// 6 ----> now Request Object Introduction
/*
app.get("/example",(req,res)=>{

    console.log(req.hostname); 
    console.log(req.ip);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.get("Content-Type"));
    console.log(req.get("Content-Length"));

    res.send("Example Route");
});

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});
*/





// 7 ----> now Response Object Introduction
/*
app.get("/test",(req, res)=>{
    res.send("Test Response");
})

app.get("/example", (req,res)=>{

    //res.end();// this will end the response;
    // res.send("Example Route");
    res.set("title","express")  // takes 2 parameter : header name and header value
    res.set("age",22)  // takes 2 parameter : header name and header value

    res.json({
        name:"Joe",
        age:30,
        email:"joexyz@gmail.com"
    });

    // res.redirect("/test");

    //res.location("/xyz"); // for this your json should should be work
    const title = res.get("title");
    console.log(title); // express
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});
*/




// 8 ----> View Engine and Html Response :
/*
app.set("view engine","ejs");

app.get("/example",(req,res)=>{
    // res.render("pages/home.ejs");

    res.render("test.ejs" , {name:"Joe" , email:"Joe@gmail.com" , age:22})
});

app.listen(8000 , ()=>{
    console.log("Server is running on port 8000");
});
*/





// 9 ----> View Engine and Html Response :
/*
app.set("view engine", "ejs");
app.get("/example", (req, res) => {
    res.format({
        "text/plain":()=>{
            res.send("Plain Text response");
        },
        "application/json":()=>{
            res.json({name:"Joe" , email:"Joe@gmail.com" , age:22});
        },
        "text/html":()=>{
            res.render("pages/home.ejs");
        },
        default:()=>{
            res.send("Nothing Matched");
        }
    })
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
*/




// 10 ----> Http Response Status Code :
/*
app.get("/example",(req,res)=>{
    
    // res.status(302);
    // res.send("Example Route");

    // now we will do same above thing in 1 line:
    // res.status(404).send("Example Route");

    // we can also do json as well : 
    // res.status(500).json({name:"Joe" , age:22});

    // now we want direct status in Postman:
    res.sendStatus(401); // output = bad request
    console.log(res.statusCode + " " + res.statusMessage);     // 400 Bad Request
    
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
*/





// 11 ----> How to use middleWare :
/*
const middleWare1 = (obj)=>{
    return(req,res,next)=>{
        console.log("MiddleWare 1");
        req.name = obj.name;
        req.email = obj.email;
        next();
    }
}
const middleWare2 = (req,res,next)=>{
    console.log("MiddleWare 2");
    next();
}
app.use(middleWare1({name:"joe", email:"joe@gmail.com"}));
app.use(middleWare2);

app.get("/example",(req,res,next)=>{
    console.log(req.name);
    console.log(req.email);
    res.send("Example Route")
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});
*/

// same 11 : if we want to use only multiware 1, then : 
/*
const middleWare1 = (obj)=>{
    return(req,res,next)=>{
        console.log("MiddleWare 1");
        req.name = obj.name;
        req.email = obj.email;
        next();
    }
}
const middleWare2 = (req,res,next)=>{
    console.log("MiddleWare 2");
    next();
}

app.use(middleWare2);

app.get("/example",middleWare1({name:"joe", email:"joe@gmail.com"}),(req,res,next)=>{
    console.log(req.name);
    console.log(req.email);
    res.send("Example Route")
})
app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});
*/





// 12 : Error handling Middleware :
/*
const middleware1 = (req,res,next)=>{
    // throw new Error("error from middleware 1")

    // we can also use next from above case :
    // next("error from middleware 1")

    // but if we keep next() empty then output will be "Middleware 2" and in postman will be "Example Route"
    next();
};
const middleware2 = (req,res,next)=>{
    console.log("Middleware 2");
    next();
};
app.use(middleware1);
app.use(middleware2);

app.get("/example",(req,res,next)=>{
    res.send("Example Route");
});

const errorMiddleware = (error,req,res,next)=>{
    console.log(error);
    res.status(500).send("Response from error Middleware");
};
app.use(errorMiddleware);
app.listen(8001,()=>{
    console.log("Server is running on port 8001");
});
*/






// 13 : Error handling Main :
/*
app.get("/example",(req,res,next)=>{
    console.log(xyz);
    res.send("Example Route");
});
const errorMiddleware = (error, req,res,next)=>{
    //console.log(error);

    // if we want to get message of error then :
    // console.log(error.message);
    // console.log(error.stack);
    // res.send("custom error handling");

    // now we will use next(): so remove upper console.log code :
    //next(error.stack); 

}
app.use(errorMiddleware);
app.listen(8002, ()=>{
    console.log("Server is running on port 8002");
})
*/





// 14 : Error handling using fs module :
const fs = require("fs");
app.get("/example",(req,res,next)=>{
    fs.readFile("text.txt",(error,data)=>{
        if (data) {
            res.send(data);
        }
        if (error) {
            next(error);
        }
    });
});

const errorMiddleware = (error,req,res,next)=>{
    next(error.message);
}
app.set(errorMiddleware);
app.listen(8002,()=>{
    console.log("Server is running on port 8002");
});