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
Wine.create!(vineyard: 'Cline', wine_type: 'gewurztraminer', location: 'Sonoma, Ca', year: 2016, img_url: "http://clinecellars.com/assets/components/phpthumbof/cache/sonoma-county-gewurztraminer-sm.aaf745cf82d2f01ba858f4ee80462d4f.png")
