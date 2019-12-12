const db = require('../model/db.js');
const express = require('express');
const postRouter = express.Router();
const bodyparser = require('body-parser');
const passport = require('passport');
const { loggedIn } = require('../model/validator.js'); // to check if user is logged in 

const multer = require('multer');
const Jimp = require('jimp');

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'uploads');
	},
	filename(req, file, cb) {
		cb(null, `${file.fieldname}-${Date.now()}`);
	},
});

const imgUpload = multer({ storage });

let parser = bodyparser.urlencoded({ extended: true });
//postRouter.use(parser);

let app = express();
app.use(parser);

// get post page
postRouter.get('/', loggedIn, (req, res) => {
    res.render('post_new',
        {
            page: 'post',
            loggedin: req.user
        });
});

postRouter.get('/edit', loggedIn, (req, res) => {


    res.render('post_edit',
        {
            page: 'post',
            item_name: '<item-name-here>',
            item_price: '<item-price-here>',
            item_category: '<item-category-here>',
            item_description: '<item-description-here>',
            loggedin: req.user
        });
});

async function makeImage(path) {
	try {
		const imgBuffer = await Jimp.read(path)
			.then(lenna => lenna
				.resize(1000, Jimp.AUTO)
				.quality(80)
				.getBufferAsync(Jimp.MIME_JPEG));
		return imgBuffer;
	}
	catch (err) {
		return 'err';
	}
}

//when new post submitted
postRouter.post ("/", loggedIn, parser, imgUpload.single('itemImage'), (req, res)=>{
	(async () => {
		let item = req.body.nameofitem;
		let price = req.body.price;
		let itemType = req.body.type;
		let itemD = req.body.item_description;
		console.log(item + " " + price + " " + itemType + " " + itemD);

		let itemImage;
		if (req.file) {
			itemImage = await makeImage(req.file.path);
		}

		if (req.body.type == 'texts') {
			let data = {
				userId: req.user.id,
				name: req.body.nameofitem,
				description: req.body.item_description,
				price: req.body.price,
				type: req.body.type,
				status: '1',
				itemImage: itemImage
			};
			console.log(itemImage);
			db.query("INSERT INTO item SET ?", data);
		}
		else if (req.body.type == 'school supplies') {
			let data = {
				userId: req.user.id,
				name: req.body.nameofitem,
				description: req.body.item_description,
				price: req.body.price,
				type: req.body.type,
				status: '1',
				itemImage: itemImage
			};
			console.log(itemImage);
			db.query("INSERT INTO item SET ?", data);
		}

		else if (req.body.type == 'home goods') {
			let data = {
				userId: req.user.id,
				name: req.body.nameofitem,
				description: req.body.item_description,
				price: req.body.price,
				type: req.body.type,
				status: '1',
				itemImage: itemImage
			};
			console.log(itemImage);
			db.query("INSERT INTO item SET ?", data);
		}
		res.redirect('/');
	})();
});

module.exports = postRouter;