# [Lab] Find The Repeated Number
# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?

# setup
# arr = Array(1..10000)
# arr[7684] = 20

# # code

# arr.sort!

# arr.each.with_index do |num, i|
#   if num == arr[i + 1]
#     p "Found repeated number"
#     puts num
#   end
# end

# 

# setup
arr = Array(1..10)
arr[5] = 8

hash = {}

arr.each do |num|
  p hash
  if !hash[num]
    hash[num] = true
  else
    p "Found the repeated number"
    puts num
    break
  end
end