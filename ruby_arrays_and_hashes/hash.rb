# hashes are ruby objects
grades = {
  "Jane Doe" => 10,
  "Jim Doe" => 6,
  :lisa => 12,
  "lisa" => 500
}

# p grades
p grades["Jane Doe"]

# you can use strings, numbers, and symbols as keys for a hash
h = {
  "apples" => "yummy",
  12 => "dozen",
  :lisa => 5
}

# p h

# a symbol is an immutable string. You create them using the colon :
:hello # symbol hello

# selecting elements
# use square bracket notation

p h[12] # => "dozen"
p h["apples"] # => "yummy"
p h[:lisa] # => 5

p grades[:lisa] # => 12
p grades["lisa"] # => 500

# Newer hash syntax

grades = {
  jane: 10,
  jim: 6,
  "jane" => 100
}

grades[:jane] # => 10
grades["jane"] # => 100

# equivalent to
# grades = {
#   :jane => 10,
#   :jim => 6,
#   "jane" => 100
# }

# editing values of a hash

grades = {
  jane: 10,
  jim: 6,
  "jane" => 100
}

# select via key then use the re-assignemnt operator to give it a new value
grades[:jane] = 50000
p grades

# exercise: Who directed

movies_with_directors = {
  "Forrest Gump" => "Robert Zemeckis",
  "The Matrix" => "The Watchowskis",
  "Pulp Fiction" => "Quentini Tartino",
  :avengers => "robert downey jr."
}

# Methods
# https://ruby-doc.org/core-2.7.2/Hash.html

# .keys
# returns all the keys of a hash as an array
p movies_with_directors.keys # => ["Forrest Gump", "The Matrix", "Pulp Fiction", :avengers]

# .values
# returns values of a hash
p movies_with_directors.values # => ["Robert Zemeckis", "The Watchowskis", "Quentini Tartino", "robert downey jr."]



# iterating over hashes

# .each

movies_with_directors.each do |key, value|
  puts "#{key}'s director is #{value}"
end

# exercise: candian capitals

canada = {
  "British Columbia" => "Victoria",
  :Alberta => "Edmonton",
  :Saskatchewan => "Regina"
}

canada.each { |province, city|
  puts "#{province}'s capital city is #{city}"
}

# .each_key
# loop through keys of hash
canada.each_key do |province|
  p province
end

# .each_value
# loop through values of hash
canada.each_value do |city|
  p city
end