info = ["first name", "last name", "email", "age", "city"]

hash = {}

info.each do |x|
  puts "What is your #{x}?"
  hash[x] = gets.chomp.capitalize
end

hash.each do |key, value|
  puts "Your #{key} is #{value}"
end