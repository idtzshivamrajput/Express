class FrontController{

    static home =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('home')
    }
        static about =(req,res)=>{
            //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
            res.render('about')
    }

    static teams =(req,res)=>{
        //res.send("hello home ye hai frontcontroller file ke anadar likha hua")
        res.render('teams')
}

    


}

module.exports = FrontController