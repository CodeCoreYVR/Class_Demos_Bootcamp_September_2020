# Ruby Basics

# Ruby comments use a # to start a single line comment

=begin
I'm a mulitline comment
hello
bonjour
stuff
=end

# To output something to terminal... like console.log
print("Hello World")
print("Goodbye World")

# in terminal use the `ruby` command to run a `.rb` file
# `ruby ./path/to/ruby/file.rb`

# use the puts method to print something on seperate line
puts("Hello World")
puts("Goodbye World")

# the puts command will append a line break `\n` to the end of the string being printed

# the p method will print a value how ruby sees it
# this will give you more detail about the value you are printing
p("Hello World")

p "methods in ruby don't require parenthesis"

# Variables

# Ruby convention for variable use snake_case
first_name = 'Brandon'

p first_name

a = 1
b = a + 5

# variable names can consist of letters and numbers
a1 = 11

# 2a = 12 # don't use numbers as the first character, gives you an errror

# variables will all capital are considered constants. You can change constants but ruby will give you a warning. Bad practice to change a constant
MAX_PASSWORD_ATTEMPTS = 5

# gets
# gets method allows you to promt a user for a input

# print "What is your name?"
# name = gets
# name = " banana"
# puts 'Hello' + name

# everything in ruby is an object.
# use the .class method on any value to print it's class

1.class # => Integer
3.14.class # => Float
"I am a string".class # => String

# Strings

"I'm a String"
'I\'m also a string'

# We can use string interpolation
# Can only be used within double quotes
# Uses the # token to start the expression and {} to hold the expression
"#{1 + 10} is not equal to #{8 + 8}"

# Strings: Mutable or Immutable?

name = 'Brett'
puts "Hello #{name}"
puts name

name[0] = 'F' # changed the first character within the string "Brett" to "F"
puts name # => now prints out "Frett" !!!

# strings in Ruby are MUTATABLE!!!

# String methods

puts "What is your name?"

fname = gets.chomp # gets.chomp works the same way as gets. Removes the line break that gets adds, the value that is recieved is always turned into a string

puts fname

puts fname.capitalize

puts fname.reverse

puts fname.swapcase

puts fname.upcase

puts fname.downcase

# squeeze method removes all the duplicate characters

puts "Helloooooooo mmmy nameeeeeeee isss ".squeeze

# gsub will search and replace a subset of a string

str = "my name is Brandon and your name is Bob"
p str.gsub("name", "title")

# String documentation https://ruby-doc.org/core-2.7.2/String.html

# Numbers and Math

# Documentation https://ruby-doc.org/core-2.7.2/Integer.html

1
10
100
100_000
100_000_000 # _ in ruby is ignored for numbers

# Integers
5 / 3 # => 1
# Integers should only be used for whole numbers. They will be rounded to the neareast whole number if they are a decimal

# To declare a float use a decimal in the number. Floats are a number in ruby that are meant to hold decimal/fraction values
5.0 / 3 # => 1.6666666666666667 

# Operations

1 + 1
1 - 1
1 * 1
1 / 1
1 % 1
1 ** 1

# change a string into a interger or float use .to_i or to_f
"50".to_i  # => 50 string to integer
"50".to_f  # => 50.0 string to float

