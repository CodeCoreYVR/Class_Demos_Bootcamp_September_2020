a = 5
b = 3 ** a

puts "Give me number a"
num1 = gets.chomp
print "Give me number b"
num2 = gets.chomp
puts num1.to_i * num2.to_i


# logical OR ||
# returns true if either the left or right side expression are true

1 > 4 || 8 > 4 # => true
false || false # => false

# logical AND &&
# returns true only if both side expressions are true

false && true # => false
true && true # => true
1 > 4 && 8 > 4 # => false

# equality operator
100 == 100 # => true
100 == '100' # => false