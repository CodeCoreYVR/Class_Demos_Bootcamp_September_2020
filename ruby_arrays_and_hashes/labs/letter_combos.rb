# [Lab] Letter combos
# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:

# 1 | ["ab", "bc", "cd"]

# Given a string 123456: 1| ["12", "23", "34", "45", "56"]

# str = gets.chomp

# arr = str.split("") # arr [1,2,3,4,5]

# pairs = []

# for i in 0..arr.length - 2
#   num1 = arr[i]
#   num2 = arr[i + 1]
#   pairs << num1 + num2
# end

# p pairs

# Aleena's solution

letter = "abcd" # ["ab", "bc", "cd"]
arra =[]
splited = letter.split("")
splited.each.with_index do |x,i|
  arra.push(splited[i] + splited[i+1])

  i +=1;
  break if i == splited.length-1
end
p splited
p arra