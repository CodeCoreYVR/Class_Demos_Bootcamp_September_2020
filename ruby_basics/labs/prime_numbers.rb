require 'byebug'
# prime number is a number that is only divisible by 1 and itself
# 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...

puts "How many prime numbers would you like to see?"
count = gets.chomp

output_count = 0 # holds the amount of times we've printed out a prime number

number = 1

loop do
  byebug
  is_prime = true # flag that assumes all numbers are prime
  for num in 2...number # this for loop will flip the flag is_prime to false if the number is not a prime number
    if number % num == 0
      is_prime = false
    end
  end
  if is_prime # if the flag is still true then we know the number is prime
    puts number # we print out the number
    output_count += 1 # we increment the amount of times we printed out a prime number
  end
  break if count.to_i == output_count # do not calculate any further once we've printed out count amount of prime numbers
  number += 1 # increment the number and try the whole thing again
end