// Cấu hình infor
class inforController {
    //[GET] /infor
    index(req, res) {
        res.render('infor');
    }

    //[Get] /infor/:slug
    show(req, res) {
        if (req.params.slug == 'sad') {
            console.log(typeof req.params.slug); //{ slug: 'sad' }
            res.send('Detail!!');
        } else {
            res.send('Failed!!');
        }
    }
}

module.exports = new inforController();
