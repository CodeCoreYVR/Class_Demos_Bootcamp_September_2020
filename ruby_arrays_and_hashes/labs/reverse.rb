# [Lab] Reverse engineer String's `reverse` method
# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:

# 1 | greeting = "hello"
# 2 | puts greeting.reverse # olleh
# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.

puts "Enter a word"
word = gets.chomp

last_index = word.length - 1

reverse = []

last_index.downto 0 do |i|
  reverse << word[i]
end

puts reverse.join


# another solution

puts "Enter a word"
word = gets.chomp

arr = word.split ''

reverse = []

arr.each do |char|
  p char
  p reverse
  reverse.unshift char
end

puts reverse.join