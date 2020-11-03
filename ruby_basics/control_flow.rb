# Control flow (If statements & friends)

if true
  puts "happens when true"
end

x = 1
if (x > 0)
  puts "x is greater than 0"
end

if false
  puts "condition is false"
else
  puts "condition is else"
end

temp = 10

puts 'Its cold' if temp < 15

puts 'Its cold' unless temp >= 15
# equivalent
unless temp >= 15
  puts 'Its cold'
end