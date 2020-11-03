# [Lab] Command line
# Build a command line quiz where it prompts the user with a three questions like:

# How many sides does a hexagon have?
# 1- five
# 2- six
# 3- seven

# Enter the correct number:

# The user can then enter the correct number of the question.

# At the end it will display:

# You scored 66%, you got 2 out of 3 questions correctly.

puts "How many sides does a hexagon have?"
puts "1 => five \n2 => six \n3 => seven"
answer_1 = gets.chomp

puts "What is 150 + 50"
puts "1 => 155 \n2 => 200 \n3 => 350"
answer_2 = gets.chomp

puts "What are we learning today?"
puts "1 => ruby \n2 => javascript \n3 => c++"
answer_3 = gets.chomp

correct_answers = 0

correct_answers += 1 if answer_1.downcase == "six" || answer_1.downcase == "2"
correct_answers += 1 if answer_2.downcase == "200" || answer_2.downcase == "2"
correct_answers += 1 if answer_3.downcase == "ruby" || answer_3.downcase == "1"

puts "You scored #{((correct_answers / 3.0) * 100).round}%, you answered #{correct_answers} out of 3 questions correctly"
