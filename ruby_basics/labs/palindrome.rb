# Write a script that prompts a user for a word
# The script will tell the user if the word is a palindrome
# A palindrome is word that is the same backwards as it is forwards

# racecar backwards is racecar

puts "Give me a word"
word = gets.chomp

# if word == word.reverse
#   puts "the word #{word} is a palindrome!"
# else
#   puts "the word #{word} is a NOT a palndrome!" 
# end

# solution without using reverse
reverse = ""
i = word.length - 1
while i >= 0
  reverse = reverse + word[i]
  i -= 1
end

if word == reverse
  puts "the word #{word} is a palindrome!"
else
  puts "the word #{word} is a NOT a palndrome!" 
end
