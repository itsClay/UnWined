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

wines = [ wine1,
          wine2,
          wine3,
          wine4,
          wine5,
          wine6,
          wine7,
          wine8,
          wine9,
          wine10,
          wine11,
          wine12,
          wine13,
          wine14,
          wine15 ]

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
            "This is my go to with steak!" ]

users = [ user1,
          user2,
          user3,
          user4,
          user5,
          user6,
          user7 ]

          Checkin.destroy_all
25.times do
  Checkin.create!(rating: rand(1..5),
                  comment: comments[rand(0..13)],
                  wine_id: wines[rand(0..14)].id,
                  user_id: users[rand(0..6)].id)

end
