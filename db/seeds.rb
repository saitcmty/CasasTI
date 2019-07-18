# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.delete_all
House.delete_all
House.create!(name: 'Cuervos', house_points: 0)
House.create!(name: 'Gallinas de Guinea', house_points: 0)
House.create!(name: 'Patos', house_points: 0)
House.create!(name: 'Pavo Reales', house_points: 0)
House.create!(name: 'Venados', house_points: 0)