my_hash =  {  "abc"  =>  [1,  2,  3],  "xyz"  =>  [4,  5]  }

# print out all the values within the arrays

my_hash.values.each do |sub_array|
  sub_array.each do |val|
    puts val
  end
end

my_hash.each_value do |value|
  for val in value
    puts val
  end
end

my_hash.each_value do |value|
  value.each do |num|
    puts num
  end
end