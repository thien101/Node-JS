// Cấu hình infor
class inforController {
    index(req, res) {
        res.render('infor');
    }

    show(req, res) {
        console.log(req.params); //{ slug: 'sad' }
        res.send('Detail!!');
    }
}

module.exports = new inforController();
