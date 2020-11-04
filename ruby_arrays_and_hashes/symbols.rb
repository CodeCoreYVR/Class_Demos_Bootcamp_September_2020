a = {
  :hello => "world"
}


b = {
  :hello => "apple"
}

# p a[:hello] # => "world"
# p b[:hello] # => "apple"


arr = ["hello", "greetings", "hola", "hi"]


h = {}
arr.each do |element|
  h[element.to_sym] = element.length
end
p h
