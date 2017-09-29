# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!(username: 'Guest', password: '123456')
user2 = User.create!(username: 'AngryUser', password: 'password')
user3 = User.create!(username: 'HappyUser', password: 'password')
user4 = User.create!(username: 'NeutralUser', password: 'password')
user5 = User.create!(username: 'WineCritic', password: 'password')
user6 = User.create!(username: 'WineCriticWannabe', password: 'password')
user7 = User.create!(username: 'RemainsAnonymous', password: 'password')
user8 = User.create!(username: 'TastetheRainbow', password: 'password')
user9 = User.create!(username: 'NoPalette', password: 'password')
user10 = User.create!(username: 'CorksMcGee', password: 'password')
user11 = User.create!(username: 'FlavaFlaav', password: 'password')
user12 = User.create!(username: 'Chuck Norris', password: 'password')


Wine.destroy_all
wine1 = Wine.create!(vineyard: 'Cline', wine_type: 'zinfandel', location: 'Sonoma, Ca', year: 2016, img_url: "https://www.reversewinesnob.com/wp-content/uploads/2016/03/cline-lodi-zinfandel-150x150.jpg")
wine2 = Wine.create!(vineyard: 'Cline', wine_type: 'Cuvee', location: 'Sonoma, Ca', year: 2016, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-nancys-cuvee-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
wine3 = Wine.create!(vineyard: 'Cline', wine_type: 'Pinot Noir', location: 'Sonoma, Ca', year: 2016, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-pinotnoir-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
wine4 = Wine.create!(vineyard: 'Cline', wine_type: 'gewurztraminer', location: 'Sonoma, Ca', year: 2015, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-gewurztraminer-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
wine5 = Wine.create!(vineyard: 'Cupcake', wine_type: 'Chardonnay', location: 'Napa, Ca', year: 2011, img_url: "http://2.bp.blogspot.com/-fUEQ1T-q9so/T-pHNHW4N3I/AAAAAAAACPc/07bz5r_BxQc/s1600/wine-chardonnay.png")
wine6 = Wine.create!(vineyard: 'Cupcake', wine_type: 'Pinot Grigio', location: 'Napa, Ca', year: 2017, img_url: "https://dsi2vjvztwiuk.cloudfront.net/website/products/96032/bottle/751538/square.png")
wine7 = Wine.create!(vineyard: 'Cupcake', wine_type: 'Zinfandel', location: 'Napa, Ca', year: 2012, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/66/02/cupcake-vineyards-zinfandel-lodi-usa-10496602.jpg")
wine8 = Wine.create!(vineyard: 'Cupcake', wine_type: 'Rose', location: 'Napa, Ca', year: 2015, img_url: "https://www.cupcakevineyards.com/wp-content/uploads/2017/03/explore-rose.png")
wine9 = Wine.create!(vineyard: 'V. Sattui', wine_type: 'Cabernet Sauvignon', location: 'Napa, Ca', year: 1996, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/37/02/v-sattui-winery-morisoli-vineyard-cabernet-sauvignon-napa-valley-usa-10743702.jpg")
wine10 = Wine.create!(vineyard: 'V. Sattui', wine_type: 'Cabernet Sauvignon', location: 'Napa, Ca', year: 2011, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/21/23/v-sattui-winery-preston-vineyard-cabernet-sauvignon-napa-valley-usa-10722123.jpg")
wine11 = Wine.create!(vineyard: 'V. Sattui', wine_type: 'Grenache', location: 'Napa, Ca', year: 2000, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/22/33/v-sattui-winery-grenache-napa-valley-usa-10662233.jpg")
wine12 = Wine.create!(vineyard: 'V. Sattui', wine_type: 'Dry Riesling', location: 'Napa, Ca', year: 2014, img_url: "http://s3.amazonaws.com/wootsaleimages/V_Sattui_Winery_Riesling_-_Four_Packs5zDetail.jpg")
wine13 = Wine.create!(vineyard: 'V. Sattui', wine_type: 'Petite Sirah', location: 'Napa, Ca', year: 2013, img_url: "http://enofylzwineblog.com/wp-content/uploads/2013/01/V-Sattui-Trio.jpg")
wine14 = Wine.create!(vineyard: 'Fetzer', wine_type: 'Chardonnay', location: 'Napa, Ca', year: 2017, img_url: "http://www.totalwine.com/media/sys_master/twmmedia/h46/hc4/8820190412830.png")
wine15 = Wine.create!(vineyard: 'Ponzi', wine_type: 'Pinto Gris', location: 'Willamette Valley', year: 2013, img_url: "https://www.wespeakwine.com/resize/Shared/Images/Product/Ponzi-Vineyards-Pinot-Gris-Willamette-Valley-2014-750ML/ponzi_pg_bottle.jpg?bw=600&bh=600")
wine16 = Wine.create!(vineyard: 'Jacuzzi', wine_type: 'Sagrantino', location: 'Napa, CA', year: 2010, img_url: "http://cravelocal.com/wp-content/uploads/2013/07/Jacuzzi-Sagrantino-Wine-review.jpg")
wine17 = Wine.create!(vineyard: 'Cline', wine_type: 'Syrah', location: 'Sonoma, CA', year: 2010, img_url: "http://cravelocal.com/wp-content/uploads/2013/07/Cline-los-carneros-Syrah-wine-review.jpg")
wine18 = Wine.create!(vineyard: 'Jacuzzi', wine_type: 'Barbera', location: 'Mendocino County', year: 2013, img_url: "https://i.pinimg.com/originals/06/2b/1e/062b1efd36e53b1a026ce4e70f2ac365.jpg")
wine19 = Wine.create!(vineyard: 'Jacuzzi', wine_type: 'Nero D\'Avola', location: 'Tracy Valley', year: 2009, img_url: "https://s3.amazonaws.com/thewinespies-production/uploads/product/image/1576-526c9b43bf76492a09c25c5b2cf645bf61b189a1/tall_product_photo.jpg")
wine20 = Wine.create!(vineyard: 'Jacuzzi', wine_type: 'Arneis', location: 'Paicines', year: 2014, img_url: "http://cdn.ct-static.com/labels/1041969.jpg")
wine21 = Wine.create!(vineyard: 'Justin', wine_type: 'Isosceles', location: 'Paso Robles', year: 2014, img_url: "https://www.justinwine.com/content/dam/justin/home/Justin_2014_750ml_Isosceles_rgb.jpg")
wine22 = Wine.create!(vineyard: 'Justin', wine_type: 'Cabernet Sauvignon', location: 'Paso Robles', year: 2011, img_url: "https://www.justinwine.com/content/dam/justin/club/cabernet-198x800.png")
wine23 = Wine.create!(vineyard: 'Justin', wine_type: 'Obtuse', location: 'Paso Robles', year: 2011, img_url: "https://cdn.minibardelivery.com/products/150624/product/Justin_201.jpg?1478203869")
wine24 = Wine.create!(vineyard: 'Charles Shaw', wine_type: 'Shiraz', location: 'CA', year: 2008, img_url: "https://aintfoundagoodtitleblog.files.wordpress.com/2010/12/charlesshawshiraz2008.jpg")
wine25 = Wine.create!(vineyard: 'Charles Shaw', wine_type: 'Cabernet Sauvignon', location: 'CA', year: 2005, img_url: "https://tweedlibrarian.files.wordpress.com/2008/08/charles-shaw-cabernet.jpg")
wine26 = Wine.create!(vineyard: 'Charles Shaw', wine_type: 'Nouveau', location: 'CA', year: 2013, img_url: "http://1.bp.blogspot.com/-RY-r2ffbZH0/UqaL5EuMsbI/AAAAAAAAB8A/eV1dYW8PVUk/s1600/CS+Nouveau.jpg")
wine27 = Wine.create!(vineyard: 'Charles Shaw', wine_type: 'White Zinfandel', location: 'CA', year: 2007, img_url: "https://tweedlibrarian.files.wordpress.com/2008/08/charles-shaw-white-zin.jpg")
wine28 = Wine.create!(vineyard: 'Charles Shaw', wine_type: 'Merlot', location: 'CA', year: 2011, img_url: "http://horriblehousewife.com/wp-content/uploads/2012/12/Wine-with-Mallery-Charles-Shaw-Merlot-2011.jpg")
wine29 = Wine.create!(vineyard: 'Stanger', wine_type: 'Master', location: 'Paso Robles', year: 2005, img_url: "http://www.stangervineyards.com/images/stanger_cab_label.jpg")
wine30 = Wine.create!(vineyard: 'Stanger', wine_type: 'Master', location: 'Paso Robles', year: 2010, img_url: "https://i.ytimg.com/vi/HNlpKo0nf2k/maxresdefault.jpg")
wine31 = Wine.create!(vineyard: 'Trione', wine_type: 'Cabernet Sauvignon', location: 'Alexander Valley', year: 2012, img_url: "https://talkavino.files.wordpress.com/2016/09/trione-vineyards-henrys-blend.jpg")
wine32 = Wine.create!(vineyard: 'Dow\'s', wine_type: 'Porto', location: 'Bomfim', year: 2017, img_url: "https://www.finewinedelivery.co.nz/content/products/300/21118.jpg")
wine33 = Wine.create!(vineyard: 'Fetzer', wine_type: 'Cabernet Sauvignon', location: 'Napa, CA', year: 2012, img_url: "http://www.totalwine.com/media/sys_master/twmmedia/h68/hd6/9194146922526.png")
wine34 = Wine.create!(vineyard: 'Casillero del Diablo', wine_type: 'Cabernet Sauvignon', location: 'Chile', year: 2010, img_url: "https://onlinecashandcarry.co.uk/media/catalog/product/c/a/casillero_del_diablo_cabernet_sauvignon_187ml.jpg")
wine35 = Wine.create!(vineyard: '14 Hands', wine_type: 'Cabernet Sauvignon', location: 'Columbia Valley', year: 2017, img_url: "http://b208032a1d3287a6d3f3-258d94be31bdb406871c37e2eb1690c4.r56.cf1.rackcdn.com/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/1/4/14_hands_cab_mv_750.png")
wine36 = Wine.create!(vineyard: 'V.No', wine_type: 'Malbec', location: 'Chile', year: 2010, img_url: "https://onlinecashandcarry.co.uk/media/catalog/product/c/a/casillero_del_diablo_cabernet_sauvignon_187ml.jpg")
wine37 = Wine.create!(vineyard: 'Oak Grove', wine_type: 'Merlot', location: 'CA', year: 2013, img_url: "http://b208032a1d3287a6d3f3-258d94be31bdb406871c37e2eb1690c4.r56.cf1.rackcdn.com/catalog/product/cache/1/image/300x480/0dc2d03fe217f8c83829496872af24a0/o/a/oak_grove_merlot_13_750.png")
wine38 = Wine.create!(vineyard: 'Fetzer', wine_type: 'Riesling', location: 'CA', year: 2012, img_url: "https://www.haskells.com/media/catalog/product/cache/1/image/816x1200/040ec09b1e35df139433887a97daa66f/5/1/511176_0_1_2_1.jpg")
wine39 = Wine.create!(vineyard: 'Fetzer', wine_type: 'Chardonnay', location: 'CA', year: 2016, img_url: "http://shop.surdyks.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/8/48959.jpg")
wine40 = Wine.create!(vineyard: 'Fetzer', wine_type: 'Pinot Noir', location: 'CA', year: 2011, img_url: "http://cdn2.bigcommerce.com/server4900/7a906/images/stencil/750x750/products/9137/7645/Fetzer-Crimson-Pinot-Noir__86028.1422574732.jpg?c=2")
wine41 = Wine.create!(vineyard: 'Frontera', wine_type: 'Chardonnay', location: 'Chile', year: 2014, img_url: "http://vinovinti.com/wp-content/uploads/2015/07/chard.jpg")
wine42 = Wine.create!(vineyard: 'Coppola', wine_type: 'Chardonnay', location: 'Monterey County', year: 2013, img_url: "https://ffcp.s3.amazonaws.com/tfc/FCW/wines/diamond/Chardonnay/bottle_dia-chardonnay-m.png")
wine43 = Wine.create!(vineyard: 'Gallo', wine_type: 'Chardonnay', location: 'Russian River Valley', year: 2009, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/01/01/gallo-winery-winemaker-s-signature-series-chardonnay-russian-river-valley-usa-10470101.jpg")
wine44 = Wine.create!(vineyard: 'Olema', wine_type: 'Chardonnay', location: 'CA', year: 2010, img_url: "http://www.totalwine.com/media/sys_master/twmmedia/hbe/hab/8806706642974.png")
wine45 = Wine.create!(vineyard: 'Sutter Home', wine_type: 'Zinfandel', location: 'CA', year: 2011, img_url: "http://www.sutterhome.com/sites/default/files/styles/wine_detail/public/wine/zinfandel-details_0.png?itok=_miA25vA")
wine46 = Wine.create!(vineyard: 'Redwood Creek', wine_type: 'Zinfandel', location: 'CA', year: 2010, img_url: "https://www.figarowine.com/liquors/wp-content/uploads/2013/04/zin.png")
wine47 = Wine.create!(vineyard: 'Clos du Bois', wine_type: 'Cabernet Sauvignon', location: 'CA', year: 2010, img_url: "http://s7d9.scene7.com/is/image/SAQ/00397497_is?$saq-prod-tra$")
wine48 = Wine.create!(vineyard: 'Grande Alberone', wine_type: 'Zinfandel', location: 'Italy', year: 2010, img_url: "https://cdn.aldi-digital.ie/Grande-Alberone-Zinfandel.jpg?o=RQJEqbJxMX5Uj1BuUF9e%40Il7TeQj&V=5jb%24")
wine49 = Wine.create!(vineyard: 'Zinfandelic', wine_type: 'Zinfandel', location: 'CA', year: 2014, img_url: "http://www.zinfandelic.com/images/lodi-sf-zinfandelic.jpg")
wine50 = Wine.create!(vineyard: 'Beringer', wine_type: 'White Zinfandel', location: 'CA', year: 2011, img_url: "http://cdn1.bigcommerce.com/server1700/e6b77/products/14157/images/14529/beringer-main-and-vine-california-white-zinfandel-chardonnay__17921.1496359349.220.220.jpg?c=2")


comments = [ "Dilectable",
             "Very good with my favorite cheese",
             "It was ok",
             "Not a fan one bit",
             "Just Nope",
             "Top 10 for sure!",
             "Meh",
             "The best out there",
             "It doesn't get much better than this.",
             "What more can you ask for",
             "Find tannens",
             "Great legs, great color",
             "Flavorful, goes great with fish",
             "This is my go to with steak!",
             "What and incredible year.",
             "Thats REALLY Red",
             "So Bad, so so so bad",
             "mmmm"
            ]

Checkin.destroy_all
60.times do
  Checkin.create!(rating: rand(1..5),
                  comment: comments[rand(0..17)],
                  wine_id: Wine.all[rand(0...50)].id,
                  user_id: User.all[rand(0...12)].id
                 )
end
