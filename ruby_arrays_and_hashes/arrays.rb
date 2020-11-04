if false
# Ruby Arrays
# a object type that contains a list of items. Arrays are mutable
# can contain any other type of object
a = [[1,2,3], true, "Hello World", :bye, 3.0]

# elements within the array are selectable via their index

p a[2] # => "Hello World"


# Multi-dimensional Array (arrays within arrays)

ma = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]

# selecting the number 9 within the multi-dimensional array
p ma[2][2]

# adding elements to an array

# .push() a method that will add an element to the end of an array

arr = [1, 2, 3]
arr.push(4)
p arr

# shovel operator <<
# another way to add an element to the end of an array

arr << 5
p arr

# Array methods https://ruby-doc.org/core-2.7.2/Array.html

# .count, .length, .size
# returns the number of elements within array
p arr.count # 5
p arr.length # 5
p arr.size # 5

# .flatten
# turns a multi-dimensional array into a one-dimensional array

multi_array = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
p multi_array.flatten # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

d3_array = [[[1],[2],[3]], [[4],[5],[6]], [[7],[8],[9]], [[10],[11],[12]]]
p d3_array.flatten(1) # => [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]]

# .shift
# can remove elements from the start of an array

arr = [1,2,3,4]
p arr.shift # => 1

# .drop returns a new array without the dropped elements
p arr # => [2,3,4]
p arr.drop 1 # => [3,4]
p arr # => [2,3,4]

# .unshift
# adds an element to the start of an array
arr = [1,2,3]
arr.shift 0 # => [0,1,2,3]

# String.split
# turns a string into an array of substrings
p "Hello World".split " " # => ["Hello", "World"]

# Array.join
# joins elements of an array into a string
p ["Hello", "World"].join " " # => "Hello World"

# Swapping elements of an array

a = ["Hello", "CodeCore", "Students"]
a = a[2], a[1], a[0]
p a

#

arr = ['a', 'b', 'c', 'd']
arr[1..2] = [1,2]
p arr

arr = ['a', 'b', 'c', 'd']
arr[0, 4] = [100, 200]
# starting from 0 index
# remove 3 elements
# replace htem with 100, 200
p arr # => [100, 200, 'd']

end

# iterating through elements of an array

c = ["a", "b", "c", "d"]

# using a for loop

# for element in c do
#   puts element
# end

# .each
# the method expects a block with a arguemnt
# blocks start after the `do` statement... arguments are written inside of the pipes | |

if false

c.each do |x|
  y = x * 2
  puts y
end

# another way to write a block

c.each { |val|
  y = val * 2
  puts y
}

c.each { |val| puts val } # if you have simple block it can be written all in one line

# Build, Loop & Print
a = Array(1..5)
a.each do |x|
  p x**2
end

end
# .map
# accepts a block. will return a new array were elements are the results of the block

arr = ["a", "b", "c", "d", "e"]

mapped_arr = arr.map do |element|
  element * 2
end

p mapped_arr


# remember... everything in ruby is an object... the .map method is an object that has a method called .with_index
# calling .with_index will give you the map method but the block has an additional argument as the index

arr = ["a", "b", "c", "d", "e"]

mapped_arr = arr.map.with_index do |element, i|
  p i
  element * i
end

p mapped_arr

# exercise: Printing multiple dimensions

a = [[1,7,3], [4,4,6], [7,2,9]]

a.each do |sub_arr|
  sub_arr.each do |val|
    p val ** 2
  end
end

# exercise: Taking Names
