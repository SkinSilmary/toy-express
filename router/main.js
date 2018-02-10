module.exports = function(app)
{
     app.get('/',function(req,res){
         res.render('index', {
             title: "Skin Silmary"
         })
     });
     app.get('/about',function(req,res){
        res.render('about', {
            title: "Skin Silmary"
        })
    });
    app.get('/shop',function(req,res){
        res.render('shop', {
            title: "Skin Silmary"
        })
    });
    app.get('/reviews',function(req,res){
        res.render('reviews', {
            title: "Skin Silmary"
        })
    });
    app.get('/helps',function(req,res){
        res.render('helps', {
            title: "Skin Silmary"
        })
    });
    app.get('/login',function(req,res){
        res.render('login', {
            title: "Skin Silmary"
        })
    });
    app.get('/join',function(req,res){
        res.render('join', {
            title: "Skin Silmary"
        })
    });

}