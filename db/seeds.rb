# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'Guest', password: '123456')

Wine.destroy_all
Wine.create!(vineyard: 'Cline', wine_type: 'zinfandel', location: 'Sonoma, Ca', year: 2016, img_url: "https://www.reversewinesnob.com/wp-content/uploads/2016/03/cline-lodi-zinfandel-150x150.jpg")
Wine.create!(vineyard: 'Cline', wine_type: 'Cuvee', location: 'Sonoma, Ca', year: 2016, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-nancys-cuvee-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
Wine.create!(vineyard: 'Cline', wine_type: 'Pinot Noir', location: 'Sonoma, Ca', year: 2016, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-pinotnoir-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
Wine.create!(vineyard: 'Cline', wine_type: 'gewurztraminer', location: 'Sonoma, Ca', year: 2015, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-gewurztraminer-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
# TODO add images to these when have internet
Wine.create!(vineyard: 'Cupcake', wine_type: 'Chardonnay', location: 'Napa, Ca', year: 2011, img_url: "http://2.bp.blogspot.com/-fUEQ1T-q9so/T-pHNHW4N3I/AAAAAAAACPc/07bz5r_BxQc/s1600/wine-chardonnay.png")
Wine.create!(vineyard: 'Cupcake', wine_type: 'Pinot Grigio', location: 'Napa, Ca', year: 2017, img_url: "https://dsi2vjvztwiuk.cloudfront.net/website/products/96032/bottle/751538/square.png")
Wine.create!(vineyard: 'Cupcake', wine_type: 'Zinfandel', location: 'Napa, Ca', year: 2012, img_url: "https://wine-searcher1.freetls.fastly.net/images/labels/66/02/cupcake-vineyards-zinfandel-lodi-usa-10496602.jpg")
Wine.create!(vineyard: 'Cupcake', wine_type: 'Rose', location: 'Napa, Ca', year: 2015, img_url: "https://www.cupcakevineyards.com/wp-content/uploads/2017/03/explore-rose.png")
