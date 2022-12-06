class FrontController{

    static home =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('home')
    }
        static about =(req,res)=>{
            //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
            res.render('about')
    }

    static contact =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('contact')
    }

    static blog =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('blog')
    }

    static login =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('login')
    }

}

module.exports = FrontController